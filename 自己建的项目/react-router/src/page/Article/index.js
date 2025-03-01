import {useParams} from 'react-router-dom'
const Article = () =>{
    const params = useParams();
    const id = params.id;
    return (
        <div>
            <span>我是文章页面</span>
            <span>传过来的参数是id={id}</span>
        </div>
    )
}
export default Article