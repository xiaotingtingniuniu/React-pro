import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/Cart'
import FoodsCategory from './components/FoodsCategory'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchFoodsList} from './store/modules/takeaway'
import './App.scss'

const App = () => {
  //获取数据
  //触发action
  //1:useDispatch->dispatch
  //2:将创建action对象的actionCreater导入进来
  //3:在useEffect 中出发action
  //4:useSelector 获取数据
  //获取dispatch
  const dispatch = useDispatch();
  //获取store中的数据
  const {foodsList,activeIndex} = useSelector(state=>state.foods);
  console.log('foodsList',foodsList);
  useEffect(()=>{
    //触发action
    dispatch(fetchFoodsList());
  },[dispatch]);

  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {foodsList.map((item,index) => {
                return (
                  activeIndex === index &&
                  <FoodsCategory
                    key={item.tag}
                    // 列表标题
                    name={item.name}
                    // 列表商品
                    foods={item.foods}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  )
}

export default App
