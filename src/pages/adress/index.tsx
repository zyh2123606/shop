import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtCard, AtButton } from 'taro-ui'
import './index.less'
import Login from'../../utils/login'
import { View } from '_@tarojs_components@1.0.7@@tarojs/components/types';

class Index extends Component{
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '管理收货地址'
    }

    constructor () {
      super(...arguments)
      this.state = {
        phone: '',
        code:''
      }
    }
    handlePhoneChange (value) {
      this.setState({
        phone:value
      })
      if (this.state.phone.count>0){

      }else{

      }
    }
    handleCodeChange (value) {
      this.setState({
        code:value
      })
    }
    getCode(){
      console.log("获取"+this.state.phone+"验证码")
      this.setState({
        code:'12345'
      })
    }
    submit(){
      console.log('点击了提交')
      Taro.showToast({
        title: '注册成功',
        icon: 'success',
        duration: 2000
      })
    }
    componentWillMount(){

    }

    render(){
        return(
          <View className='sign-up-container box vertical'>

            <AtCard
              note='小Tips'
              extra='13668739613'
              title='刘可可'
              thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
              <Text>云南省 昆明市 五华区 江滨西路51号江滨西路51号江滨西路51号江滨西路51号江滨西路51号江滨西路51号 联通大厦</Text>
            </AtCard>
            <AtButton className='sign-up-submit' onClick={this.submit.bind(this)}>确定</AtButton>
          </View>

        )
    }
}
export default Index
