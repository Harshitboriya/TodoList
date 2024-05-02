import React, { useState } from 'react'

function button() {

  const[c,setc] = useState(0);
  const hoc =()=>{
    setc(c+1);
  };

  return (
    <div>
      <select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<br />
      {c}
      <button onClick={hoc}>count</button>
    </div>
  )
}

export default button
