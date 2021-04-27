"use strict";
exports.__esModule = true;
var React = require("react");
require("../styles/Header.css");
function Header(props) {
    var _a = React.useState(0), count = _a[0], setNewCount = _a[1];
    var handleClick = function () {
        setNewCount(count + 1);
    };
    return (React.createElement("header", null,
        "This is header",
        React.createElement("button", { className: "some-button", onClick: handleClick },
            props.buttonName,
            ", clicked: ",
            count,
            " times")));
}
exports["default"] = Header;
