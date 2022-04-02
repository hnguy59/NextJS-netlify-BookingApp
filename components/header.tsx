import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { data } from "../data/data";
import { Home, Event, Call, Menu, Close } from "@material-ui/icons";

export default function Header() {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuAnimatingClose, setMobileMenuAnimatingClose] =
    useState(false);

  function openMobileButtonHandler(e) {
    e.preventDefault();
    if (!mobileMenuOpen) {
      setMobileMenuOpen(true);
    }
  }

  function closeMobileButtonHandler(e) {
    e.preventDefault();
    if (mobileMenuOpen) {
      setMobileMenuAnimatingClose(true);
      setTimeout(function () {
        setMobileMenuAnimatingClose(false);
        setMobileMenuOpen(false);
      }, 1000);
    }
  }

  return (
    <div className="header">
      <div className={`header__container`}>
        <div className="header__container-inner">
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
                <Home className="header__nav-item-logo" />
                Home
              </a>
            </Link>
            <Link href="/book">
              <a
                className={`header__nav-item ${
                  router.pathname == "/book" ? "header__nav-item--active" : ""
                }`}
              >
                <Event className="header__nav-item-logo" />
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
                <Call className="header__nav-item-logo" />
                Contact us
              </a>
            </Link>
          </div>
          <div className="header__info">Thanks for playing!</div>

          <button
            className="header__mobile-button header__mobile-button--open"
            onClick={openMobileButtonHandler}
          >
            <Menu />
          </button>
        </div>
      </div>
      <div
        className={`header__mobile-container ${
          mobileMenuOpen ? "header__mobile-container--show" : ""
        } ${
          mobileMenuAnimatingClose ? "header__mobile-container--animating" : ""
        }`}
      >
        <button
          className="header__mobile-button header__mobile-button--close"
          onClick={closeMobileButtonHandler}
        >
          <Close />
        </button>
        <div className="header__mobile-container-inner">
          <div className="header__mobile-logo-container">
            <Link href="/">
              <a className="header__mobile-logo-link">
                <img
                  className="header__mobile-logo"
                  src="../Logo.png"
                  alt={`${data.orgName} Logo`}
                />
                <div className="header__mobile-logo-name">{data.orgName}</div>
              </a>
            </Link>
          </div>
          <div className="header__mobile-nav">
            <Link href="/">
              <a
                className={`header__mobile-nav-item ${
                  router.pathname == "/"
                    ? "header__mobile-nav-item--active"
                    : ""
                }`}
              >
                <Home className="header__mobile-nav-item-logo" />
                Home
              </a>
            </Link>
            <Link href="/book">
              <a
                className={`header__mobile-nav-item ${
                  router.pathname == "/book"
                    ? "header__mobile-nav-item--active"
                    : ""
                }`}
              >
                <Event className="header__mobile-nav-item-logo" />
                Book now
              </a>
            </Link>
            <Link href="/contact-us">
              <a
                className={`header__mobile-nav-item ${
                  router.pathname == "/contact-us"
                    ? "header__mobile-nav-item--active"
                    : ""
                }`}
              >
                <Call className="header__mobile-nav-item-logo" />
                Contact us
              </a>
            </Link>
          </div>
          <div className="header__mobile-info">Thanks for playing!</div>
        </div>
      </div>
    </div>
  );
}
