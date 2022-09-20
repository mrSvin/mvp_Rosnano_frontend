import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {highChartLine, highChartLineZoom, highChartColumnFondChastGos, highChartColumn} from "../js/highchartReport";
import {highChartPolar} from "../js/hcMoreReport";
import Header from "./Header";

function Test2() {
    let data = []


    let navigate = useNavigate();
    useEffect(() => {

        highChartColumnFondChastGos('container')
        // highChartLineZoom('container2')
        // highChartPolar('container3')

    }, [])

    let years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]
    let place = ['МИК', 'Наноцентр', 'Прочее', 'ТИК']

    let array = []
    for(let i=0; i<=48; i++) {
        array.push(i)
    }

    const [state, setState] = useState(Array(48).fill(0))
    // const [state, setState] = useState(array)
    console.log(state)
    let ind = 0

    return (
        <div className="testBody">
            <Header/>

            <div className="containerHighChartTest2" id="container"></div>

            <table>
                <thead>
                <tr>
                    <th></th>
                    {years.map(e=>{
                        return <th key={e}>{e}</th>
                    })}
                </tr>
                </thead>
                <tbody>

                {place.map(e=>{
                    return (
                    <tr key={e}>
                        <td key={e}>{e}</td>
                        {years.map((j,i)=>{
                            return <td key={j}>
                                        <input key={ind} name={ind} type="text" value={state[ind++]}
                                        onChange={(e)=>{
                                            const key = e.target
                                            console.log('data2', key.name, key.value)
                                            let copy = state.slice()
                                            copy[key.name] = key.value
                                            setState(copy)
                                        }}/>
                                    </td>
                        })}
                    </tr>
                    )
                })}
                {/*<tr>*/}
                {/*    <td>МИК</td>*/}
                {/*    {years.map((e,i)=>{*/}
                {/*        return <td><input type="text" value={i}/></td>*/}
                {/*    })}*/}
                {/*</tr>*/}



                {/*<tr>*/}
                {/*    <td>Наноцентр</td>*/}
                {/*    {years.map((e,i)=>{*/}
                {/*        return <td><input type="text" value={i}/></td>*/}
                {/*    })}*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>Прочее</td>*/}
                {/*    {years.map((e,i)=>{*/}
                {/*        return <td><input type="text" value={i}/></td>*/}
                {/*    })}*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>ТИК</td>*/}
                {/*    {years.map((e,i)=>{*/}
                {/*        return <td><input type="text" value={i}/></td>*/}
                {/*    })}*/}
                {/*</tr>*/}
                </tbody>
            </table>
            {/*<div className="containerHighChart" id="container2"></div>*/}
            {/*<div className="containerHighChart" id="container3"></div>*/}

        </div>
    )

}
export default Test2;


