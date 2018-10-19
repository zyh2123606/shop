import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

class Index extends Component{
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '购物车'
    }
    render(){
        return(
            <View>
                <Text>购物车</Text>
            </View>
        )
    }
}
export default Index