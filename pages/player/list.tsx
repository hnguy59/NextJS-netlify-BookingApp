// React
import React, { useEffect, useState } from "react";
import Link from "next/link";

// Components
import PlayerReceipt from "../../components/playerReceipt";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { Send, Add } from "@material-ui/icons";

// Functions
import { playerModel } from "../../data/model/playerModel";
import { getAllPlayers } from "../../data/api";

export default function PlayerList() {
  const [options, setOptions] = useState<playerModel[]>([]);
  const [open, setOpen] = useState(false);
  const loading = open && options.length === 0;
  const playerList = getAllPlayers();
  const [value, setValue] = useState<string | null>(playerList[0]);
  const [searchValue, setSearchValue] = useState<number | null>(null);

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
              // THIS IS WRONG BECAUSE IT SORTS THE LIST AFTER, NEED TO CHECK ( SORTING BY INDEX IN THE LIST )
              playerList.findIndex((x) =>
                newValue
                  ? x.first_name === newValue["first_name"] &&
                    x.last_name === newValue["last_name"]
                  : ""
              )
            );
          }}
          // Sorting object
          options={playerList}
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
        <Link href={`/player/${value ? value["id"] : ""}`}>
          <Button
            variant="contained"
            size="large"
            endIcon={<Send />}
            // disabled={value ? true : false}
          >
            Go to profile
          </Button>
        </Link>
        <Link href={`/player/add`}>
          <Button
            variant="contained"
            size="large"
            endIcon={<Add />}
            // disabled={value ? true : false}
          >
            player
          </Button>
        </Link>
      </div>
      {value ? (
        <>
          <h2>Summary</h2>
          <PlayerReceipt data={value} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
