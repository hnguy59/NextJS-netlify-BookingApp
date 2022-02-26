import React from "react";

import FullCalendarComponent from "../components/fullcalendar";

export default class Booking extends React.Component {
  render() {
    return (
      <div className="booking">
        <div className="booking__container">
          <FullCalendarComponent />
        </div>
      </div>
    );
  }
}
