import Taro, { Component } from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import './index.scss'

class customTabBar extends Component {
    state = {
        selected: 0,
        color: 'rgba(68, 68, 68, 1)',
        selectedColor: 'rgba(68, 68, 68, 1)',
        list: [{
            pagePath: "pages/index/index",
            iconPath: "../assets/tab-bar/home.png",
            selectedIconPath: "../assets/tab-bar/home-sel.png",
            text: "首页",
        },
        {
            pagePath: "pages/mine/index",
            iconPath: "../assets/tab-bar/mine.png",
            selectedIconPath: "../assets/tab-bar/mine-sel.png",
            text: "个人",
        }]
    }

    switchTab = (item) => {
        const url = '/' + item.pagePath
        Taro.switchTab({
            url: url
        })
    }

    render() {
        return (
            <CoverView className='bottom-tab'>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <CoverView className='bottom-tab-item' onClick={this.switchTab.bind(this, item)} data-path={item.pagePath} key={item.text}>
                                <CoverImage className='bottom-tab-item-img' src={this.state.selected === index ? item.selectedIconPath : item.iconPath} />
                                <CoverView className='bottom-tab-item-text' style={{ color: this.state.selected === index ? this.state.selectedColor : this.state.color }}>
                                    {item.text}
                                </CoverView>
                            </CoverView>
                        )
                    })
                }
            </CoverView>
        )
    }
}

export default customTabBar