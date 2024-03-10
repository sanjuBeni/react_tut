import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
        <h2>About Page</h2>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/not-found'>Not Found</Link>
        <br/>
        <Link to='/user/pratiksh'>Pratiksh</Link>
    </>
  )
}

export default About