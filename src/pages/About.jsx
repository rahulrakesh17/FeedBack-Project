import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
function About() {
  return (
    <Card>
        <div className='about'>
            <h1>About this project</h1>
            <p>This is a React App to leave feedback for a product</p>
            <Link to="/">Go back to home</Link>
        </div>
    </Card>
  )
}

export default About