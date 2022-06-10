import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div>
         <Link to="/"> <img width={"70px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Original_Film_logo.svg/1280px-Original_Film_logo.svg.png" alt="noImg" /> </Link>
        </div>
        <div>About</div>
    </div>
  )
}
