import React from 'react'
import spinner from "../assets/spinner.gif"

function Spinner() {
  return (
    <img src={spinner} style={{width:"100px", margin: "auto",display:"block" }}></img>
  )
}

export default Spinner