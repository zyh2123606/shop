import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtInput, AtForm } from 'taro-ui'
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
            <View className='container'>
                <AtForm>
                    <AtInput
                        name='value1'
                        title='文本'
                        type='text'
                        placeholder='单行文本'
                        value={this.state.value1}
                        onChange={this.handleChange}
                    />
                    <AtInput
                        name='value2'
                        title='数字'
                        type='number'
                        placeholder='请输入数字'
                        value={this.state.value2}
                        onChange={this.handleChange}
                    />
                </AtForm>
            </View>
        )
    }
}
export default Index