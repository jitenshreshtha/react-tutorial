import React,{useState} from 'react'

function UseState() {
    const [count,setCount] = useState(0);
  return (
    <div><p>This is usestate hook. {count}</p>
    <button onClick={()=>{setCount(count+1)}}>incre count</button>
    </div>
  )
}

export default UseState