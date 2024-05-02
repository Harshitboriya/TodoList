import React from 'react'

const ran = () => {
  let num = Math.random()*100;

   return (
     <div>
      <h1>jbdj {Math.round(num)}</h1>
    </div>
  )
}

export default ran