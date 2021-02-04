import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { DashGreeting } from "../../components/main/DashGreeting";
import { UpdateCompany } from "./UpdateCompany";

const Dashboard = () => {
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
          <UpdateCompany />
        </div>
      </dash_main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Dashboard;
