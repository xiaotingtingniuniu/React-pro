import { Outlet } from "react-router-dom"
import { Button } from "antd-mobile"
const Layout = ()=>{
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