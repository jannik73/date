import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Header = ({text}) => {
  return (
    <div>
      <h3 className="font-weight-light display-3 text-center myheader">{text}</h3>
    </div>
  )
}

export default Header
