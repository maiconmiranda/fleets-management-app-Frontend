import { useEffect, useState } from "react";



export function GetIncidents() {
    const [incidents, setIncidents] = useState([]);


    function fetchDrivers() {

        fetch(`${process.env.REACT_APP_BACKEND_URL}/incidents-company`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setIncidents(data);
            });
    }

    useEffect(() => {
        fetchDrivers();
    }, []);

    return incidents
}