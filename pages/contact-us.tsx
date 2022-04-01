import React from "react";
import { data } from "../data/data";

export default function ContactUs() {
  let contactInfo = "";

  if (data.orgOpenHours.length > 0) {
    contactInfo +=
      '<div className="home__contact"><b>Opening hours: </b>' +
      data.orgOpenHours +
      "</div>";
  }

  if (data.orgAddress.length > 0) {
    contactInfo +=
      '<div className="home__contact"><b>Address: </b>' +
      data.orgAddress +
      "</div>";
  }

  if (data.orgPhone.length > 0) {
    contactInfo +=
      '<div className="home__contact"><b>Phone number: </b>' +
      data.orgPhone +
      "</div>";
  }

  if (data.orgEmail.length > 0) {
    contactInfo +=
      '<div className="home__contact"><b>Email: </b>' +
      data.orgEmail +
      "</div>";
  }
  return (
    <div className="contact-us">
      <div dangerouslySetInnerHTML={{ __html: contactInfo }}></div>
    </div>
  );
}
