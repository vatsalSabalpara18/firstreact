import React, { useState } from 'react'

function MyCountryFun() {
    const [countryName, setCountryName] = useState("India")
    const [countryPopulation, setCountryPopulation] = useState("135 Billion")
    const handleChange = () => {
        setCountryName("USA")
        setCountryPopulation("15 Billion")
    }
    return (
        <>
            <h2>Function Based Component</h2>
            <div>MyCountry: {countryName}</div>
            <br />
            <div>Populaton: {countryPopulation}</div>
            <button onClick={handleChange}>Change The Country</button>
        </>
    )
}

export default MyCountryFun