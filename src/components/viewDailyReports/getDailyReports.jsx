import { useEffect, useState } from "react";



export function GetDailyTracksByVehicle() {
    const [dailyTracks, setDailyTracks] = useState([]);


    function fetchDrivers() {

        fetch(`${process.env.REACT_APP_BACKEND_URL}/daily-tracks-by-vehicle`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setDailyTracks(data);
            });
    }

    useEffect(() => {
        fetchDrivers();
    }, []);

    return dailyTracks
}
