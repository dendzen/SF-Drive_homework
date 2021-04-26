import React, {useState} from "react";
import "../styles/app.css";
import axios from "axios";
import PropTypes from "prop-types";

import Button from 'react-bootstrap/Button';
function Country (props) {
    const [selected, changeSelected] = useState(false)

    return (
                <tr className={selected ? "selected-country": ""}>
                    <td>{props.name}</td>
                    <td>{props.capital}</td>
                    <td>
                        { selected ?
                            <Button variant="danger" onClick={() => changeSelected(false)}>Remove</Button> :
                            <Button variant="success" onClick={() => changeSelected(true)}>Add</Button>
                        }
                    </td>
                </tr>
    );
}
Country.defaultProps = {
    capital: "Not Available"
};

Country.propTypes ={
    country: PropTypes.object
};
export default Country;