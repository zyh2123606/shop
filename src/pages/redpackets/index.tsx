import Taro, { Component, Config } from '@tarojs/taro'
import { View ,Text} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.less'

class Index extends Component{
  state = {
    current: 0
  }
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '我的红包'
    }

    constructor () {
      super(...arguments)

    }

    handleClick (value) {
      this.setState({
        current: value
      })
    }
    componentWillMount(){

    }

    render(){
      const tabList = [{ title: '可用红包' }, { title: '已过期红包' }]

        return(
          <AtTabs className='at-tabs' current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            <AtTabsPane className='at-tabs-pane'  current={this.state.current} index={0} >
              <View className='use-red-packets' >
                <View className='box horizontal red-packets-items '>
                  <View className='box vbox hbox item-price-view'>
                    <Text className='price'>¥10</Text>
                  </View>
                  <View className='flex item-content'>
                    <View className='item-content-top'>订单满199即可享用</View>
                    <View className='box item-content-bottom'>
                      <Text className = 'flex'>2018-11-11 到期</Text>
                      <Text >立即使用</Text>
                    </View>
                  </View>



                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View className='use-red-packets' style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
            </AtTabsPane>
          </AtTabs>
        )
    }
}
export default Index
