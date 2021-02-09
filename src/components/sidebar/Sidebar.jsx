import "./Sidebar.css";
import on_scooter from "../../assets/on_scooter.svg";
import { Link } from "react-router-dom";


// Side nav bar, company dashboard
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={on_scooter} alt="logo" />
          <h1>fleets</h1>
          <hr />
          <h3>Company Area</h3>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      {/* link to dashboard */}
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <Link to="/company">Dashboard</Link>
        </div>
        <h2>ACCOUNT</h2>
        {/* link to Update Company */}
        <div className="sidebar__link">
          <i className="fa fa-address-book" aria-hidden="true"></i>
          <Link to="/update-company/:id">Update Company Details</Link>
        </div>
        {/* link to settings, **not available at this moment */}
        <div className="sidebar__link">
          <i className="fa fa-cog"></i>
          <a href="/">Settings</a>
        </div>
        <h2>DRIVERS</h2>
        {/* link to display all drivers */}
        <div className="sidebar__link">
          <i className="fa fa-id-card"></i>
          <Link to="/view-all-drivers">View All Drivers</Link>
        </div>
        <h2>VEHICLE</h2>
        {/* link to display all vehicles */}
        <div className="sidebar__link">
          <i className="fa fa-car"></i>
          <Link to="/view-all-vehicles">View Fleet</Link>
        </div>
        {/* link to add vehicle */}
        <div className="sidebar__link">
          <i className="fa fa-plus"></i>
          <Link to="/add-vehicle">Add Vehicle</Link>
        </div>
        {/* link to display all vehicle, the remove buttom is there */}
        <div className="sidebar__link">
          <i className="fa fa-minus"></i>
          <Link to="/view-all-vehicles">Remove Vehicle</Link>
        </div>
        {/* link to assign driver to vehicle */}
        <div className="sidebar__link">
          <i className="fa fa-link"></i>
          <Link to="/assign-driver">Assign Driver To Vehicle</Link>
        </div>
        <h2>REPORTS</h2>
        {/* link to reports page */}
        <div className="sidebar__link">
          <i className="fa fa-database"></i>
          <Link to="/view-reports">View Reports</Link>
        </div>
        {/* logout */}
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="/">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
