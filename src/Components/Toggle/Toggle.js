import React from 'react'

function Toggle() {
    const testFun= () =>
    {
        alert('Test Fun')
    }
  return (
    <div>
        <h3>This is button.</h3>
        <button onClick={testFun}>Click me.</button>
    </div>
  )
}

export default Toggle