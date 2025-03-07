import { useState, useRef, useEffect } from 'react';
function App () {
    const [count,setCount] = useState(0);//count = 1
    const prevCountRef = useRef();// prevCountRef.current = 0

    useEffect(()=>{
        console.log(111);
        prevCountRef.current = count;//
    });
    const prevCount = prevCountRef.current;//0
    return (
        <div>
            <p>Current count:{count}</p>
            {prevCount!==undefined&&<p>Previous count:{prevCount}</p>}
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
export default App