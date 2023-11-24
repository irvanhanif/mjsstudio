import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../files/images/logo.jpg";
import $ from "jquery";
import { useState } from "react";

function Navbar({ staticNav }) {
  const [staticNavbar, setStaticNavbar] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setStaticNavbar(true);
    } else {
      setStaticNavbar(staticNav);
      const elNav = document.querySelector(".navbar");
      if (window.pageYOffset > elNav.clientHeight)
        elNav.classList.add("scrolled");
    }
  }, []);

  $(function () {
    $(document).scroll(function () {
      let $nav = $(".navbar");
      staticNavbar || $(this).width() < 768
        ? $nav.addClass("scrolled")
        : $nav.toggleClass(
            "scrolled",
            $(this).scrollTop() > $nav.height() && $(this).width() >= 768
          );
    });
    $(window).resize(function () {
      let $nav = $(".navbar");
      staticNavbar || $(this).width() < 768
        ? $nav.addClass("scrolled")
        : $(this).scrollTop() > $nav.height()
        ? $nav.addClass("scrolled")
        : $nav.removeClass("scrolled");
    });
  });

  return (
    <div id="NavbarPage">
      <nav
        className={`navbar ${
          staticNavbar ? "scrolled" : ""
        } navbar-dark border-bottom border-body navbar-expand-md fixed-top`}>
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to={"/"}>
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            MJS Studio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={"/"}>
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link">
                  Dashboard
                </Link>
              </li> */}
              {window.location.pathname != "/book" ? (
                <li className="nav-item">
                  <Link
                    to={"/book"}
                    className="nav-link">
                    Booking Studio
                  </Link>
                </li>
              ) : null}

              {window.location.pathname != "/rent" ? (
                <li className="nav-item">
                  <Link
                    to={"/rent"}
                    className="nav-link">
                    Rental Kamera
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
