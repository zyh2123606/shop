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
    render(){
        return(
            <View className='container'>
                <View className='at-row at-row__align--center'>
                    <View className='at-col'>
                        <Image className='logo-sty' mode='widthFix' src={Logo} />
                    </View>
                    <View className='at-col at-col-1 at-col--auto'>
                        选择门店
                    </View>
                </View>
            </View>
        )
    }
}
export default Index