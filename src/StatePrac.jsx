import React, { useState } from 'react'

const StatePrac = () => {

  var [a,setname]=useState('name1');
  return (
    <div>
      <h1>hello {a}</h1>
      <button onClick={()=>setname('name2')}>click</button>
    </div>
  )
}

export default StatePrac
