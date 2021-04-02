import { Component } from 'react'
import { View, Text } from '@tarojs/components';
import Navbar from '../../components/navbar';
import './index.scss'

export default class Circle extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='pages'>
        <Navbar
          title="圈子"
          isBack={false}
          isShow={true} />
      </View>
    )
  }
}
