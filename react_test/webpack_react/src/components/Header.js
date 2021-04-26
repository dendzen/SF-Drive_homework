import React, { useState } from "react";
import "../styles/app.css";
import Button from 'react-bootstrap/Button';
function Header(props) {
    let [count, setNewCount] = useState(0);
    const handleClick = () => {
        setNewCount(count +1);
    }

        return (
                <header>This is Header
                    <Button className={"some-button"} onClick={handleClick}>
                        {props.buttonName}, clicked: {count} times
                    </Button>
                </header>
        );
}

export default Header;