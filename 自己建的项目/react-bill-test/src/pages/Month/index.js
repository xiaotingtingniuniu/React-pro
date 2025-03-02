import { NavBar, DatePicker} from 'antd-mobile'
import './index.scss'
import { useState } from 'react'
import classNames from 'classnames'
const Month = () => {
  //控制弹框的打开和关闭
  const [dateVisible,setDateVisible] = useState(false);
  //控制时间显示
  const [currentDate,setCurrentDate] = useState(()=>{
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    return year+' | '+month;
  });
  const onConfirm = (val) => {
    const year = val.getFullYear();
    const month = val.getMonth()+1;
    const totalDate = year+' | '+month;
    setCurrentDate(totalDate);
  }
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backIcon={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={()=>setDateVisible(true)}>
            <span className="text">
              {currentDate}月账单
            </span>
            {/* 有expand类名 箭头潮上 */}
            <span className={classNames('arrow',dateVisible && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            max={new Date()}
            onCancel={()=>setDateVisible(false)}
            onClose={()=>setDateVisible(false)}
            closeOnMaskClick={()=>setDateVisible(false)}
            onConfirm={(val)=>onConfirm(val)}
          />
        </div>
      </div>
    </div >
  )
}

export default Month