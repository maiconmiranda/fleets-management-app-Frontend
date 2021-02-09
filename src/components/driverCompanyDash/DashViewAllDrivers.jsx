import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { DashGreeting } from "../main/DashGreeting";
import { DisplayAllDrivers } from "./DisplayAllDrivers";

// Display All drivers that belongs to the company
const ViewAllDrivers = () => {
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
      <dash_main>
        <div className="main__container">
          <DashGreeting />
          {/* Display the data */}
          <DisplayAllDrivers />
        </div>
      </dash_main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default ViewAllDrivers;
