import { useSelector,useDispatch } from "react-redux";
import { inscrement,decrement,addToNum } from "./store/modules/counterStore";
import { useEffect } from "react";
import { fetchChannelList } from "./store/modules/channelStore";
function App() {
  //获取store中的数据
  const {count} = useSelector(state=>state.counter);
  const {channelList} = useSelector(state=>state.channel);
  //修改store中的数据
  const dispatch = useDispatch();
  console.log('channelList',channelList);
  //使用useEffect触发异步请求执行
  useEffect(()=>{
    dispatch(fetchChannelList())
  },[dispatch])
  return (
    <div className="App">
      <button onClick={()=>dispatch(inscrement())}>-</button>
      {count}
      <button onClick={()=>dispatch(decrement())}>+</button>
      <button onClick={()=>dispatch(addToNum(10))}>add to 10</button>
      <button onClick={()=>dispatch(addToNum(20))}>add to 20</button>
      <ul>
        {channelList.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
