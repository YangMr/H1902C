//引入react
import React from "react"

//创建组件
class Header extends React.Component {
    render(){
        return (
            <div className="header-search">
                <div className="header-menu">
                    二手房
                </div>
                <div className="header-input">
                    <input type="text" placeholder="请输入小区名或地址"/>
                </div>
                <div className="header-cancel">
                    取消
                </div>
            </div>
        )
    }
}

//导出组件
export default Header