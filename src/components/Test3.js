import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {highChart3Dcolumn} from "../js/hc3dReport";
import {highChartMoreRange,highChartRadar} from "../js/hcMoreReport";

import Header from "./Header";

function Test3() {

    let navigate = useNavigate();
    useEffect(() => {

        highChartMoreRange('container')
        highChartRadar('container2')
        highChart3Dcolumn('container3')

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

export default Test3;