import React, {useState} from "react";
import "../styles/app.css";
import Country from "./County";
import axios from "axios";
import Table from 'react-bootstrap/Table';
function Countries () {
    const [countries, setCountries] = useState([]);
    if (!countries.length) {
        axios.get("https://restcountries.eu/rest/v2/all").then(res => {
            console.log(res);
            setCountries(res.data);
        });
}

    return (
            <Table striped bordered hover variant="dark" className={"countries"}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Capital</th>
                </tr>
                </thead>
                <tbody>
                {countries.map(country => <Country key={country.alpha3Code} country={country}/>)}
                </tbody>
            </Table>
    );
}

export default Countries;