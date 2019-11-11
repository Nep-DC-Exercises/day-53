import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Issues from "./components/Issues";
import IndividualIssue from "./components/IndividualIssue";
import Nav from "./components/Nav"
import "bulma/css/bulma.css";
import "./App.css";

function App() {
    return (
        <Router>
            <Nav />
            <Route exact path="/" component={Issues}></Route>
            <Route path="/issues/:issue_id" component={IndividualIssue} />
        </Router>
    );
}

export default App;
