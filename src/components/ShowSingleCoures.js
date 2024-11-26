import React, { useState } from "react"
import ShowSingleCourseFees from "./ShowSingleCourseFees"

export default function ShowSingleCoures() {

    const [count, setCount] = useState(0)
    const couresesArr = [
        {
            name: "Full Stack",
            duration: "6 Months"
        },
        {
            name: "React",
            duration: "4 Months"
        },
        {
            name: "Web Development",
            duration: "3 Months"
        }
    ]

    const handleBack = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    const handleNext = () => {
        if(count < couresesArr.length - 1){
            setCount(count + 1)
        }
    }
    console.log(count)
  return (
    <div style={{
        backgroundColor: 'aqua',
        textAlign: "center",
        width: "25%",
        margin: "1px auto",
        padding: "10px",
        borderRadius: "10px",
        boxSizing: "border-box"
    }}>
        <h2>Courses</h2>
        <button onClick={handleBack} style={{
            backgroundColor: "blue",
            height: "40px",
        }}>{ "<< Back" }</button>{"  "}
        <button onClick={handleNext}>{ ">> Next" }</button>
        <br />
        <br />
        <span>CoureseName: {couresesArr[count]?.name}</span>
        <br />
        <span>CoureseDuration: {couresesArr[count]?.duration}</span>
        <br />
          <ShowSingleCourseFees cn={ couresesArr[count]?.name} />
    </div>
  )
}