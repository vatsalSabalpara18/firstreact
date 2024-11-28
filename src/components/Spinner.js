import React, { useEffect, useState } from 'react'

function Spinner() {
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 3000);
    }, [])

  return (
    <div className='center-div'>
        {
              loader ? (<div className="loader"></div>) : (
                <div>
                      <h2> Humans </h2>                    
                    <p style={{textAlign:"justify"}}>Humans are unique creatures with complex thoughts and emotions. They have the ability to create  communicate  and connect with one another in profound ways. Each person has their own experiences and perspectives  shaping how they view the world. This diversity enriches society and fosters creativity and innovation. Overall  the strength of humanity lies in its capacity for empathy and understanding.</p>
                </div>
              )
        }          
    </div>
  )
}

export default Spinner