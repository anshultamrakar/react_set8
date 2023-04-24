import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to = "/donetodo">Done To do</Link>
        <br/>
        <Link to = "/opentodo">Open To do</Link>
        <br/>
        <Link to = "/summary">Summary</Link>
    </div>
  )
}

export default Navbar