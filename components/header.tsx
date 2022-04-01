import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { data } from "../data/data";

export default function Header() {
  const router = useRouter();

  function mobileButtonHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <Link href="/">
            <a className="header__logo-link">
              <img
                className="header__logo"
                src="../Logo.png"
                alt={`${data.orgName} Logo`}
              />
              <div className="header__logo-name">{data.orgName}</div>
            </a>
          </Link>
        </div>
        <div className="header__nav">
          <Link href="/">
            <a
              className={`header__nav-item ${
                router.pathname == "/" ? "header__nav-item--active" : ""
              }`}
            >
              <span className="material-icons-outlined">home</span>
              Home
            </a>
          </Link>
          <Link href="/book">
            <a
              className={`header__nav-item ${
                router.pathname == "/book" ? "header__nav-item--active" : ""
              }`}
            >
              <span className="material-icons">event</span>
              Book now
            </a>
          </Link>
          <Link href="/contact-us">
            <a
              className={`header__nav-item ${
                router.pathname == "/contact-us"
                  ? "header__nav-item--active"
                  : ""
              }`}
            >
              <span className="material-icons">call</span>
              Contact us
            </a>
          </Link>
        </div>
        <div className="header__info">Thanks for playing!</div>
      </div>
      <button className="header__mobile-button" onClick={mobileButtonHandler}>
        OPEN MENU
      </button>
    </div>
  );
}
