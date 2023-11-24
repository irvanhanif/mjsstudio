import React from "react";

function NavAuth() {
  const openSidebar = () => {
    document.querySelector(".SidebarSection").classList.add("clicked");
  };

  return (
    <div className="NavAuth">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#">
            MJS Studio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => openSidebar()}>
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"></div> */}
        </div>
      </nav>
    </div>
  );
}

export default NavAuth;
