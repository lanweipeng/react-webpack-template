import React from 'react'
import "./test.less"
import "./test.css"
import buyImg from "@/assets/img/icon_buy_task.png"
import testImg from "@/assets/img/bg_store.png"
export default class Home extends React.Component {
    render(){
        return (
            <div className="test test2">
                <p>hello world</p>
                <img src={buyImg} alt="" />
                <img src={testImg} alt="" style={{width:360,height:60}}/>
            </div>
        )
    }
}