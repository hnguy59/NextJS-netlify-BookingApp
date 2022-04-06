import React, { useEffect, useState } from "react";
import Link from "next/link";
import firebase from "../../lib/firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { Send } from "@material-ui/icons";
import { playerModel } from "../../data/model/playerModel";
import { data } from "../../data/data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function PlayerList() {
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState<playerModel[]>([]);
  const [open, setOpen] = useState(false);
  const loading = open && options.length === 0;
  const db = getDatabase(firebase.app());
  const getAllPlayersRef = ref(db, "/players");
  let playerList = [];
  let rows = [];
  let invoiceTotal: number;

  onValue(getAllPlayersRef, (snapshot) => {
    snapshot.forEach((item) => {
      playerList[item.key] = item.val();
    });
  });

  const [value, setValue] = useState<string | null>(playerList[0]);

  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        setOptions([...playerList]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  function ccyFormat(num: number) {
    return `$${num.toFixed(2)}`;
  }

  function createPlayerData(desc: string, qty: number, unit: number) {
    const price = qty * unit;
    return { desc, qty, unit, price };
  }

  interface Row {
    desc: string;
    qty: number;
    unit: number;
    price: number;
  }

  function calculateTotal(items: readonly Row[]) {
    return items
      .map(({ price }) => price)
      .reduce((sum, i) => sum.valueOf() + i.valueOf(), 0);
  }

  if (value) {
    rows = [
      createPlayerData("Sessions", value["sessions"], data.costs.session),
      createPlayerData("Minnie's Drinks", value["drink_1"], data.costs.drink_1),
      createPlayerData("Tommy's Drinks", value["drink_2"], data.costs.drink_2),
    ];

    invoiceTotal = calculateTotal(rows);
  }

  return (
    <div className="player-list">
      <h2>Search</h2>
      <div className="player-list__search">
        <Autocomplete
          // Loading
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          loading={loading}
          // Value Check
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
            setSearchValue(
              playerList
                .findIndex(
                  (x) =>
                    x.first_name === newValue["first_name"] &&
                    x.last_name === newValue["last_name"]
                )
                .toString()
            );
          }}
          // Sorting object
          options={playerList.sort((a, b) => {
            var textA = a.first_name.toUpperCase();
            var textB = b.first_name.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
          })}
          groupBy={(item) => item.firstLetter}
          getOptionLabel={(item) => item.first_name + " " + item.last_name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search name"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
        <Link href={`/player/${searchValue}`}>
          <Button variant="contained" size="large" endIcon={<Send />}>
            Go to profile
          </Button>
        </Link>
      </div>
      {value ? (
        <>
          <h3>
            Summary for{" "}
            <u>
              <b>
                {value["first_name"]} {value["last_name"]}
              </b>
            </u>{" "}
            ({ccyFormat(invoiceTotal - value["paid"])})
          </h3>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    Details
                  </TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Desc</TableCell>
                  <TableCell align="right">Qty.</TableCell>
                  <TableCell align="right">Unit ($/1)</TableCell>
                  <TableCell align="right">Sum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.desc}>
                    <TableCell>{row.desc}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">${row.unit}</TableCell>
                    <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Paid</TableCell>
                  <TableCell align="right">
                    {ccyFormat(value["paid"])}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">
                    {ccyFormat(invoiceTotal - value["paid"])}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <h4>Notes:</h4>
          <p>{value["notes"]}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
