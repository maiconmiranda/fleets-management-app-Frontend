import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { DashGreeting } from "../main/DashGreeting";
import { DisplayOneDriver } from "./DisplayOneDriver";

// Display one selected driver, that belong to the company
const ViewDriver = () => {
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
          {/* display data */}
          <DisplayOneDriver />
        </div>
      </dash_main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default ViewDriver;
