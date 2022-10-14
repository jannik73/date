import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import { PersonsContextProvider } from "./context/PersonsContext";
import Home from "./routes/Home";
import Test from "./routes/Testseite";

const App = () => {
  return (
    <PersonsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Test} />
          </Switch>
        </Router>
      </div>
    </PersonsContextProvider>
  );
};

export default App;
