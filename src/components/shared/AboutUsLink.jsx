import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'
function AboutUsLink() {
  return (
    <div className="about-link">
        <Link to="/about">
            <FaQuestion size={30}></FaQuestion>
        </Link>
    </div>
  )
}

export default AboutUsLink