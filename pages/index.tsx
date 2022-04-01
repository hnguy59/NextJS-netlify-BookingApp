import React from "react";
import Link from "next/link";
import { data } from "../data/data";
import ImageGallery from "../components/imageGallery";

export default function Home() {
  const SLIDE_COUNT = 4;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
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
    <div className="home">
      <div className="home__welcome">
        <h1 className="home__welcome-heading">
          Welcome to
          <span className="home__welcome-heading--emphasize">
            {data.orgName}
          </span>
        </h1>
      </div>
      <div className="home__info">
        <p>{data.orgDesc}</p>
        <div dangerouslySetInnerHTML={{ __html: contactInfo }}></div>
      </div>
      <div className="home__book-now">
        <Link href="/book">
          <button className="home__book-now-button">Book now</button>
        </Link>
      </div>
      <div className="home__image-gallery">
        <ImageGallery slides={slides} />
      </div>
    </div>
  );
}
