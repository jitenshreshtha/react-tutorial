import React from 'react'

function Form() {
    const user = () =>{
        alert("user typed");
    }
    const password =() =>{
        alert("password typed")
    }
  return (
    <div>
        <p>This is form component.</p>
        <input type="text" name='user' onChange={user} />
        <br />
        <input type="password" name='password' onChange={password} />
        <br />
        <button>Submit</button>
    </div>
  )
}

export default Form