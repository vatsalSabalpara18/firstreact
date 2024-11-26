import React from 'react'
import Fees from './Fees'

// export default function Courses() {
//     const [count, setCount] = useState(0)
//     const couresesArr = [
//         {
//             name: "Full Stack",
//             duration: "6 Months"
//         },
//         {
//             name: "React",
//             duration: "4 Months"
//         },
//         {
//             name: "Web Development",
//             duration: "3 Months"
//         }
//     ]

//     const handleBack = () => {
//         if(count > 0){
//             setCount(count - 1)
//         }
//     }
//     const handleNext = () => {
//         if(count < couresesArr.length - 1){
//             setCount(count + 1)
//         }
//     }
//     console.log(count)
//   return (
//     <div style={{
//         backgroundColor: 'aqua',
//         textAlign: "center",
//         width: "25%",        
//         margin: "1px auto",
//         padding: "10px",
//         borderRadius: "10px",
//         boxSizing: "border-box"
//     }}>
//         <h2>Courses</h2>
//         <button onClick={handleBack} style={{
//             backgroundColor: "blue",
//             height: "40px",
//         }}>{ "<< Back" }</button>{"  "}
//         <button onClick={handleNext}>{ ">> Next" }</button>
//         <br />
//         <br />
//         <span>CoureseName: {couresesArr[count]?.name}</span>
//         <br />
//         <span>CoureseDuration: {couresesArr[count]?.duration}</span> 
//         <Fees name={couresesArr[count]?.name} /> 
//     </div>
//   )
// }

export default function Courses() {
    const coures = [
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

    const trStyle = {
        border: "2px solid black",
        textAlign: "center",
        padding: "5px"
    }

    return (
        <table border={"1"} style={{
            borderCollapse: "collapse",
            border: "2px solid black",
            textAlign: "center"
        }}>
            <thead>
                <tr style={trStyle}>
                    <th style={trStyle}>Sr No.</th>
                    <th style={trStyle}>Coures Name</th>
                    <th style={trStyle}>coures Fees</th>
                    <th style={trStyle}>Coures Duration</th>
                </tr>
            </thead>
            <tbody>
                {
                    coures.map((v, i) => {
                        return (
                            <tr key={v.name} style={trStyle}>
                                <td style={trStyle}>{i + 1}</td>
                                <td style={trStyle}>{v.name}</td>
                                <td style={trStyle}><Fees cn={v.name} /></td>
                                <td style={trStyle}>{v.duration}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}