import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput, AtForm, AtButton } from 'taro-ui'
import './index.less'
import MemberService from '../../services/memberService'

class Index extends Component{
  state = {
    telNum: '',
    code:''
  }
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '注册'
    }

    constructor () {
      super(...arguments)

    }
    handlePhoneChange (value) {
      this.setState({
        telNum:value
      })
    }
    handleCodeChange (value) {
      this.setState({
        code:value
      })
    }
    getCode(){
      console.log("获取"+this.state.telNum+"验证码")
      this.setState({
        code:'12345'
      })
    }
    async submit(){
      console.log('点击了提交')

      Taro.showLoading({title:'正在加载！！'})
      const res = await MemberService.addMember({telNum:this.state.telNum})
      Taro.hideLoading()
      if(res.data.RESP_CODE === '0000'){
        // this.setState({data:res.data.DATA})
        Taro.showToast({title:'成功！',icon:'success',duration:2000})
        setTimeout(function(){
          Taro.navigateBack()
        },2000)

      }else{
        Taro.showToast({title:'加载失败！',icon:'none',duration:2000})
      }


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
                type='number'
                placeholder='请输入'
                value={this.state.telNum}
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
