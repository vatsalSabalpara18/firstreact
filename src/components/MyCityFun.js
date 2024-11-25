import React from 'react'

export default function MyCityFun(props) {
    const {country, population} = props
  return (
    <>
        <h2>My City Function Based Component</h2>
        <span>My Country: {country}</span>
        <br />
        <span>Population: {population}</span>
        <br />
        <span>My City: {country === "India" ? "Delhi" : "New York"}</span>
    </>
  )
}
