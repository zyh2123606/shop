import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput, AtForm, AtButton } from 'taro-ui'
import './index.less'

class Index extends Component{
  state = {
    phone: '',
    code:''
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
      this.setState({
        phone:value
      })
      if (this.state.phone.length>0){

      }else{

      }
    }
    onClickRedPackets (){
      Taro.navigateTo({url: '/pages/redpackets/index'})
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
                disabled
                name='phone'
                title='手机号码'
                type='number'
                placeholder=''
                value={this.state.phone}
              />
              <AtInput
                disabled
                name='code'
                title='等级'
                type='text'
                placeholder=''
                value={this.state.code}
              />
              <AtInput
                disabled
                name='code'
                title='积分'
                type='text'
                placeholder=''
                value={this.state.code}
              />
              <AtInput
                disabled
                name='code'
                title='红包'
                type='number'
                placeholder=''
                value={this.state.code}

              >
                <AtButton onClick={this.onClickRedPackets.bind(this)}> > </AtButton>
              </AtInput>
            </AtForm>
          </View>

        )
    }
}
export default Index