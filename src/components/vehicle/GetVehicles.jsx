import { useState, useEffect } from "react";

export function GetVehicles() {

    const [vehicles, setVehicles] = useState([]);

    function fetchVehicles() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/vehicles`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => res.json())
            .then((body) => setVehicles(body));
    }

    useEffect(() => {
        fetchVehicles();
    }, []);

    return vehicles
}

export function GetVehicleFromCompany(id) {

    const [vehicle, setVehicle] = useState();

    function fetchVehicles() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/vehicles-company/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => res.json())
            .then((body) => setVehicle(body));
    }

    useEffect(() => {
        fetchVehicles();
    }, [id]);

    return vehicle
}