import "./Main.css";
import { Link } from "react-router-dom";
import { DashGreeting } from "./DashGreeting";
import Chart from "../charts/Chart";
import { GetDailyTracks } from '../viewDailyTracks/getDailyTracks';
import { GetDailyReports } from '../viewDailyReports/getDailyReports';
import { GetIncidents } from '../incidents/GetIncidents';
import { GetDrivers } from '../driverCompanyDash/GetDrivers';

// This is where the data for the home dashbard
const DashHome = () => {
  // get daily tracks to disply the total
  const dailyTracks = GetDailyTracks()
  // get daily reports to disply total
  const getDailyReports = GetDailyReports()
  // get incidents to display total
  const getIncidents = GetIncidents()
  // get all drivers to display total
  const getDrivers = GetDrivers()

  return (
    <div className="main__container">
      <DashGreeting />
      {/* /* <!-- MAIN CARDS STARTS HERE --> */}
      <div className="main__cards">

        {/* link to view all numbers of  drivers */}
        <Link to="/view-all-drivers" style={{ textDecoration: "none" }}>
          <div className="dashcard">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text_primary-p">Drivers</p>
              <span className="font-bold text-title">{getDrivers.length}</span>
            </div>
          </div>
        </Link>
        {/* end ----------/  */}

        {/* link to view all numbers of daily tracks */}
        <Link to="/view-daily-track" style={{ textDecoration: "none" }}>
          <div className="dashcard">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text_primary-p">Daily Tracks</p>
              <span className="font-bold text-title">{dailyTracks.length}</span>
            </div>
          </div>
        </Link>
        {/* end ----------/  */}

        {/* link to view all numbers of  daily reports */}
        <Link to="/view-daily-report" style={{ textDecoration: "none" }}>
          <div className="dashcard">
            <i className="fa fa-car fa-2x text-blue" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text_primary-p">Condition Reports</p>
              <span className="font-bold text-title">{getDailyReports.length}</span>
            </div>
          </div>
        </Link>
        {/* end ----------/  */}

        {/* link to view all numbers of incidents */}
        <Link to="/view-incidents" style={{ textDecoration: "none" }}>
          <div className="dashcard">
            <i className="fa fa-car fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text_primary-p">Incidents</p>
              <span className="font-bold text-title">{getIncidents.length}</span>
            </div>
          </div>
        </Link>
        {/* end ----------/  */}
      </div>
      {/* <!-- MAIN CARDS ENDS HERE --> */}

      {/* <!-- CHARTS STARTS HERE --> */}
      <div className="charts">
        <div className="charts__left">
          <div className="charts__left__title">
            <div>
              <h1>Daily Reports</h1>
              <p>Total expenses</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>
          <Chart />
        </div>

        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <h1>Stats Reports</h1>
              <p>"Company name"</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>

          <div className="charts__right__cards">
            <div className="card1">
              <h1>Fuel costs</h1>
              <p>$1,300.00</p>
            </div>

            <div className="card2">
              <h1>Parking fees</h1>
              <p>$120.00</p>
            </div>

            <div className="card3">
              <h1>Fines</h1>
              <p>1,900.00</p>
            </div>

            <div className="card4">
              <h1>Oders</h1>
              <p>1,88.10</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CHARTS ENDS HERE --> */}
    </div>
  );
};

export default DashHome;
