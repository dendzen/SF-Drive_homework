import * as React from "react";

import Countries from "./Countries";
import Alerts from "./Alerts";
import "../styles/Main.css";

function Main() {

    return (
        <main>
            <Alerts />
            <Countries />
        </main>
    );
}

export default Main;