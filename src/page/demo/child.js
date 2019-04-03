import React, { Component } from 'react'


class Child extends Component {
    state = {
        count: 0
    }
    // 渲染前
    componentWillMount() {
        console.log('will mount')

    }
    //渲染后
    componentDidMount() {
        console.log("Did mount")
    }
    // 接收父组件传入的属性
    componentWillReceiveProps(newprops) {
        console.log('will props' + newprops.name)
    }
    // 一旦调用setSate就会使用的方法
    shouldComponentUpdate() {
        console.log('should update')
        return true;
    }

    // Child组件从Life组件传入一个属性值通过 this.props
    render() {
        return (
            <div>
                <p>子组件生命周期使用</p>

                <p >{this.props.name}</p>
            </div>
        )
    }
}
export default Child 