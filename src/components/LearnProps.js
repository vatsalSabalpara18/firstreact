import React from 'react'

// Props are arguments passed into React components.

// Props are passed to components via HTML attributes.

function LearnProps(props) {
    const {name} = props
  return (
    <div className='App'>
        <h2>Learn the props in react</h2>
          <span>My Component is <b>{name}</b></span>
    </div>
  )
}

export default LearnProps