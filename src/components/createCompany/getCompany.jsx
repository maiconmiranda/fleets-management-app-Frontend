import { useState, useEffect } from "react";


export function GetCompany() {
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [managerName, setManagerName] = useState("");
    // const [abn, setAbn] = useState("");
    // const [address, setAddress] = useState("");
    // const [suburb, setSuburb] = useState("");
    // const [state, setState] = useState("");
    // const [contactNumber, setContactNumber] = useState("");
    // const [website, setWebsite] = useState("");
    const [id, setId] = useState(null)
    const headers = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }

    function fetchCompany() {

        // Call the API
        fetch(`${process.env.REACT_APP_BACKEND_URL}/status`, headers).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then((data) => {
            return fetch(`${process.env.REACT_APP_BACKEND_URL}/companies/` + data.company_id, headers);
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then((company) => {
            setId(company.id)
            setCompanyName(company.company_name)
            setEmail(company.email)
            setManagerName(company.manager_name)
            // setAbn(company.abn)
            // setAddress(company.address)
            // setSuburb(company.suburb)
            // setState(company.state)
            // setContactNumber(company.contact_number)
            // setWebsite(company.website)

        })
            .catch((error) => {
                console.warn(error);
            });
    }
    useEffect(() => {
        fetchCompany();
    }, []);


    let companyDetails = [companyName, email, managerName, id]

    return companyDetails
}

