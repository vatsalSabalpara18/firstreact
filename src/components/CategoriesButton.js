import React, { useState } from 'react'

export default function CategoriesButton({ buttonArr, OnButtonClick }) {
    const [currentButton, setCurrentButton] = useState("All")
    const handleButtonClick = (e, v) => {                
        setCurrentButton(v)
        OnButtonClick(v)
    }    
    return (
        <div className="button-container">
            <button onClick={(e) => handleButtonClick(e, "All")} className={currentButton === "All" ? "styled-button-active" : "styled-button"}>All</button>
            {
                buttonArr?.map((v) => {                    
                    return (
                        <button onClick={(e) => handleButtonClick(e, v)} className={currentButton === v ? "styled-button-active" : "styled-button"}>{v}</button>
                    )
                })
            }
        </div>
    )
}
{/* <button className="styled-button">Button 2</button>
<button className="styled-button">Button 3</button>
<button className="styled-button">Button 4</button> */}
