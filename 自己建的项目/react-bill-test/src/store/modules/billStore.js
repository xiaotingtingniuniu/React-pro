//账单列表相关的store
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//生成billStore
const billStore = createSlice({
    name:'bill',
    //初始化状体啊
    initialState:{
        billList:[]
    },
    //修改数据同步方法
    reducers:{
        setBillList(state,action){
            state.billList = action.payload
        }
    }
});
//解构创建action对象的 actionCreater函数
const {setBillList} = billStore.actions;
//异步请求部分
const fetchBillList = ()=>{
    //异步请求
    return async (dispatch)=>{
        //一部请求
        const res = await axios.get('http://localhost:8008/ka');
        //触发同步reducer
        dispatch(setBillList(res.data));
    }
}
//导出异步获取数据的函数
export {fetchBillList}
//获取reducer函数
const billReducer = billStore.reducer;
//导出reducer函数
export default billReducer