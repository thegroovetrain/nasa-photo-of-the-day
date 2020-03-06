import React, { useState, useEffect } from "react";

import "./APODContent.css";

const APODContent = (props) => {
    
    return (
        <div className="apod-content">
            <h1>{ props.date }</h1>
            <h2>{ props.title }</h2>
            <p>{ props.explanation }</p>
        </div>
    );
}

export default APODContent;