import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [ count,setCount ]=useState(0);
    const[ count1 ,setCount1 ] =useState(100);

  return (
    <div>
        <p>{count}</p>
        <button onClick={() =>setCount(count + 25)} >Click</button>
        <p>{count1}</p>
        <button onClick={() =>setCount1(count1 - 10)}>Click</button>
    </div>
  )
}
