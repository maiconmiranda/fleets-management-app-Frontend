import React, { useEffect, useState } from "react";
import { GetUser } from '../main/GetUser';


export function GetDailyTracks() {
    const getCompany = GetUser()
    const companyId = getCompany.company_id

    const [dailyTracks, setDailyTracks] = useState([]);


    function fetchDrivers() {

        fetch(`${process.env.REACT_APP_BACKEND_URL}/daily_tracks`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((users) => {
                const companyUsers = users.filter(
                    (user) => user.company_id === companyId
                );
                setDailyTracks(companyUsers);
            });
    }

    useEffect(() => {
        fetchDrivers();
    }, [companyId]);

    return dailyTracks
}
// // Get the fuel costs----------------------- /
// const getAllfuelcosts = dailyTracks.map((e) => {
//   const allFuelCosts = {}
//   allFuelCosts.fuelCost = e.fuel_fee
//   return allFuelCosts.fuelCost
// })

// const convertToNumber = getAllfuelcosts.map(Number)
// const sumOfFuelCosts = convertToNumber.reduce((a, b) => a + b, 0).toFixed(2)
// // End -----------------------------------------/

// // Get the parking fees -------------------/
// const getParkingFees = dailyTracks.map((e) => {
//   const ParkingFess = {}
//   ParkingFess.parkingFee = e.parking_fee
//   return ParkingFess.parkingFee
// })
// const convertParkingfee = getParkingFees.map(Number)
// const sumOfparkingFees = convertParkingfee.reduce((a, b) => a + b, 0).toFixed(2)
// // End ---------------------------------/

// // Get the parking fees -------------------/
// const getFines = dailyTracks.map((e) => {
//   const fines = {}
//   fines.parkingFee = e.parking_fee
//   return fines.parkingFee
// })
// const convertFines = getFines.map(Number)
// const sumOfFines = convertFines.reduce((a, b) => a + b, 0).toFixed(2)
// // End ---------------------------------/


// // Get the parking fees -------------------/
// const getOthers = dailyTracks.map((e) => {
//   const Others = {}
//   Others.parkingFee = e.parking_fee
//   return Others.parkingFee
// })
// const convertOthers = getOthers.map(Number)
// const sumOfOthers = convertOthers.reduce((a, b) => a + b, 0).toFixed(2)
// // End ---------------------------------/