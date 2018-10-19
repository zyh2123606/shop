import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.less'

class Index extends Component{
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '首页'
    }
    render(){
        return(
            <View>
                <View className='at-row'>
                    <View className='at-col'>
                        
                    </View>
                    <View className='at-col at-col-1 at-col--auto'></View>
                </View>
            </View>
        )
    }
}
export default Index