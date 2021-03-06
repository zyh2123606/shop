import Taro, { Component, Config } from '@tarojs/taro'
import { View ,Text} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.less'
import MemberService from '../../services/memberService'


class Index extends Component{
  state = {
    current: 0,

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
    onClickUseNow(value){
      console.log(value)
    }
    componentWillMount(){

    }
    async componentDidMount(){
      Taro.showLoading({title:'正在加载！！'})
      const res=await MemberService.getAllRedTicket({telNum:15527824363})
      Taro.hideLoading()
      if (res.data.RESP_CODE === '0000'){

        Taro.showToast({title:'成功',icon:'success',duration:2000})
      }else{
        Taro.showToast({title:'失败',icon:'none',duration:2000})
      }
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
                      <Text className = 'user-red-packets' onClick={this.onClickUseNow.bind(this)}>立即使用</Text>
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
