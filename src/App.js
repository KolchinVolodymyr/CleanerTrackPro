import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {MyRoutes} from "./routes";
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <div className="container">
            <MyRoutes />
          </div>
      </Router>
    </div>
  );
}

export default App;
