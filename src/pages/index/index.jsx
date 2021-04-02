import { Component } from 'react'
import { View, Text, Image, ScrollView } from '@tarojs/components';
import Navbar from '@/components/navbar';
import Taro from '@tarojs/taro'
import Logo from '@/images/logo.png'
import './index.scss'

export default class Index extends Component {
  state = {
    isShow: false,
    list: [{}, {}, {}]
  }
  onLoad(options) {

  }
  componentWillMount() { }

  componentDidMount() {
  }

  componentWillUnmount() { }

  componentDidShow() {

  }

  componentDidHide() { }
  onPageScroll(e) {
    const { scrollTop } = e;
    if (scrollTop >= 88) {
      this.setState({ isShow: true })
    } else {
      this.setState({ isShow: false })
    }
  }
  scrollToTop = () => {
    Taro.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  }
  render() {
    const { isShow, list } = this.state;
    return (
      <View className='pages'>
        <Navbar
          title="猫狗日记"
          isBack={false}
          isShow={isShow}
          renderLeft={
            <Image onClick={this.scrollToTop} className='logo' src={Logo}></Image>
          } />
        <View className="title">最新领养</View>
        <ScrollView class="scroll-view_H" onScroll={this.onScroll} scrollX="true" style="width: 100%">
          {
            list.map((item, index) => {
              return (
                <View key={index} class="scroll-view-item_H">
                  <View className="head"></View>
                  <View className="body"></View>
                  <View className="foot"></View>
                </View>
              )
            })
          }

        </ScrollView>
        <ScrollView class="scroll-view_H" onScroll={this.onScroll} scrollX="true" style="width: 100%">
          {
            list.map((item, index) => {
              return (
                <View key={index} class="scroll-view-item_H">
                  <View className="head"></View>
                  <View className="body"></View>
                  <View className="foot"></View>
                </View>
              )
            })
          }

        </ScrollView>
        <ScrollView class="scroll-view_H" onScroll={this.onScroll} scrollX="true" style="width: 100%">
          {
            list.map((item, index) => {
              return (
                <View key={index} class="scroll-view-item_H">
                  <View className="head"></View>
                  <View className="body"></View>
                  <View className="foot"></View>
                </View>
              )
            })
          }

        </ScrollView>
        <ScrollView class="scroll-view_H" onScroll={this.onScroll} scrollX="true" style="width: 100%">
          {
            list.map((item, index) => {
              return (
                <View key={index} class="scroll-view-item_H">
                  <View className="head"></View>
                  <View className="body"></View>
                  <View className="foot"></View>
                </View>
              )
            })
          }

        </ScrollView>
        <ScrollView class="scroll-view_H" onScroll={this.onScroll} scrollX="true" style="width: 100%">
          {
            list.map((item, index) => {
              return (
                <View key={index} class="scroll-view-item_H">
                  <View className="head"></View>
                  <View className="body"></View>
                  <View className="foot"></View>
                </View>
              )
            })
          }

        </ScrollView>
      </View >
    )
  }
}
