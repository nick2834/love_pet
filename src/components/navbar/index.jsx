import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import _isFunction from 'lodash'
import Taro from '@tarojs/taro';
import './index.scss';

export class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarStyle: null,
            statusBarHeight: 0,
            innerWidth: 0,
            innerPaddingRight: 0,
            leftWidth: 0,
            isBack: true,
            title: "首页"
        }
    }
    componentDidMount() {
        this.getSystem()
    }
    getSystem = () => {
        const env = process.env.TARO_ENV
        if (Taro.globalSystemInfo && !Taro.globalSystemInfo.ios) {
            return Taro.globalSystemInfo;
        } else {
            // h5环境下忽略navbar
            if (env === 'h5') {
                return null;
            } else {
                const { system, statusBarHeight, windowWidth } = Taro.getSystemInfoSync();
                const isSupport = !!!Taro.getMenuButtonBoundingClientRect;
                const rect = Taro.getMenuButtonBoundingClientRect ? Taro.getMenuButtonBoundingClientRect() : null;
                const ios = !!(system.toLowerCase().search('ios') + 1);
                this.setState({
                    ios,
                    statusBarHeight,
                    innerWidth: isSupport ? 'width:' + rect.left + 'px' : '',
                    innerPaddingRight: isSupport ? 'padding-right:' + (windowWidth - rect.left) + 'px' : '',
                    leftWidth: isSupport ? 'width:' + (windowWidth - rect.left) + 'px' : '',
                    innerHeight: `height:${ios ? "44px" : "48px"}`,
                    navbarHeight: statusBarHeight + `height:${ios ? "44" : "48"}`
                })
            }
        }


    }
    render() {
        const { ios, statusBarHeight, innerWidth, innerPaddingRight, leftWidth, innerHeight } = this.state;
        const { title, isBack, isShow, renderLeft, renderCenter, renderRight } = this.props;
        return (
            <View className="navigation-bar" style={`visibility:${isShow ? "unset" : "hidden"}`}>
                <View className={`navigation-bar__placeholder ${ios ? 'ios' : 'andriod'}`}
                    style={`height:${statusBarHeight}px`}></View>
                <View className={`navigation-bar__inner ${ios ? 'ios' : 'andriod'}`}
                    style={`${innerWidth};${innerPaddingRight};${innerHeight}`}>
                    <View class='navigation-bar__left' style={leftWidth}>
                        {
                            isBack ?
                                <View class="navigation-bar__buttons">
                                    <View className='at-icon at-icon-chevron-left'></View>
                                </View>
                                :
                                renderLeft
                        }
                    </View>

                    <View class='navigation-bar__center'>
                        {
                            title ?
                                <Text>{title}</Text> : renderCenter
                        }

                    </View>

                    <View class='navigation-bar__right'>{renderRight}</View>
                </View>
            </View >
        )
    }
}

export default Navbar
