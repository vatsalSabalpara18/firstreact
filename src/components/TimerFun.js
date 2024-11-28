import React, { useEffect, useState } from 'react'

export default function TimerFun() {
    //1. Initialize State Value.
    const [time, setTime] = useState(new Date())
    useEffect(() => {
      //3. componentDIdMount(not require dependency) // 4. componentDidUpdate(dependancy required)
        const timeRef = setInterval(() => {
            setTime(new Date())
        }, 1000)

        //5. componentWilUnmount
       return () => {
            clearInterval(timeRef)
        }
    },[time])
    //2. display to browser.
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{time.toLocaleDateString('en-GB')}</h1>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  )
}
