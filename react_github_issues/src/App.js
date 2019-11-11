import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Issues from "./components/Issues";
import "./App.css";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Issues}></Route>
        </Router>
    );
}

export default App;
