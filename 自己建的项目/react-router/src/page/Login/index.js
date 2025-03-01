import { useNavigate } from "react-router-dom"
const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <span>我是登录页面</span>
            <button onClick={()=>navigate('/article/1001')}>params传参</button>
        </div>
        
    )
}
export default Login