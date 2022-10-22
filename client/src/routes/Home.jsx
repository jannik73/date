import React from "react"
//import AddRestaurant from "../components/AddRestaurant"
import AddEntry from "../components/AddEntry"
//import RestaurantList from "../components/RestaurantList"
import Header from "../components/Header";
import {SplitScreen} from '../layouts/SplitScreen'

const Home = (props) => {
  return (
    <SplitScreen >
      <Header text="Welcome to the Love Generator"></Header>
      <AddEntry></AddEntry>
    </SplitScreen>
    
  )
};

export default Home;
