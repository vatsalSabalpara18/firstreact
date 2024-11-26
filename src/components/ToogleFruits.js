import React, { useState } from 'react'

export default function ToogleFruits() {
    const [toogle, setToogle] = useState(false)

    const handleChange = () => {
        setToogle(!toogle)
    }

  return (
    <div style={{backgroundColor: toogle ? "red" : "orange"}}>
    <button onClick={handleChange}>Change Value</button>
        <br />
        <h2>{toogle ? "Apple" : "Orange"}</h2>
    </div>
  )
}
