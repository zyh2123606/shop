import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.less'

class Index extends Component{
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '我的'
    }
    componentDidMount(){

    }
    bindSignUp(){
      Taro.navigateTo({url: '/pages/signUp/index'})
    }

    bindAdress(){
      Taro.navigateTo({url: '/pages/adress/index'})
    }

    render(){
        return(
            <View className='account-container box vertical'>
                <View className='header'>
                    <View className='box vbox uinfo'>
                        <View className='user-head'></View>
                        <View>刘可可</View>
                    </View>
                </View>
                <View className='content'>
                    <View className='box horizontal vbox'>
                        <View className='flex' style='font-size: 20px;'>我的订单</View>
                        <View className='box horizontal vbox'>
                            <View style='color: #999; font-size:16px;'>查看全部订单</View>
                            <Text className='arrow-right'></Text>
                        </View>
                    </View>
                    <View className='box horizontal menu a-end'>
                        <View className='flex menu-item'>
                            <View className='icon-order menu-icon'></View>
                            <Text>全部</Text>
                        </View>
                        <View className='flex menu-item'>
                            <View className='icon-wait-pay menu-icon'></View>
                            <Text>待付款</Text>
                        </View>
                        <View className='flex menu-item'>
                            <View className='icon-wait-recive menu-icon'></View>
                            <Text>待收货</Text>
                        </View>
                        <View className='flex menu-item'>
                            <View className='icon-complete menu-icon'></View>
                            <Text>已完成</Text>
                        </View>
                        <View className='flex menu-item'>
                            <View className='icon-cancel menu-icon'></View>
                            <Text>已取消</Text>
                        </View>
                    </View>
                    <View className='act-menu'>
                        <View className='act-menu-item box vbox'>
                            <View className='flex'>我的会员</View>
                            <Text className='item-txt' onClick={this.bindSignUp.bind(this)}>去注册</Text>
                            <Text className='arrow-right'></Text>
                            {/* <AtButton></AtButton> */}
                            {/* <AtButton className='arrow-right' onClick={this.binSignUp.bind(this)}>去注册</AtButton> */}
                        </View>
                        <View className='act-menu-item box vbox' onClick={this.bindAdress.bind(this)}>
                            <View className='flex'>收货地址</View>
                            <Text className='arrow-right'></Text>
                        </View>
                        <View className='act-menu-item box vbox'>
                            <View className='flex'>在线客服</View>
                            <Text className='arrow-right'></Text>
                        </View>
                        <View className='act-menu-item box vbox'>
                            <View className='flex'>联系客服经理</View>
                            <Text className='item-txt'>18213927803</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
export default Index
