import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { playerModel } from "../data/model/playerModel";
import { newIndex, setPlayer } from "../data/api";

export default function AddPlayer() {
  const [formValues, setFormValues] = useState<playerModel>({
    first_name: "",
    last_name: "",
    sessions: 0,
    drink_1: 0,
    drink_2: 0,
    paid: 0,
    notes: "",
  });

  async function getNewId(): Promise<number> {
    const id: number = await newIndex();
    return id;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const index = await getNewId();
    let model = formValues;

    setPlayer(model, index);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    console.log("cancel");
  };

  return (
    <div className="add-player">
      <div className="add-player__container">
        <form className="add-player__form" onSubmit={handleSubmit}>
          <div className="add-player__form-row">
            <TextField
              name="first_name"
              label="First name"
              type="text"
              value={formValues.first_name}
              onChange={handleInputChange}
              required
            />
            <TextField
              name="last_name"
              label="Last name"
              type="text"
              value={formValues.last_name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="add-player__form-row">
            <TextField
              name="drink_1"
              label="Minnie's Drinks"
              type="number"
              value={formValues.drink_1}
              onChange={handleInputChange}
            />
            <TextField
              name="drink_2"
              label="Tommy's Drinks"
              type="number"
              value={formValues.drink_2}
              onChange={handleInputChange}
            />
          </div>

          <div className="add-player__form-row">
            <TextField
              name="sessions"
              label="Sessions"
              type="number"
              value={formValues.sessions}
              onChange={handleInputChange}
            />
            <TextField
              name="paid"
              label="Paid"
              type="number"
              value={formValues.paid}
              onChange={handleInputChange}
            />
          </div>

          <div className="add-player__form-row">
            <TextField
              name="notes"
              label="Notes"
              type="text"
              value={formValues.notes}
              onChange={handleInputChange}
            />
          </div>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <Button
            variant="contained"
            color="default"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
}
