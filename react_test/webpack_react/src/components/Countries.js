import React, {useState} from "react";
import "../styles/app.css";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
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
                {countries.map(country =>
                    <tr>
                        <td>{country.name}</td>
                        <td>{country.capital}</td>
                        <td>
                            <Button variant="success">Add</Button>
                            <Button variant="danger">Remove</Button>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
    );
}

export default Countries;