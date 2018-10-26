import Taro, { Component, Config } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { AtInput, AtForm, AtButton,AtCheckbox } from 'taro-ui'
import './index.less'

class Index extends Component{
  state = {
    receivers:'',
    phone: '',
    zone:'',
    adress:'',
    default:'',
    selectedList: []
  }
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '添加收货地址'
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
    componentWillMount () {

    }

    componentDidMount(){
      console.log(this.$router.params) // 输出 { id: 2, type: 'test' }


      if (this.$router.params.type === 'edith'){
        Taro.setNavigationBarTitle({title:'编辑收货地址'})
        this.setState({
            receivers:'董三',
            phone: '13668739613',
            zone:'云南省 昆明市 ',
            adress:'云南省 昆明市 盘龙区 滨江西路51号 联通大厦',
            default:'1',
            selectedList: [0]
        },()=>{

        })


      }else{
        // navigationBarTitleText = '添加收货地址'
        Taro.setNavigationBarTitle({title:'添加收货地址'})
      }
    }

    chkHandleChange = selectedList =>{
      this.setState({ selectedList })
      console.log(selectedList)
      Taro.showToast({
        title: '注册成功',
        icon: 'success',
        duration: 2000
      })
    }

    render(){
      const { selectedList } = this.state
        return(
          <View className='add-adress-container box vertical'>
            <AtForm className ='add-adress-from' >
              <AtInput
                name='receivers'
                title='收货人'
                type='text'
                placeholder='请输入'
                value={this.state.receivers}
                onChange={this.handlePhoneChange.bind(this)}
              />
              <AtInput
                clear
                name='phone'
                title='联系电话'
                type='number'
                placeholder='点击获取'
                value={this.state.phone}
                onChange={this.handleCodeChange.bind(this)}
              />
               <AtInput
                clear
                name='zone'
                title='所在地区'
                type='text'
                placeholder='点击获取'
                value={this.state.zone}
                onChange={this.handleCodeChange.bind(this)}
              />
               <AtInput
                clear
                name='adress'
                title='收货地址'
                type='text'
                placeholder='点击获取'
                value={this.state.adress}
                onChange={this.handleCodeChange.bind(this)}
              />
            </AtForm>
            <View className='box horizontal vbox default-view'>
            <AtCheckbox selectedList={selectedList} options={[{value: 0, label: ''}]} onChange={this.chkHandleChange} />
            <Text >默认地址</Text>
            </View>

            <AtButton className='sign-up-submit' onClick={this.submit.bind(this)}>确定</AtButton>
          </View>

        )
    }
}
export default Index
