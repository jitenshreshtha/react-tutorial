import React,{useEffect,useState} from 'react'

function UseEffect() {
    const [count,setCount]=useState(1)
    useEffect(()=>{
        console.log(count);
    },[count==5])
  return (
    <div><p>{count} The useeffect hook  is replacement for componentWillUnmount,componentDidMount,componentDidUpdate</p>
        <button onClick={()=>setCount(count+1)}>Update State</button>
    </div>
  )
}

export default UseEffect