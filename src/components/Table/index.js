import React from "react";
import Moment from "react-moment";
import "./style.css"

function Table(props) {
  
    return (
        <tbody>
            {props.users.map(res => (
                <tr className="table" key={res.login.uuid}>
                    <td>
                        <img src={res.picture.medium} alt="User" />
                    </td>
                    <td>
                        {res.name.first + " " + res.name.last}
                    </td>
                    <td>
                        {res.cell}
                    </td>
                    <td>
                        {res.email}
                    </td>
                    <td>
                        <Moment format="MM/DD/YYYY">{res.dob.date}</Moment>
                    </td>
                </tr>
            ))}        
        </tbody>
    );
}

export default Table;