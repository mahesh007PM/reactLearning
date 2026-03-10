import React, { useState } from 'react'

export const Child = () => {
    const [name,setname] = useState('')
  return (
    <>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
      My name is {name}
    </>
  )
}
