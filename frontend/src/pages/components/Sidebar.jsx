import React, { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

function Sidebar() {
  const [role, setRole] = useState("USER");

  $(function () {
    $(window).resize(function () {
      if ($(this).width() > 900)
        document.querySelector(".SidebarSection").classList.remove("clicked");
    });
  });

  return (
    <div
      className="SidebarSection"
      id="sidebar"
      onClick={(e) => {
        if (e.target == document.querySelector("#sidebar"))
          document.querySelector(".SidebarSection").classList.remove("clicked");
      }}>
      <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4">MJS Studio Tuban</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <a
              href="#"
              className="nav-link text-white active">
              Dashboard
            </a>
          </li>
          {["ADMIN", "SUPER"].includes(role) ? (
            <div>
              <li>
                <a
                  href="#"
                  className="nav-link text-white">
                  Daftar Sewa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-white">
                  Daftar Booking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-white">
                  Pelanggan
                </a>
              </li>
            </div>
          ) : null}
          {role == "USER" ? (
            <div>
              <li>
                <a
                  href="#"
                  className="nav-link text-white">
                  Barang sewa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-white">
                  Booking studio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-white">
                  Riwayat sewa
                </a>
              </li>
            </div>
          ) : null}
          {role == "SUPER" ? (
            <div>
              <hr />
              <li>
                <a
                  href="#"
                  className="nav-link text-white">
                  Daftar Pengguna
                </a>
              </li>
            </div>
          ) : null}
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <Link
                className="dropdown-item"
                to={"/dashboard-setting"}>
                Profil
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#">
                Keluar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
