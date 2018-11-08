import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput, AtForm, AtButton } from 'taro-ui'
import './index.less'
import MemberService from '../../services/memberService'

class Index extends Component{
  state = {
    data:{}
  }
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '我的会员'
    }

    constructor () {
      super(...arguments)

    }
    handlePhoneChange (value) {

    }
    onClickRedPackets (){
      Taro.navigateTo({url: '/pages/redpackets/index'})
    }

    componentWillMount(){

    }
    async componentDidMount(){
      Taro.showLoading({title:'正在加载！！'})
      const res = await MemberService.getAllMember({telNum:'15527824363'},{})
      Taro.hideLoading()
      if (res.data.RESP_CODE === '0000'){
        this.setState({data:res.data.DATA})
      }else{
        Taro.showToast({title:'加载失败请重试',icon:'none',duration:2000})
      }

      console.log(res)
    }

    render(){
      const data = this.state
        return(
          <View className='sign-up-container box vertical'>
            <AtForm
              className ='sign-up-from'
            >
              <AtInput
                disabled
                name='phone'
                title='手机号码'
                type='number'
                placeholder=''
                value={data.telNum}
              />
              <AtInput
                disabled
                name='code'
                title='等级'
                type='text'
                placeholder=''
                value={data.memGrade}
              />
              <AtInput
                disabled
                name='code'
                title='积分'
                type='text'
                placeholder=''
                value={data.memPoint}
              />
              <AtInput
                disabled
                name='code'
                title='红包'
                type='number'
                placeholder=''
                value={data.memDiscount}

              >
                <AtButton onClick={this.onClickRedPackets.bind(this)}> > </AtButton>
              </AtInput>
            </AtForm>
          </View>

        )
    }
}
export default Index
