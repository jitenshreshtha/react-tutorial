import React,{useEffect,useState} from 'react'

function UseEffect() {
    const [cout,setCount]=useState(1)
    useEffect(()=>{
        console.log(cout);
    },[cout == 5])
  return (
    <div><p>{cout} The useeffect hook  is replacement for componentWillUnmount,componentDidMount,componentDidUpdate</p>
        <button onClick={()=>setCount(cout+1)}>Update State</button>
    </div>
  )
}

export default UseEffect