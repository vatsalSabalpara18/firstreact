import React from 'react'
import Fees from './Fees'

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