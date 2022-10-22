import React from 'react'
import {SplitScreen} from '../layouts/SplitScreen'
import Header from '../components/Header'

const LeftHand = () => {
  return <h1 style={{backgroundColor: 'green'}}>Hallo</h1>
}

const RightHand = () => {
  return <h1 style={{backgroundColor: 'red'}}>Hallo</h1>
}

function About() {
  return (
    <SplitScreen leftWeight={1} rightWeight={1}>
      <Header text="About this project"></Header>
      <LeftHand></LeftHand>
    </SplitScreen>
  )
}

export default About