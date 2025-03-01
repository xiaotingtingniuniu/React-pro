import { Outlet } from "react-router-dom"
import { Button } from "antd-mobile"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchBillList } from "@/store/modules/billStore"
const Layout = ()=>{
    //获取dispatch函数
    const dispatch = useDispatch();
    //触发异步请求
    useEffect(()=>{
        //修改store中的数据
        dispatch(fetchBillList());
    },[dispatch])
    return(
        <div>
            {/* 二级路由出口 */}
            <Outlet />
            我是Layout
            <Button color="primary">测试全局按钮</Button>
            <div className="purple-theme">
                <Button color="primary">测试局部按钮</Button>
            </div>
        </div>
    )
}
export default Layout