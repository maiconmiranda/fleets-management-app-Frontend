import { useEffect, useState } from "react";



export function GetDailyTracks() {
    const [dailyTracks, setDailyTracks] = useState([]);


    function fetchDrivers() {

        fetch(`${process.env.REACT_APP_BACKEND_URL}/daily-tracks-company`, {
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
