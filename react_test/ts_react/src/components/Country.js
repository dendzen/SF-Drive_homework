"use strict";
exports.__esModule = true;
var React = require("react");
var Button_1 = require("react-bootstrap/Button");
require("../styles/Country.css");
function Country(props) {
    var _a = React.useState(false), selected = _a[0], changeSelected = _a[1];
    var a = "11";
    a = 9;
    return (React.createElement("tr", { className: selected ? "selected-country" : "" },
        React.createElement("td", null, props.name),
        React.createElement("td", null, props.capital),
        React.createElement("td", null, selected ?
            React.createElement(Button_1["default"], { variant: "danger", onClick: function () { return changeSelected(false); } }, "Remove") :
            React.createElement(Button_1["default"], { variant: "success", onClick: function () { return changeSelected(true); } }, "Add"))));
}
Country.defaultProps = {
    capital: "Not Available"
};
exports["default"] = Country;
