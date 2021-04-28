import * as React from "react";

import Countries from "./Countries";
import Alerts from "./Alerts";
import "../styles/Main.css";

function Main() {
let alertText = "Alerts Text Children"
    return (
        <main>
            <Alerts>
                {alertText}
                <div>This is first div to show</div>
            </Alerts>
            <Countries />
        </main>
    );
}

export default Main;