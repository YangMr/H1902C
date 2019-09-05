//引入react组件
import React from "react"
//引入tabbar组件
import { TabBar } from 'antd-mobile'

import Book from "./Book"
import Rank from "./Rank"
import Search from "./Search"

//创建的tab组件
class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '书架',
            hidden: false,
            fullScreen: false,
        };
    }

    // renderContent(){
    //     return(
    //         <div>hello</div>
    //     )
    // }

    render(){
        return (
            <div className="tab">

                <TabBar tabBarPosition="bottom" unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="#fff">
                    <TabBar.Item
                        title="书架"
                        key = "书架"
                        selected={this.state.selectedTab === "书架"}
                        icon={<div style={{ width:"22px", height:"22px", background:'url(assets/book.svg) center center / 21px 21px no-repeat'}} />}
                        selectedIcon={<div style={{ width:"22px", height:"22px", background:'url(assets/book.svg) center center / 21px 21px no-repeat'}} />}
                        onPress={()=>
                            this.setState({
                                selectedTab : "书架"
                            })
                        }
                    >
                        <Book></Book>
                    </TabBar.Item>
                    <TabBar.Item
                        title="分类"
                        key = "分类"
                        selected={this.state.selectedTab === "分类"}
                        icon={<div style={{ width:"22px", height:"22px", background:"url(assets/category.svg) center center /  21px 21px no-repeat"}} />}
                        selectedIcon={<div style={{ width:"22px", height:"22px", background:"url(assets/category.svg) center center /  21px 21px no-repeat"}} />}
                        onPress={()=>
                            this.setState({
                                selectedTab : "分类"
                            })
                        }
                    >
                        <Book></Book>
                    </TabBar.Item>
                    <TabBar.Item
                        title="排行"
                        key="排行"
                        selected={this.state.selectedTab === "排行"}
                        icon={<div style={{ width:"22px", height:"22px", background:"url(assets/rank.svg) center center /  21px 21px no-repeat"}} />}
                        selectedIcon={<div style={{ width:"22px", height:"22px", background:"url(assets/category.svg) center center /  21px 21px no-repeat"}} />}

                        onPress={()=>
                            this.setState({
                                selectedTab : "排行"
                            })

                        }
                    >
                        <Rank></Rank>
                    </TabBar.Item>
                    <TabBar.Item
                        title="搜索"
                        key="搜索"
                        selected={this.state.selectedTab === "搜索"}
                        icon={<div style={{ width:"22px", height:"22px", background:"url(assets/search.svg) center center /  21px 21px no-repeat"}} />}
                        selectedIcon={<div style={{ width:"22px", height:"22px", background:"url(assets/category.svg) center center /  21px 21px no-repeat"}} />}

                        onPress={()=>
                            this.setState({
                                selectedTab : "搜索"
                            })
                        }
                    >
                        <Search></Search>
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default Tab