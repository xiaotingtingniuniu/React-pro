import Login from '../page/Login'
import Article from '../page/Article'
import {createBrowserRouter} from 'react-router-dom'
import Layout from '../page/Layout'
import About from '../page/About'
import Board from '../page/Board'
import NotFound from '../page/NotFound'
const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            //设置为默认二级路由，一级路由访问的时候，它也能得到渲染
            {
                // path:'about',
                index:true,
                element:<About/>,
            },
            {
                path:'board',
                element:<Board />
            }
            
        ]
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/article/:id',
        element:<Article />
    },
    {
        path:'*',
        element:<NotFound />
    }
])
export default router