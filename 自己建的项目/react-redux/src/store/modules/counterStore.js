import {createSlice} from "@reduxjs/toolkit"
const counterStore = createSlice({
    name:'counter',
    // 初始状态state数据
    initialState:{
        count:0
    },
    //修改数据同步方法 支持直接修改
    reducers:{
        inscrement(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        addToNum(state,actions){
            state.count = actions.payload
        }
    }
})

//解构出创建action对象的函数 （actionCreater）
const {inscrement,decrement,addToNum}=counterStore.actions;
//获取reducer函数
const counterReducer = counterStore.reducer;
//导出的创建action对象的函数（actionCreater）
export {inscrement,decrement,addToNum}
//导出reducer函数
export default counterReducer