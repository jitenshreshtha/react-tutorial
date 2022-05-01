import React from 'react'

function Toggle() {
  return (
    <div>
        <h3>This is button.</h3>
        <button onClick={()=>{alert("button clicked.")}}>Click me.</button>
    </div>
  )
}

export default Toggle