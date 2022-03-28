import React, { Component} from "react";
import "./SecurityAdvice.css";

const SecurityAdvice = function(props) {

    return (
        <div className={"row-wrapper " + props.position}>
            <div className="icon-container"><i className={"fa-solid " + props.icon}></i></div>
            <div className="text-container">
                <p>{props.bullet} {props.text}</p>
            </div>
        </div>
    )

}


export default SecurityAdvice;