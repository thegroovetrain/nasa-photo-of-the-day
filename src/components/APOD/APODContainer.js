import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";

import APIKEY from "../../config";

import APODContent from "./APODContent";

import "./APODContainer.css";

const APODContainer = (props) => {
    const todaysDate = new Date();
    const [ date, setDate ] = useState( todaysDate.toISOString().slice( 0, 10 ) );
    const [ isFinishedLoading, setIsFinishedLoading ] = useState( false );
    const [ data, setData ] = useState();

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${ APIKEY }`)
            .then( response => {
                console.log(response);
                setData(response.data);
                setIsFinishedLoading(true);
            })
            .catch( error => console.log( error ) );
    }, []);

    return ( isFinishedLoading ) ? (
        <div className="apod-container" style={{backgroundImage:`url(${data.url})`}}>
            <APODContent date={data.date} title={data.title} explanation={data.explanation} />
        </div>
    ) : (
        <div>Loading...</div>
    );
}

export default APODContainer;