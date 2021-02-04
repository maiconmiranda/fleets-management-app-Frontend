import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Card } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import {
  Wrapper,
  SelectDateCard,
} from "../../components/viewDailyTracks/ViewDailyTrackStyle";

export function ReportByVehicle() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Wrapper>
        <h3>View By Vehicle</h3>
        <Card body>
          <SelectDateCard>
            <p>Select Date</p>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </SelectDateCard>
        </Card>
      </Wrapper>

      <div className="charts">
        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <h1>Total Expenses</h1>
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

        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <h1>Stats Reports</h1>
              <p>"Company name"</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>

          <div className="charts__right__cards">
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
        </div>
      </div>
    </>
  );
}
