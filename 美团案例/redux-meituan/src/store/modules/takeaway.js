//编写store
import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const foodsStore = createSlice({
    name:'foods',
    //初始状态
    initialState:{
        //商品列表
        foodsList:[],
        //菜单激活下标值
        activeIndex:0,
        //购物车列表
        cartList:[]
    },
    //修改数据的同步方法
    reducers:{
        //更改商品列表数据
        setFoodList(state,action){
            state.foodsList = action.payload;
        },
        //更改菜单激活下标值
        changeActiveIndex(state,action){
            state.activeIndex = action.payload
        },
        //更改购物车列表数据
        addCart(state,action){
            //是否添加过？以action.payload.id取cartList中匹配 匹配到了=添加过
            const item = state.cartList.find(item=>item.id===action.payload.id);
            if(item){
                //如果添加过，则更新count数量
                item.count++
            }else{
                //如果没有添加过，则push进去
                state.cartList.push(action.payload)
            }
        },
        //count增
        increCount(state,action){
            //关键点：找到当前要修改谁的count 根据传过来的id
            const item = state.cartList.find(item=>item.id===action.payload.id);
            item.count++;
        },
        //count减
        decreCount(state,action){
            //获取当前所减的数据的索引值
            const itemIndex = state.cartList.findIndex(item=>item.id===action.payload.id)
            console.log('itemIndex',itemIndex)
            //如果没有找到id相同的索引则返回itemIndex=-1，否则返回索引值
            if(itemIndex!==-1){
                //获取该id对应的数据
                const item = state.cartList[itemIndex];
                if(item.count>1){
                    //如果大于1，减少数量
                    item.count--;
                }else{
                    //从数组中索引为itemIndex的位置删除1个数
                    state.cartList.splice(itemIndex,1);
                }
            }
        },
        clearCartList(state){
            state.cartList = [];
        }
    }
});
//解构创建 action对象的actionsCreater 函数
const {setFoodList,changeActiveIndex,addCart,increCount,decreCount,clearCartList} = foodsStore.actions;
//异步获取数据
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/takeaway');
        //调用dispatch函数提交action对象
        dispatch(setFoodList(res.data));
    }
}
//导出异步获取数据的fetchFoodsList 函数
export {fetchFoodsList,changeActiveIndex,addCart,increCount,decreCount,clearCartList}
//获取reducer函数
const foodsReducer = foodsStore.reducer;
//导出reducer 函数
export default foodsReducer



