import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { playerModel } from "../data/model/playerModel";

export default function EditPlayer(props) {
  const [formValues, setFormValues] = useState<playerModel>({
    first_name: "",
    last_name: "",
    sessions: 0,
    drink_1: 0,
    drink_2: 0,
    paid: 0,
    notes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" justifyContent="center" spacing={3}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <TextField
              name="first_name"
              label="First name"
              type="text"
              value={formValues.first_name}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              name="last_name"
              label="Last name"
              type="text"
              value={formValues.last_name}
              onChange={handleInputChange}
              required
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <TextField
              name="drink_1"
              label="Minnie's Drinks"
              type="number"
              value={formValues.drink_1}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              name="drink_2"
              label="Tommy's Drinks"
              type="number"
              value={formValues.drink_2}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <TextField
              name="sessions"
              label="Sessions"
              type="number"
              value={formValues.sessions}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              name="paid"
              label="Paid"
              type="number"
              value={formValues.paid}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Grid item>
            <TextField
              name="notes"
              label="Notes"
              type="text"
              value={formValues.notes}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
