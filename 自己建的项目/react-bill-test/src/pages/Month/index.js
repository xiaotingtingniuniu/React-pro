import { NavBar, DatePicker} from 'antd-mobile'
import './index.scss'
import { useMemo, useState } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
//处理数组的插件
import _ from 'lodash'
const Month = () => {
  //按月做数据的分组
  const billList = useSelector(state=>state.bill).billList;
  console.log('billList',billList);
  const monthGroup = useMemo(()=>{
    // return 出去计算之后的值
    return _.groupBy(billList,(item)=>dayjs(item.date).format('YYYY-MM'));
  },[billList]);
  console.log('monthGroup',monthGroup);
  //控制弹框的打开和关闭
  const [dateVisible,setDateVisible] = useState(false);
  //控制时间显示
  const [currentDate,setCurrentDate] = useState(()=>{
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    return year+' - '+month;
  });
  const onConfirm = (val) => {
    const year = val.getFullYear();
    const month = val.getMonth()+1;
    const totalDate = year+' - '+month;
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