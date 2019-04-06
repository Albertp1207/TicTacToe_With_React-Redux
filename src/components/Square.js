import React from "react";

const Square = (props) =>{
    return (
        <div squareid={props.squareid} className="square">
            <label>{props.value}</label>
        </div>
    )

}

export default Square