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
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const handleNext = () => {
        if (count < couresesArr.length - 1) {
            setCount(count + 1)
        }
    }
    console.log(count)
    return (
        <div style={{
            backgroundColor: 'aqua',
            textAlign: "center",
            width: "30%",
            margin: "1px auto",
            padding: "10px",
            borderRadius: "10px",
            boxSizing: "border-box"
        }}>
            <h2>Courses</h2>
            <button onClick={handleBack} disabled={count <= 0 ? true : false} style={{
                backgroundColor: "#7AB2D3",
                height: "40px",
                width: "90px",
                borderRadius: "5px"
            }}>{"<< Back"}</button>{"  "}
            <button style={{
                backgroundColor: "#7AB2D3",
                height: "40px",
                width: "90px",
                borderRadius: "5px"
            }} onClick={handleNext} disabled={count > couresesArr.length - 2 ? true : false}>{">> Next"}</button>
            <br />
            {/* <br />
            <span>CoureseName: {couresesArr[count]?.name}</span>
            <br />
            <span>CoureseDuration: {couresesArr[count]?.duration}</span>
            <br /> */}
            <table style={{
                width: "80%",
                margin: "5px auto"
            }}>
                <thead></thead>
                <tbody>
                    <tr>
                        <td><b>Courese Name:</b></td>
                        <td>{couresesArr[count]?.name}</td>
                    </tr>
                    <tr>
                        <td><b>Courese Duration:</b></td>
                        <td>{couresesArr[count]?.duration}</td>
                    </tr>
                    <tr>
                        <ShowSingleCourseFees cn={couresesArr[count]?.name} />
                    </tr>
                </tbody>                
            </table>
        </div>
    )
}