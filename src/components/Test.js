import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import Header from "./Header";
import "../css/test.css"
import {highChartEnergy} from "../js/highchartReport"

function Test() {

    let navigate = useNavigate();
    useEffect(() => {

        highChartEnergy([1,3,4,5,4,22,43,32],'container')

    }, [])


    return (
        <div className="testBody">
            <Header/>

            <div className="containerHighChart" id="container">
            </div>

        </div>
    )
}

export default Test;

