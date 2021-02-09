import { useEffect, useState } from "react";



export function GetDailyReports() {
    const [dailyReports, setDailyReports] = useState([]);


    function fetchDrivers() {

        fetch(`${process.env.REACT_APP_BACKEND_URL}/daily-reports-company`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setDailyReports(data);
            });
    }

    useEffect(() => {
        fetchDrivers();
    }, []);

    return dailyReports
}
