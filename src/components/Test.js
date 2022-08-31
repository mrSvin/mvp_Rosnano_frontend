import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import Header from "./Header";
import "../css/test.css"
import {highChartEnergy, highChartPie, highChartColumn} from "../js/highchartReport"

function Test() {

    let navigate = useNavigate();
    useEffect(() => {

        highChartEnergy([1,3,4,5,4,22,43,32],'container')
        highChartPie('container2')
        highChartColumn('container3')

    }, [])


    return (
        <div className="testBody">
            <Header/>

            <div className="containerHighChart" id="container"></div>

            <div className="containerHighChart" id="container2"></div>

            <div className="containerHighChart" id="container3"></div>

        </div>
    )
}

export default Test;

