"use strict";
exports.__esModule = true;
var React = require("react");
require("../styles/App.css");
var Header_1 = require("./Header");
var Main_1 = require("./Main");
function App() {
    var buttonName = "Some button updated";
    return (React.createElement(React.Fragment, null,
        React.createElement(Header_1["default"], { buttonName: buttonName }),
        React.createElement(Main_1["default"], null)));
}
exports["default"] = App;
