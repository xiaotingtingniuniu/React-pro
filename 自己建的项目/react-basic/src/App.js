import React, { Component } from 'react'
class Test extends Component{
    constructor(props){
        super(props);
        console.log('props',props);
        this.state={
            name:'开始'
        }
        
    }
    render (){
        // 点击按钮时，向父组件传送消息
        return <div onClick={()=>this.props.sendMessage(this.state.name)}>向父组件发送消息</div>
    }
}
class App extends Component{
    constructor(){
        super();
        this.state={
            receivedMessage:''
        }
        //绑定handleReceiveMessage方法
        this.handleReceiveMessage = this.handleReceiveMessage.bind(this);
    }
    //定义接收子组件传递过来的消息的方法
    handleReceiveMessage(props){
        this.setState({
            receivedMessage:props
        });
    }
    render (){
        return (
            <div>
                我是App
                <p>
                    接收到子组件的消息：{this.state.receivedMessage}
                </p>
                {/* 将handleReceiveMessage方法作为props 传递给子组件 */}
                <Test sendMessage = {this.handleReceiveMessage}></Test>
            </div>
        )
    }
}
export default App;