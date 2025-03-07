import { useState } from 'react'
//封装自定义Hook
//问题：布尔值切换的逻辑，当前组件耦合在一起不方便
//解决思路：自定义Hook
function useToggle(){
  //可复用的逻辑代码
  const [show,setShow] = useState(true);
  const toggle = ()=>{
    setShow(!show);
  }
  //哪些状态和回调函数需要在其他组件中使用就return出去
  return {
    show,
    toggle
  }
}
function App () {
  const {show,toggle}=useToggle();
  return(
    <div>
     {show&&<div>this is div</div>}
     <button onClick={toggle}>切换</button>
    </div>
  )
}
export default App;
