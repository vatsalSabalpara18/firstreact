import React from 'react'

export default function ShowSingleCourseFees(props) {
    const { cn } = props
    const feesData = {
        'Full Stack': 75000,
        'React': 50000,
        'Web Development': 30000
    }
    return (
        <>
            {/* <span>Counrese Fees: {feesData[cn]}</span> */}
            <td><b>Counrese Fees:</b></td>
            <td>{feesData[cn]}</td>
        </>
    )
}
