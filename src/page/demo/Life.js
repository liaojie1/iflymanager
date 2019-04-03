import React, { Component } from 'react'
import Child from './child';
import "./index.less"
import { Button } from "antd"
import "antd/dist/antd.css"
class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    // 箭头函数和一般方法的区别加bind(this)
    handeleAdd = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    hanleClick() {
        this.setState({
            count: this.state.count - 1
        });
    }

    // 变量的展示{}   样式style{{}} return只有一个根元素
    render() {


        return (
            <div className="content">
                <p>React生命周期试用</p>
                <Button onClick={this.handeleAdd}>Antd点击一下</Button>
                <button onClick={this.handeleAdd}>点击一下</button>
                <button onClick={this.hanleClick.bind(this)} > 点击一下</button>
                <p>{this.state.count}</p>
                <Child name={this.state.count}></Child>
            </div >
        )

    }
}
export default Life