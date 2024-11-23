import React, { useState } from 'react'

// function MyCountryFun() {
//     const [countryName, setCountryName] = useState("India")
//     const [countryPopulation, setCountryPopulation] = useState("135 Billion")
//     const handleChange = () => {        
//         // debugger        
//         if(countryName === "India"){
//             setCountryName("USA")
//             setCountryPopulation("15 Billion")
//         } else {
//             setCountryName("India")
//             setCountryPopulation("135 Billion")
//         }
//     }
//     return (
//         <>
//             <h2>Function Based Component</h2>
//             <div>MyCountry: {countryName}</div>
//             <br />
//             <div>Populaton: {countryPopulation}</div>
//             <button onClick={handleChange}>Change The Country</button>
//         </>
//     )
// }

function MyCountryFun() {
    const [toggle, setToggle] = useState(false)
    const handleChange = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <h2>Function Based Component</h2>
            <div>MyCountry: {toggle ? "India" : "US"}</div>
            <br />
            <div>Populaton: {toggle ? "135 Billion" : "15 Billion"}</div>
            <button onClick={handleChange}>Change The Country</button>
        </>
    )
}

export default MyCountryFun