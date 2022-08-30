import '../css/App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Login from '../components/Login';

function App() {
  return (

      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/about">About</Link>
                      </li>
                      <li>
                          <Link to="/users">Users</Link>
                      </li>
                  </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Routes>
                  <Route path="/about" element={<About />}/>
                  <Route path="/users" element={<Users />}/>
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login />}/>
              </Routes>
          </div>
      </Router>

  );
}

export default App;

function Home() {
    return (
        <div className="App">
            <header className="App-header">

                <p>
                    test dfsdfsf sd
                </p>

            </header>
        </div>
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}