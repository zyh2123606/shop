import Taro, { Component, Config } from '@tarojs/taro'
// import { View, Text } from '@tarojs/components'
import { AtInput, AtForm, AtButton } from 'taro-ui'
import './index.less'
import Login from'../../utils/login'
import { View } from '_@tarojs_components@1.0.7@@tarojs/components/types';

class Index extends Component{
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '注册'
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
            <AtForm
              className ='sign-up-from'
            >
              <AtInput
                name='phone'
                title='手机号码'
                type='text'
                placeholder='请输入'
                value={this.state.phone}
                onChange={this.handlePhoneChange.bind(this)}
              />
              <AtInput
                clear
                className='code'
                name='code'
                title='验证码'
                type='number'
                placeholder='点击获取'
                value={this.state.code}
                onChange={this.handleCodeChange.bind(this)}
              >
                <AtButton className='code_get_button' onClick={this.getCode.bind(this)}>点击获取</AtButton>
              </AtInput>
            </AtForm>
            <AtButton className='sign-up-submit' onClick={this.submit.bind(this)}>确定</AtButton>
          </View>

        )
    }
}
export default Index
