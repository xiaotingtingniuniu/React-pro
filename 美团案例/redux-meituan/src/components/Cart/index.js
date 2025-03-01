import classNames from 'classnames'
import Count from '../Count'
import './index.scss'
import {useSelector,useDispatch} from 'react-redux'
import '../../assets/iconfont.css'
import { increCount,decreCount,clearCartList} from '../../store/modules/takeaway'
import { useState } from 'react'
const Cart = () => {
  // 获取store中cartList的数据
  const {cartList} = useSelector(state=>state.foods);
  console.log('cartList',cartList);
  //计算购物车内的总价格
  const totalCartPrice = cartList.reduce((prev,current)=>prev+current.price*current.count,0);
  console.log('totalCartPrice',totalCartPrice);
  //计算购物车内物品数量
  const totalCartFoods = cartList.reduce((prev,current)=>prev+current.count,0);
  console.log('totalCartFoods',totalCartFoods);
  //当购物车中食物的数量>0时 显示黄色小人，否则显示灰色小人
  const styleObj = totalCartFoods > 0 ? { color: 'yellow', fontSize: '60px' } : {color:'gray',fontSize: '60px'};
  //获取dispatch
  const dispatch = useDispatch();
  //控制购物车显示与隐藏的状态
  const [visible,setVisible] = useState(false);
  //点击购物车的时候
  const onShow = ()=>{
    if(totalCartFoods>0){
      setVisible(true);
    }
  }
  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div onClick={()=>setVisible(false)}
        className={classNames('cartOverlay',visible&&totalCartFoods>0?'visible':null)}
      />
      <div className="cart">
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量 */}
        <div onClick={onShow} className={classNames('icon','iconfont', 'icon-waimaiyuan-nv')} style={styleObj}>
          { totalCartFoods>0&& <div className="cartCornerMark">{totalCartFoods}</div>}
        </div>
        {/* 购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {totalCartPrice.toFixed(2)}
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        {totalCartFoods>0 ? (
          <div className="goToPreview">去结算</div>
        ) : (
          <div className="minFee">¥20起送</div>
        )}
      </div>
      {/* 添加visible类名 div会显示出来 */}
      <div className={classNames('cartPanel', visible&&(totalCartFoods>0)?'visible':null)}>
        <div className="header">
          <span className="text">购物车</span>
          <span className="clearCart" onClick={()=>dispatch(clearCartList())}>
            清空购物车
          </span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea">
          {cartList.map(item => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  {/* 数量组件 */}
                  <Count
                    count={item.count}
                    onMinus={()=>dispatch(decreCount({id:item.id}))}
                    onPlus={()=>dispatch(increCount({id:item.id}))}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
