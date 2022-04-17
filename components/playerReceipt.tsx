import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { data } from "../data/data";

interface Row {
  desc: string;
  qty: number;
  unit: number;
  price: number;
}

export default function PlayerReceipt(props) {
  let rows = [];
  let invoiceTotal: number;

  function ccyFormat(num: any) {
    if (num) {
      return `$${parseInt(num).toFixed(2)}`;
    }
  }

  function createPlayerData(desc: string, qty: number, unit: number) {
    const price = qty * unit;
    return { desc, qty, unit, price };
  }

  function calculateTotal(items: readonly Row[]) {
    return items
      .map(({ price }) => price)
      .reduce((sum, i) => sum.valueOf() + i.valueOf(), 0);
  }

  if (props) {
    rows = [
      createPlayerData("Sessions", props.data["sessions"], data.costs.session),
      createPlayerData(
        "Minnie's Drinks",
        props.data["drink_1"],
        data.costs.drink_1
      ),
      createPlayerData(
        "Tommy's Drinks",
        props.data["drink_2"],
        data.costs.drink_2
      ),
    ];

    invoiceTotal = calculateTotal(rows);
  }
  return (
    <div className="player-receipt">
      <h3>
        {props.data["first_name"]} {props.data["last_name"]} (
        {ccyFormat(invoiceTotal - props.data["paid"])})
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
                {ccyFormat(props.data["paid"])}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                {ccyFormat(invoiceTotal - props.data["paid"])}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <h4>Notes:</h4>
      <p>{props.data["notes"]}</p>
    </div>
  );
}
