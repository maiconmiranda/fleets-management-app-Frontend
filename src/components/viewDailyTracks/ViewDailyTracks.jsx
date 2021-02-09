import React from "react";
import { Card } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { Wrapper } from "./ViewDailyTrackStyle";
import { Link } from "react-router-dom";
import { GetDailyTracks } from './getDailyTracks';
import { GetDailyReports } from '../viewDailyReports/getDailyReports';
import { GetIncidents } from '../incidents/GetIncidents';



export function ViewDailyTracks() {
  // get daily reports, only to display the total
  const getDailyReptorts = GetDailyReports()
  // get daily Tracks
  const dailyTracks = GetDailyTracks()
  // get incidents, only to display the total
  const getIncidents = GetIncidents()


  // Get the fuel costs----------------------- /
  const getAllfuelcosts = dailyTracks.map((e) => {
    const allFuelCosts = {}
    allFuelCosts.fuelCost = e.fuel_fee
    return allFuelCosts.fuelCost
  })

  const convertToNumber = getAllfuelcosts.map(Number)
  const sumOfFuelCosts = convertToNumber.reduce((a, b) => a + b, 0).toFixed(2)
  // End -----------------------------------------/

  // Get the parking fees -------------------/
  const getParkingFees = dailyTracks.map((e) => {
    const ParkingFess = {}
    ParkingFess.parkingFee = e.parking_fee
    return ParkingFess.parkingFee
  })
  const convertParkingfee = getParkingFees.map(Number)
  const sumOfparkingFees = convertParkingfee.reduce((a, b) => a + b, 0).toFixed(2)
  // End ---------------------------------/

  // Get the fines -------------------/
  const getFines = dailyTracks.map((e) => {
    const fines = {}
    fines.fines = e.fines
    return fines.fines
  })
  const convertFines = getFines.map(Number)
  const sumOfFines = convertFines.reduce((a, b) => a + b, 0).toFixed(2)
  // End ---------------------------------/


  // Get other costs -------------------/
  const getOthers = dailyTracks.map((e) => {
    const Others = {}
    Others.otherCosts = e.other_fee
    return Others.otherCosts
  })
  const convertOthers = getOthers.map(Number)
  const sumOfOthers = convertOthers.reduce((a, b) => a + b, 0).toFixed(2)
  // End ---------------------------------/

  // Get the total costs of fuel, praking , fines and others
  const totalOfAll = sumOfFuelCosts + sumOfparkingFees + sumOfFines + sumOfOthers
  const total = parseFloat(totalOfAll).toFixed(2)
  // ------------------------/



  return (
    <>
      <Wrapper>
        <h3>Daily Track Reports</h3>
        <Card body>
          <h3>Total Expenses: ${total}</h3>
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
              <p>${sumOfFuelCosts}</p>
            </div>

            <div className="card2">
              <h1>Parking fees</h1>
              <p>${sumOfparkingFees}</p>
            </div>

            <div className="card3">
              <h1>Fines</h1>
              <p>${sumOfFines}</p>
            </div>

            <div className="card4">
              <h1>Oders</h1>
              <p>${sumOfOthers}</p>
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
                <span className="font-bold text-title">{getDailyReptorts.length}</span>
              </div>
            </div>

            <div className="dashcard">
              <i className="fa fa-car fa-2x text-blue" aria-hidden="true"></i>
              <div className="card_inner">
                <p className="text_primary-p">Daily Tracks</p>
                <span className="font-bold text-title">{dailyTracks.length}</span>
              </div>
            </div>

            <div className="dashcard">
              <i className="fa fa-car fa-2x text-red" aria-hidden="true"></i>
              <div className="card_inner">
                <p className="text_primary-p">Incidents</p>
                <span className="font-bold text-title">{getIncidents.length}</span>
              </div>
            </div>
            <Link to="/view-daily-track-vehicle" style={{ textDecoration: "none" }}>
              <div>
                <div className="card1">
                  <h1>View By Vehicle</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
