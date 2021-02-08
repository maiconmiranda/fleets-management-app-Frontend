import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { DashGreeting } from "../main/DashGreeting";
import { ViewDailyTrackVehicle } from './ViewDailyTrackVehicle';

const DashDailyTrackVehicle = () => {
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
                    <ViewDailyTrackVehicle />
                </div>
            </dash_main>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    );
};

export default DashDailyTrackVehicle;