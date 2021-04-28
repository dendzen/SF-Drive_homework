import * as React from "react";
import Alert from "react-bootstrap/Alert";

import "../styles/Country.css";
function Alerts(props) {
    let children = props.children;
    return (
        <>
            <Alert variant={"danger"}>
                {props.children.length}
            </Alert>
            <Alert variant={"success"}>
                {props.children}
            </Alert>
            <Alert variant={"success"}>
                {
                    React.Children.map(children, (child, index) => {
                    if (index < 2) {
                        return child;
                    }
                })
                }
            </Alert>
            <Alert variant={"success"}>
                {
                    React.Children.count(props.children)
                }
            </Alert>
        </>
    );
};
export default Alerts;