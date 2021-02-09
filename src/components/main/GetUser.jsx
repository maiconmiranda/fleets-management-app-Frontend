import { useState, useEffect } from "react";


// Fetch the current user details
export function GetUser() {
    const [user, setUser] = useState([]);

    function fetchUser() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/status`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((body) => setUser(body));
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return user
}




