import React from "react";

import Skedda from "../components/skedda";

export default class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book__container">
          <Skedda />
        </div>
      </div>
    );
  }
}
