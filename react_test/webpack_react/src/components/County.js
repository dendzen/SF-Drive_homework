import React, {useState} from "react";
import "../styles/app.css";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function Country (props) {
    const [selected, changeSelected] = useState(false)

    return (
                <tr className={selected ? "selected-country": ""}>
                    <td>{props.country.name}</td>
                    <td>{props.country.capital}</td>
                    <td>
                        { selected ?
                            <Button variant="danger" onClick={() => changeSelected(false)}>Remove</Button> :
                            <Button variant="success" onClick={() => changeSelected(true)}>Add</Button>
                        }
                    </td>
                </tr>
    );
}

export default Country;