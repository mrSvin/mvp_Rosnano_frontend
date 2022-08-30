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

function App() {
  return (

      <Router>
          <div>

              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/test" element={<Test />}/>
              </Routes>
          </div>
      </Router>

  );
}

export default App;


