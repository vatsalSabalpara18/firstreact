import React, { useState } from 'react'

export default function CounterFun() {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        if(count < 5){
            setCount(count + 1)
        }
    }

    const handleDecrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
  return (
    <>
        <h2>Counter In Function based</h2>
        <button onClick={handleIncrement}>+</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>-</button>
    </>
  )
}
