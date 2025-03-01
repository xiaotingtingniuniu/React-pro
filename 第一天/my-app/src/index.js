import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   //严格模式
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();//它主要用于收集和报告网页的性能指标

class Child extends React.Component{
  constructor(){
    super();
    this.state={
      test:'我是test'
    }
  }

  componentWillMount(){
    console.log('child componentWillMount');
  }
  componentDidMount(){
    console.log('child componentDidMount');
  }
  //组件即将接收新的props参数(即将接收，说明还没有收到，this.props可以访问到老的props参数)
  componentWillReceiveProps(new_props){
    console.log('child componentWillReceiveProps',new_props,this.props);
  }
 //为了控制组件是否更新  有助于性能优化 通过判断可以控制是否更新
 //React可以非常细的去控制组件的渲染状态，所以牛逼的工程师可以让React性能特别好，普通的工程师会让项目爆炸。
  // shouldComponentUpdate(new_props,new_state){
  //   console.log('shouldComponentUpdate',new_props,new_state,this.props);
  //   return true //如果返回true 则会继续更新，如果返回false 则不会再更新
  // }
  
  //即将更新 都是最新的props和state 可以通过this.props获取到旧的props
  componentWillUpdate(props,state){
    console.log('child componentWillUpdate',props,state,this.props);
  }
  //已经更新 这里通过this.props获取到的props就是更新后的props参数了
  componentDidUpdate(){
    console.log('child componentDidUpdate',this.props);
  }
  render(){
    //render中才会去对比新旧的props，找出需要更新的DOM
    console.log('child render');
    return(
      <div>我是子组件</div>
    )
  }
}


// 挂载阶段
class App extends React.Component{
  constructor(){
    super();
    // console.log('constructor');
    this.state={
      count:0
    }
  }
  componentWillMount(){
    // console.log('componentWillMount');
  }
  //项目中用的多
  componentDidMount(){
    console.log('APP componentDidMount');
    //挂载以后 重新修改count的状态
    this.setState({
      count:1
    })
  }
  render(){
    // console.log('render');
    const {count} = this.state;
    return(
      <div>
        <Child num={count}></Child>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
)