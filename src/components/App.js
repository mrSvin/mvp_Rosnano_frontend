import '../css/App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from '../components/Login';
import React, {useEffect} from "react";
import Home from "./Home";
import Test from '../components/Test';
import Test2 from '../components/Test2';
import Test3 from '../components/Test3';

function App() {
    return (

        <Router>
            <div>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/test" element={<Test/>}/>
                    <Route path="/test2" element={<Test2/>}/>
                    <Route path="/test3" element={<Test3/>}/>
                </Routes>
            </div>
        </Router>

    );
}

export default App;


