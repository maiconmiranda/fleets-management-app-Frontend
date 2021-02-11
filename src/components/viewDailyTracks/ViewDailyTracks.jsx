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
  const sumFuelCosts = convertToNumber.reduce((a, b) => a + b, 0)
  const sumOfFuelCosts = new Intl.NumberFormat('de-AU').format(sumFuelCosts)
  // End -----------------------------------------/

  // Get the parking fees -------------------/
  const getParkingFees = dailyTracks.map((e) => {
    const ParkingFess = {}
    ParkingFess.parkingFee = e.parking_fee
    return ParkingFess.parkingFee
  })
  const convertParkingfee = getParkingFees.map(Number)
  const getSumOfParkingFees = convertParkingfee.reduce((a, b) => a + b, 0)
  const sumOfparkingFees = new Intl.NumberFormat('de-AU').format(getSumOfParkingFees)
  // End ---------------------------------/

  // Get the fines -------------------/
  const getFines = dailyTracks.map((e) => {
    const fines = {}
    fines.fines = e.fines
    return fines.fines
  })
  const convertFines = getFines.map(Number)
  const finesSum = convertFines.reduce((a, b) => a + b, 0)
  const sumOfFines = new Intl.NumberFormat('de-AU').format(finesSum)
  // End ---------------------------------/


  // Get other costs -------------------/
  const getOthers = dailyTracks.map((e) => {
    const Others = {}
    Others.otherCosts = e.other_fee
    return Others.otherCosts
  })
  const convertOthers = getOthers.map(Number)
  const OthersExpensesSum = convertOthers.reduce((a, b) => a + b, 0)
  const sumOfOthers = new Intl.NumberFormat('de-AU').format(OthersExpensesSum)
  // End ---------------------------------/

  // Get the total costs of fuel, praking , fines and others
  const expenses = [sumFuelCosts, getSumOfParkingFees, finesSum, OthersExpensesSum]
  const sumOfAll = expenses.map(Number).reduce((a, b) => a + b, 0)
  const total = new Intl.NumberFormat('de-AU').format(sumOfAll)
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
              <h1>Others</h1>
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
            <Link to="/view-daily-report" style={{ textDecoration: "none" }}>
              <div className="dashcard">
                <i className="fa fa-car fa-2x text-blue" aria-hidden="true"></i>
                <div className="card_inner">
                  <p className="text_primary-p">Condition Reports</p>
                  <span className="font-bold text-title">{getDailyReptorts.length}</span>
                </div>
              </div>
            </Link>

            <div className="dashcard">
              <i className="fa fa-car fa-2x text-blue" aria-hidden="true"></i>
              <div className="card_inner">
                <p className="text_primary-p">Daily Tracks</p>
                <span className="font-bold text-title">{dailyTracks.length}</span>
              </div>
            </div>

            <Link to="/view-incidents" style={{ textDecoration: "none" }}>
              <div className="dashcard">
                <i className="fa fa-car fa-2x text-red" aria-hidden="true"></i>
                <div className="card_inner">
                  <p className="text_primary-p">Incidents</p>
                  <span className="font-bold text-title">{getIncidents.length}</span>
                </div>
              </div>
            </Link>
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
