import Taro, { Component, Config } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { AtInput, AtForm, AtButton,AtCheckbox } from 'taro-ui'
import './index.less'

import AddresService from '../../services/addressService'
class Index extends Component{
  state = {
    data:{
      isDefault: '',
      province: '',
      conUser: '',
      creatTime: '',
      city: '',
      street: '',
      conTel: '',
      district: '',
      addrDetail: '',
      // addrId: ''
  },
    selectedList: [],
    type:''//保存页面类型（Edith/Add）
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

    componentWillMount () {

    }

    componentDidMount(){
      console.log(this.$router.params) // 输出 { id: 2, type: 'test' }
      if (this.$router.params.type === 'edith'){
        Taro.setNavigationBarTitle({title:'编辑收货地址'})
        let item = JSON.parse(this.$router.params.item)

        if (item.isDefault === '1'){
          this.setState({
            data:item,
            selectedList: [0],
            type:'edith'
          })
        }else{
          this.setState({
            data:item,
            selectedList: [],
            type:'edith'
          })
        }
      }else{
        // navigationBarTitleText = '添加收货地址'
        Taro.setNavigationBarTitle({title:'添加收货地址'})
        this.setState({
          selectedList: [],
          type:'add'
        })
      }
    }

    chkHandleChange = (value) =>{
      console.log('chkHandleChange='+JSON.stringify(this.state.data))

      console.log(value)
      if (this.state.selectedList.length > 0 ){
        this.state.data.isDefault = '0'
        this.state.selectedList=value
        this.forceUpdate()
      }else{
        this.state.data.isDefault = '1'
        this.state.selectedList=value
        this.forceUpdate()
      }
    }
    handlePhoneChange (value) {
      this.state.data.conTel = value
      this.forceUpdate()
    }
    handleReceiversChange (value) {
      this.state.data.conUser = value
      this.forceUpdate()
    }
    handleZoneChange (value) {
      this.state.data.street = value
      this.forceUpdate()
    }
    handleAddressChange (value) {
      // this.setState({data:{province:value}})
      // this.setState({data:{city:value}})
      // this.setState({data:{district:value}})
      // this.setState({data:{street:value}})
      // this.setState({data:{addrDetail:value}})

    }

    async submit(){
      console.log('点击了提交='+JSON.stringify(this.state.data))

      if (this.state.type === 'edith'){
        Taro.showLoading({title:'正在加载！'})
        const res = await AddresService.uapdateAddress(this.state.data)
          Taro.hideLoading()
          if (res.data.RESP_CODE === '0000'){
            Taro.showToast({title:'修改成功',icon:'success',duration:5000})
            setTimeout(function(){
              Taro.navigateBack()
             },2000)
          }else{
            Taro.showToast({title:'修改失败',icon:'failer',duration:2000})
          }


      }else{
        const res = await AddresService.addAddress(this.state.data)
          Taro.hideLoading()
          if (res.data.RESP_CODE === '0000'){
            Taro.showToast({title:'添加成功',icon:'success',duration:2000})
            setTimeout(function(){
              Taro.navigateBack()
             },2000)
          }else{
            Taro.showToast({title:'添加失败',icon:'failer',duration:2000})
          }      }
    }

    render(){
      const { selectedList ,data} = this.state
        return(
          <View className='add-adress-container box vertical'>
            <AtForm className ='add-adress-from' >
              <AtInput
                name='receivers'
                title='收货人'
                type='text'
                placeholder='请输入'
                value={data.conUser}
                onChange={this.handleReceiversChange.bind(this)}
              />
              <AtInput
                clear
                name='phone'
                title='联系电话'
                type='number'
                placeholder='点击获取'
                value={data.conTel}
                onChange={this.handlePhoneChange.bind(this)}
              />
               <AtInput
                disabled
                name='zone'
                title='所在地区'
                type='text'
                placeholder='点击获取'
                value={data.district}
                onChange={this.handleZoneChange.bind(this)}
              >
              <AtButton></AtButton>
              </AtInput>
               <AtInput
                clear
                name='adress'
                title='收货地址'
                type='text'
                placeholder='点击获取'
                value={data.province+' '+data.city+' '+data.district+' '+data.street+' '+data.addrDetail}
                onChange={this.handleAddressChange.bind(this)}
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
