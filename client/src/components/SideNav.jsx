import React from 'react'

function SideNav(props, state) {
  return (
    <div className="mysidenav" style={{width: props.width}}>
        <button onClick={props.closeNav}>X</button>
   <a href="/">Home</a>
   <a href="/about">About</a>
</div>
  )
}

export default SideNav