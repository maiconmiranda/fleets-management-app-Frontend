import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { DashGreeting } from "../../components/main/DashGreeting";
import { UpdateCompany } from "./UpdateCompany";

// Display the form to UPDATE company
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
      {/* Top navbar */}
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      {/* dash_main is the area that will display the contents on dashboard */}
      <dash_main>
        <div className="main__container">
          {/* display the greetings  */}
          <DashGreeting />
          {/* display the form to Update Company details */}
          <UpdateCompany />
        </div>
      </dash_main>
      {/* Side NavBar */}
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Dashboard;
