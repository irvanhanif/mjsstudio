import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../files/images/logo.jpg";
import $ from "jquery";

function Navbar({ statix }) {
  useEffect(() => {
    // window.addEventListener("scroll", (e) => scrollHandler(e));
    // return () => window.removeEventListener("scroll", (e) => scrollHandler(e));
  }, []);

  $(function () {
    $(document).scroll(function () {
      let $nav = $(".navbar");
      statix
        ? $nav.addClass("scrolled")
        : $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  // const scrollHandler = (e) => {
  //   const navbar = document.getElementsByClassName("navbar")[0];
  //   if (navbar != null) {
  //     if (e.currentTarget.pageYOffset > navbar.offsetHeight) {
  //       navbar.classList.add("scrolled");
  //     } else {
  //       navbar.classList.remove("scrolled");
  //     }
  //   }
  // };

  return (
    <div id="NavbarPage">
      <nav
        className={`navbar navbar-dark border-bottom border-body navbar-expand-md fixed-top`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
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
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Dashboard
                </Link>
              </li>
              {window.location.pathname.includes("/rent") ? (
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Booking Studio
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
