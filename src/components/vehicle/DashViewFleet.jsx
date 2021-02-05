import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { DashGreeting } from "../main/DashGreeting";
import { DisplayAllVehicles } from "./DisplayFleet";

const ViewAllVehicles = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="dashcontainer">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <div className="dash_main">
        <div className="main__container">
          <DashGreeting />
          <DisplayAllVehicles />
        </div>
      </div>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default ViewAllVehicles;
