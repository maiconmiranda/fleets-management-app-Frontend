import React, { useState, useEffect } from "react";
// import axios from 'axios'


export function GetVehicle(props) {
    const [vehicle, setVehicle] = useState(null);
    const id = props.match.params.id;

    useEffect(() => {
        // localhost:3000/companies/10
        fetch(`${process.env.REACT_APP_BACKEND_URL}/vehicles/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => res.json())
            .then((vehicle) => {
                setVehicle(vehicle);
            });
    }, [id]);






    // // const [email, setEmail] = useState("");
    // const [companies, setCompanies] = useState([]);
    // // const [id, setId] = useState("")
    // const id = props.match.params.id;
    // console.log(id)
    // const headers = {
    //     headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     }
    // }

    // // const fetchvehicleId = () => {

    // //     const vehicleId = axios.get(`${process.env.REACT_APP_BACKEND_URL}/status`, headers)
    // //         .then(res => {
    // //             return res.data.current_user.vehicle_id
    // //         })
    // //         .catch(err => {

    // //         });
    // //     return vehicleId
    // // }

    // // const id = fetchvehicleId()

    // // console.log(id)



    // const fetchvehicle = () => {

    //     const vehicle = axios.get(`${process.env.REACT_APP_BACKEND_URL}/companies/${id}`, headers)
    //         .then(res => {
    //             return res
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         });
    //     return vehicle
    // }

    // const vehicle = fetchvehicle()
    // console.log(vehicle)

    return (
        vehicle && (
            <>
                <div>
                    <h2>model: {vehicle.model}</h2>
                    <p>make: ${vehicle.make}</p>
                    <p>year: {vehicle.year}</p>
                </div>
            </>

        )
    )

}
