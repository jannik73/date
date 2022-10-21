import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Home from "./routes/Home";

function App() {
  return (
    <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
