import React, {useState}  from "react";
//import { View } from 'react-native';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Home from "./routes/Home";
import About from "./routes/About";
import SideNav from "./components/SideNav";
import Header from "./components/Header";

function App() {

  const [wid, setWid] = useState("0%");

  const openSidenav = ( ) => {
    setWid("25%");
 }

 const closeSidenav = ( ) => {
  setWid("0%");
}

  return (
    <div className="App">
      
      
      <SideNav width = {wid} closeNav={closeSidenav}></SideNav>
        <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
          </div>
        </Router>
      </div>
    
  );
}

export default App;
