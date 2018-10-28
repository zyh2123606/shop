import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Map} from '@tarojs/components'
import { AtCheckbox, AtButton } from 'taro-ui'
import './index.less'

import AddresService from '../../services/addressService'
class Index extends Component{
  state = { selectedList: [] ,addressList:[]}

    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '管理收货地址'
    }

    constructor () {
      super(...arguments)

    }

    async componentWillMount(){

    }
    async componentDidMount(){
      Taro.showLoading({title:'正在加载！'})
      const addressData = await AddresService.getAallAddress()
      console.log(addressData.data)
      // this.setState({addressList:addressData.data.DATA.addressList})
      for(var i=0;i<addressData.data.DATA.addressList.length;i++){
        let item=addressData.data.DATA.addressList[i]
        if (item.isDefault === '1'){
          this.setState({
            addressList:addressData.data.DATA.addressList,
            selectedList: [i],
          },()=>{
            Taro.hideLoading()
          })
        }
      }
      setTimeout(function(){
        Taro.hideLoading()
      },2000)
    }
    getDerivedStateFromProps(){

    }

    chkHandleChange = value => {
      // this.setState({ selectedList })
      if (this.state.selectedList.length>0){
        if (value.length>0){
          this.setState({ selectedList:[value[value.length-1]] },()=>{
            console.log('selectedList==='+this.state.selectedList)

          })
        }else{
          this.setState({ selectedList:value },()=>{
            console.log('selectedList==='+this.state.selectedList)

          })
        }

      }else{
        this.setState({ selectedList:value },()=>{
          console.log('selectedList==='+this.state.selectedList)

        })
      }
    }
    onClickEdith = value =>{
      console.log('点击编辑'+value)
      let item=this.state.addressList[value]

      let itemStr= JSON.stringify(item)

      Taro.navigateTo({url: '/pages/addadress/index?type=edith&item='+itemStr})
    }
    onClickDetele= () =>{
      console.log('点击删除')
      Taro.showModal({
        title: '提示',
        content: '您点击了删除收货地址',
        showCancel: true,
        confirmText: '删除'
      }).then(res=>{
        if (res.confirm) {
          console.log('用户点击了“删除”')
        }
      })
    }
    onClickAdd = () =>{
      console.log('点击添加收货地址')
      Taro.navigateTo({url: '/pages/addadress/index?type=add'})
    }
    render(){
      const { selectedList,addressList } = this.state
        return(
          <View className='adress-container box vertical'>
          {
            addressList.map((item,index)=>{
              return (
                <View className='item-view' key={index}>
                  <View className='item-top-view'>
                    <View className='box'>
                      <Text className='flex name'>{item.conUser}</Text>
                      <Text className='item-phone'>{item.conTel}</Text>
                    </View>
                    <Text >{item.province+' '+item.city+' '+item.district+' '+item.street+' '+item.addrDetail}</Text>
                  </View>
                  <View className='item-buttom-view'>
                    <View className='box horizontal vbox'>
                    <AtCheckbox selectedList={selectedList} options={[{value: index, label: '',disabled: true}]} onChange={this.chkHandleChange} />
                    <Text className='flex' >默认地址</Text>
                    <Text className='icon-account edith' onClick={this.onClickEdith.bind(this,index)}></Text>
                    <Text className='icon-cancel detele' onClick={this.onClickDetele.bind(this)}></Text>
                    </View>
                  </View>
              </View>)
            })
          }
            <AtButton className='address-add' onClick={this.onClickAdd.bind(this)}>添加收货地址</AtButton>
          </View>

        )
    }
}
export default Index
