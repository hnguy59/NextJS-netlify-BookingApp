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
          className="contact-us__map-iframe"
          style={{ border: "0px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.7415517190047!2d153.0974746150584!3d-27.539487382861836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915bf8cd4c2f97%3A0x90250fad34390d03!2sDemoGroup%20Pty%20Ltd!5e0!3m2!1sen!2sau!4v1648910190405!5m2!1sen!2sau"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
