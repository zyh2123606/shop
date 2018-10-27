import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import { AtCheckbox, AtButton } from 'taro-ui'
import './index.less'

class Index extends Component{
  state = { selectedList: [] }

    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '管理收货地址'
    }

    constructor () {
      super(...arguments)

    }

    componentWillMount(){

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
    onClickEdith = () =>{
      console.log('点击编辑')
      Taro.navigateTo({url: '/pages/addadress/index?type=edith'})
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
      const { selectedList } = this.state
        return(
          <View className='adress-container box vertical'>
            <View className='item-view'>
              <View className='item-top-view'>
                <View className='box'>
                  <Text className='flex name'>张小红</Text>
                  <Text className='item-phone'>13668739613</Text>
                </View>
                <Text >云南省 昆明市 盘龙区 江滨西路51号 江滨西路51号 江滨西路51号 江滨西路51号</Text>
              </View>
              <View className='item-buttom-view'>
                <View className='box horizontal vbox'>
                <AtCheckbox selectedList={selectedList} options={[{value: 0, label: ''}]} onChange={this.chkHandleChange} />
                <Text className='flex' >默认地址</Text>
                <Text className='icon-account edith' onClick={this.onClickEdith.bind(this)}></Text>
                <Text className='icon-cancel detele' onClick={this.onClickDetele.bind(this)}></Text>
                </View>
              </View>
            </View>

            <AtButton className='address-add' onClick={this.onClickAdd.bind(this)}>添加收货地址</AtButton>
          </View>

        )
    }
}
export default Index
