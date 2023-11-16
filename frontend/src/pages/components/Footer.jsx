import React from "react";

function Footer({ foot }) {
  return (
    <div id="Footer">
      {foot ? <div className="foot-section"></div> : null}
      <div className="footer">&copy; Copyright 2023 - MJS Studio</div>
    </div>
  );
}

export default Footer;
