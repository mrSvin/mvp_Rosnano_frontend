import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import Header from "./Header";
import '../css/home.css';

function Home() {
    let navigate = useNavigate();

    useEffect(() => {
        if (document.cookie =='user=test') {
            console.log('ok')
        } else {
            navigate('/login')
        }
    }, [])

    return (
        <div className="homeBody">
            <Header/>

            <Menubar/>

        </div>
    );
}

function Menubar() {

    let navigate = useNavigate();

    return (
        <div className="main-container-home">

            <div className="container-home"
            onClick={event => navigate('/test')}>
                <div className="icon-container">
                    <p>Информация 1</p>
                    <div className="buttonMenubar"></div>
                </div>
                <h2 className="buttonName">Тест 1</h2>
            </div>

            <div className="container-home">
                <div className="icon-container">
                    <p>Информация 2</p>
                    <div className="buttonMenubar"></div>
                </div>
                <h2 className="buttonName">Тест 2</h2>
            </div>

            <div className="container-home">
                <div className="icon-container">
                    <p>Информация 3</p>
                    <div className="buttonMenubar"></div>
                </div>
                <h2 className="buttonName">Тест 3</h2>
            </div>

        </div>
    )

}

export default Home;