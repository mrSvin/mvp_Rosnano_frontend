import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {highChartLine, highChartLineZoom} from "../js/highchartReport";
import {highChartPolar} from "../js/hcMoreReport";
import Header from "./Header";

function Test2() {

    let navigate = useNavigate();
    useEffect(() => {

        highChartLine('container')
        highChartLineZoom('container2')
        highChartPolar('container3')

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
export default Test2;