import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

class Index extends Component{
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '我的'
    }
    render(){
        return(
            <View>
                <Text>我的</Text>
            </View>
        )
    }
}
export default Index