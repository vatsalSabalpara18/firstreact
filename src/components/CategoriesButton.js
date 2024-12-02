import React from 'react'

export default function CategoriesButton({ buttonArr, OnButtonClick }) {
    const handleButtonClick = (e, v) => {        
        OnButtonClick(v)
    }
    return (
        <div className="button-container">
            <button onClick={(e) => handleButtonClick(e, "All")} className="styled-button">All</button>
            {
                buttonArr?.map((v) => {                    
                    return (
                        <button onClick={(e) => handleButtonClick(e, v)} className="styled-button">{v}</button>
                    )
                })
            }
        </div>
    )
}
{/* <button className="styled-button">Button 2</button>
<button className="styled-button">Button 3</button>
<button className="styled-button">Button 4</button> */}
