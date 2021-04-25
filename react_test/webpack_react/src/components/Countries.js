import React, {useState} from "react";
import "../styles/app.css";
import axios from "axios";

function Countries () {
    const [countries, setCountries] = useState([]);
    if (!countries.length) {
        axios.get("https://restcountries.eu/rest/v2/all").then(res => {
            console.log(res);
            setCountries(res.data);
        });
}

    return (
            <table>
                <thead><tr><th>Name</th><th>Capital</th></tr></thead>
                <tbody>
                {countries.map(country =>
                    <tr>
                        <td>{country.name}</td>
                        <td>{country.capital}</td>
                    </tr>)}
                </tbody>
            </table>
    );
}

export default Countries;