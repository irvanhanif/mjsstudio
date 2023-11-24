import React from "react";
import Sidebar from "../../components/Sidebar";
import NavAuth from "../../components/NavAuth";

function Dashboard({ children }) {
  return (
    <div className="DashboardPage d-flex">
      <Sidebar />
      <div className="contentPage">
        <NavAuth />
        <div className="contentSection">{children}</div>
      </div>
    </div>
  );
}

export default Dashboard;
