import { configureStore } from "@reduxjs/toolkit";
//导入子模块的reducer
import billReducer from "./modules/billStore";
const store = configureStore({
    reducer:{
        bill:billReducer
    }
})
export default store