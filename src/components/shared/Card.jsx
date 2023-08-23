import React from 'react'

function Card({children,reverse}) {
  console.log("hello")
  return (
    <div className="card" style={{backgroundColor:reverse?"rgb(0,0,0,0.4)":"#ffff",
                                   color:reverse?"#ffff":"rgb(0,0,0,0.4)"}}>
        {children}
        </div>
  )
}

export default Card