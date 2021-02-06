import "./Main.css";
import { DashGreeting } from "./DashGreeting";
import Chart from "../charts/Chart";

const DashHome = () => {
  return (
    <div className="main__container">
      <DashGreeting />
      {/* /* <!-- MAIN CARDS STARTS HERE --> */}
      <div className="main__cards">
        <div className="dashcard">
          <i
            className="fa fa-user-o fa-2x text-lightblue"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text_primary-p">Drivers</p>
            <span className="font-bold text-title">34</span>
          </div>
        </div>

        <div className="dashcard">
          <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
          <div className="card_inner">
            <p className="text_primary-p">Daily Tracks</p>
            <span className="font-bold text-title">130</span>
          </div>
        </div>

        <div className="dashcard">
          <i className="fa fa-car fa-2x text-blue" aria-hidden="true"></i>
          <div className="card_inner">
            <p className="text_primary-p">Condition Reports</p>
            <span className="font-bold text-title">25</span>
          </div>
        </div>

        <div className="dashcard">
          <i className="fa fa-car fa-2x text-red" aria-hidden="true"></i>
          <div className="card_inner">
            <p className="text_primary-p">Incidents</p>
            <span className="font-bold text-title">2</span>
          </div>
        </div>
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
