import React, { Fragment } from "react";

import "../styles/app.css";
import Header from "./Header";
import Main from "./Main";

function App () {
    const buttonName = "coolButton Den";
        return (
            <Fragment>
                <Header buttonName = {buttonName}/>
                <Main/>
            </Fragment>
        );
}

export default App;