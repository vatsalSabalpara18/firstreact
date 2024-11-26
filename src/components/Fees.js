import React from 'react'

export default function Fees(props) {
    const {cn} = props
    const feesData = {
        'Full Stack': 75000,
        'React': 50000,
        'Web Development': 30000
    }
    return (
            <>{feesData[cn]}</>
    )
}