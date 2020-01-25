import React from "react"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import CalculatorDisplay from "../../Components/CalculatorDisplay";

const RoutingBody = () => {

    return (
        <Switch>
            <Route exact path="/">
                <CalculatorDisplay/>
            </Route>
        </Switch>
    )
};

const Routing = (props) => {
    return (
        <Router>
            <RoutingBody/>
        </Router>
    )
};

export default Routing;