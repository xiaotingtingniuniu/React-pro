import { Outlet,Link } from "react-router-dom"
const Layout = ()=>{
    return (
        <div>
            我是一级路由
            <Link to="/board">面板</Link>
            <Link to="/">关于</Link>
            {/* 配置二级路由的出口 */}
            <div>
                这里是二级路由渲染的地方
                <Outlet />
            </div>
            
        </div>
    )
}
export default Layout