import React from "react"
import AddEntry from "../components/AddEntry"
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
