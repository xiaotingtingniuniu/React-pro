import { TabBar } from "antd-mobile"
import { Outlet,useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchBillList } from "@/store/modules/billStore"
import {BillOutline,CalculatorOutline,AddCircleOutline} from 'antd-mobile-icons'
import './index.scss'
const tabs = [
    {
      key: '/',
      title: '月度账单',
      icon: <BillOutline />
    },
    {
        key: '/new',
        title: '记账',
        icon: <AddCircleOutline />
    },
    {
        key: '/year',
        title: '年度账单',
        icon: <CalculatorOutline />
    }
]
const Layout = ()=>{
    //获取dispatch函数
    const dispatch = useDispatch();
    //触发异步请求
    useEffect(()=>{
        //修改store中的数据
        dispatch(fetchBillList());
    },[dispatch]);
    //获取navigate函数
    const navigate = useNavigate();
    // 切换路由
    const switchRoute = (path) => {
       //路由跳转
       navigate(path);
    }
    return(
        <div className="layout">
            <div className="container">
                {/* 二级路由出口 */}
                <Outlet />
            </div>
            <div className="footer">
                <TabBar onChange={switchRoute}>
                    {tabs.map(item => (
                      <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
                    ))}
                </TabBar>
            </div> 
        </div>
    )
}
export default Layout