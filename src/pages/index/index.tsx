import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, Label } from '@tarojs/components'
import Logo from '../../images/logo.png'
import './index.less'

class Index extends Component{
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '首页'
    }
    selectRoom = () => {
        
    }
    render(){
        return(
            <View className='container'>
                <View className='content'>
                    <View className='at-row at-row__align--center'>
                        <View className='at-col'>
                            <Image className='logo-sty' mode='widthFix' src={Logo} />
                        </View>
                        <View onClick={this.selectRoom}>
                            <View className='at-row at-row__align--center'>
                                <Text className='arrow-txt'>选择门店</Text>
                                <Text className='arrow-right'></Text>
                            </View>
                        </View>
                    </View>
                    <View className='type-banner'>
                        <View className='banner-inner'></View>
                    </View>
                    <View className='prod-panel'>
                        <View className='pannel-inner'>商品类型</View>
                    </View>
                    <View className='prod-panel'>
                        <View className='pannel-inner'>特惠专区</View>
                        <View className='th-banner'></View>
                    </View>
                    <View className='prod-panel'>
                        <View className='pannel-inner'>热门商品</View>
                        <View className='hot-banner'></View>
                    </View>
                    <View className='prod-panel'>
                        <View className='pannel-inner'>新品上架</View>
                        <View className='new-banner'></View>
                    </View>
                </View>
            </View>
        )
    }
}
export default Index