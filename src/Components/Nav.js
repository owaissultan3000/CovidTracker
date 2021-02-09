import React from 'react'
import logo from '../Image/new.png'
import "./Nav.css"

function Nav() {
    return (
        <div className="nav">
            <span style={{color:"#C51827" }}>C</span>
            <img className="clogo" src={logo} />
            <span style={{color:"#00cccc" }}>V</span> <span style={{color:"#00cc00"}} >I</span> <span style={{color:"#C51827" }}>D</span> <span style={{color:"#efc031"}}> -19</span> 
        </div>
    )
}

export default Nav
