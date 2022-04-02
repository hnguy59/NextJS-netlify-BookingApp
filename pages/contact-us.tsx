import React from "react";
import { data } from "../data/data";

export default function ContactUs() {
  let contactInfo = "";

  if (data.orgOpenHours.length > 0) {
    contactInfo +=
      '<div class="home__contact"><b>Opening hours: </b>' +
      data.orgOpenHours +
      "</div>";
  }

  if (data.orgAddress.length > 0) {
    contactInfo +=
      '<div class="home__contact"><b>Address: </b><a class="home__contact-link" href="' +
      data.orgAddressLink +
      '">' +
      data.orgAddress +
      "</a></div>";
  }

  if (data.orgPhone.length > 0) {
    contactInfo +=
      '<div class="home__contact"><b>Phone number: </b><a class="home__contact-link" href="tel:' +
      data.orgPhone +
      '">' +
      data.orgPhone +
      "</a></div>";
  }

  if (data.orgEmail.length > 0) {
    contactInfo +=
      '<div class="home__contact"><b>Email: </b><a class="home__contact-link" href="mailto:' +
      data.orgEmail +
      '">' +
      data.orgEmail +
      "</a></div>";
  }
  return (
    <div className="contact-us">
      <div className="contact-us__info">
        <h1>Contact Us</h1>
        <div
          className="contact-us__info"
          dangerouslySetInnerHTML={{ __html: contactInfo }}
        ></div>
      </div>
      <div className="contact-us__map">
        <iframe
          width="600"
          height="500"
          style={{ border: "0px" }}
          src="https://maps.google.com/maps?q=153%20North%20Rd,%20Woodridge%20QLD%204114&t=&z=17&ie=UTF8&iwloc=&output=embed"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
