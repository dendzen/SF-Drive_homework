import * as React from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Country from "./Country";


import "../styles/Countries.css";

function Countries() {
    const [countries, setCountries] = React.useState([]);
    type CurrencyType = {
        code: string,
        name: string,
        symbol: string
    }
    type CountryType = {
        name: string
        capital: string
        alpha3Code: string
        currencies: Array<CurrencyType>
    }
    if(!countries.length) {
        axios.get("https://restcountries.eu/rest/v2/all").then(res => {
            console.log(res);
            setCountries(res.data);
        });
    }
    return (
        <Table striped bordered hover className={"countries"}>
            <thead><tr><th>Name</th><th>Capital</th><th></th></tr></thead>
            <tbody>
                {countries.map((country : CountryType) => country.capital ? <Country key={country.alpha3Code}
                name={country.name}
                capital={country.capital}/> : <Country key={country.alpha3Code}
                                                       name={country.name}/>)}
            </tbody>
        </Table>
    );
}

export default Countries;