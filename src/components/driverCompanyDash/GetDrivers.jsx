import { useEffect, useState } from "react";



export function GetDrivers() {
    const [drivers, setDrivers] = useState([]);


    function fetchDrivers() {

        fetch(`${process.env.REACT_APP_BACKEND_URL}/users-company`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setDrivers(data);
            });
    }

    useEffect(() => {
        fetchDrivers();
    }, []);

    return drivers
}

export function GetDriversById(id) {
    const [driversById, setDrivers] = useState([]);


    function fetchDrivers() {

        fetch(`${process.env.REACT_APP_BACKEND_URL}/users-company${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setDrivers(data);
            });
    }

    useEffect(() => {
        fetchDrivers();
    }, []);

    return driversById
}