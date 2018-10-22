import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtCheckbox, AtSwipeAction, AtInputNumber  } from 'taro-ui'
import './index.less'

class Index extends Component{
    state = { selectedList: [] }
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '购物车'
    }
    chkHandleChange = selectedList => {
        this.setState({ selectedList })
    }
    render(){
        const { selectedList } = this.state
        return(
            <View className='cart-container box vertical'>
                <View className='cart-content'>
                    <View className='panel box horizontal vbox'>
                        <AtCheckbox selectedList={selectedList} options={[{value: 0, label: ''}]} onChange={this.chkHandleChange} />
                        <View className='flex action'>
                            <AtSwipeAction isClose={true} autoClose={true} options={[{text: '删除', style: { color: '#FF4949', background: 'transparent' }}]}>
                                <View className='box vertical'>
                                    <Text className='prod-name'>红米note5手机联通双卡双待</Text>
                                    <View>
                                        <Text className='prod-tag'>64G</Text>
                                        <Text className='prod-tag'>黑色</Text>
                                    </View>
                                    <View style='margin-right:20px;padding-bottom:15px;' className='box vbox horizontal'>
                                        <Text className='money flex'>￥3799.00</Text>
                                        <AtInputNumber
                                            min={1}
                                            max={10}
                                            step={1}/>
                                    </View>
                                </View>
                            </AtSwipeAction>
                        </View>
                    </View>
                </View>
                <View className='footer-bar' style={{bottom: process.env.TARO_ENV === "weapp"?0:50}}>
                    <View className='footer-content box vbox'>
                        <View className='flex'>
                            <AtCheckbox selectedList={selectedList} options={[{value: 0, label: '全部'}]} onChange={this.chkHandleChange} />
                        </View>
                        <View>合计：<Text className='money'>￥2768.00</Text></View>
                        <Text className='pay-btn'>结算</Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default Index