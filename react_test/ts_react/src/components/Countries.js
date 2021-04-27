"use strict";
exports.__esModule = true;
var React = require("react");
var axios_1 = require("axios");
var Table_1 = require("react-bootstrap/Table");
var Country_1 = require("./Country");
require("../styles/Countries.css");
function Countries() {
    var _a = React.useState([]), countries = _a[0], setCountries = _a[1];
    if (!countries.length) {
        axios_1["default"].get("https://restcountries.eu/rest/v2/all").then(function (res) {
            console.log(res);
            setCountries(res.data);
        });
    }
    return (React.createElement(Table_1["default"], { striped: true, bordered: true, hover: true, className: "countries" },
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", null, "Name"),
                React.createElement("th", null, "Capital"),
                React.createElement("th", null))),
        React.createElement("tbody", null, countries.map(function (country) { return country.capital ? React.createElement(Country_1["default"], { key: country.alpha3Code, name: country.name, capital: country.capital }) : React.createElement(Country_1["default"], { key: country.alpha3Code, name: country.name }); }))));
}
exports["default"] = Countries;
