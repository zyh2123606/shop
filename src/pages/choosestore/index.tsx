import Taro, { Component, Config } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import {  AtButton ,AtSearchBar,AtCheckbox,AtRadio} from 'taro-ui'
import './index.less'

class Index extends Component{
  state = {
    searchValue: '',
    selectedList: []

  }
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '附近门店'
    }

    constructor () {
      super(...arguments)

    }

    componentWillMount(){

    }
    onChange (value) {
      this.setState({
        searchValue: value
      })
    }
    onActionClick () {
      console.log('开始搜索')
    }
    chkHandleChange = value =>{
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
    submitChooseStore(value){
      console.log("submitChooseStore==="+value)
    }


    render(){
      const { selectedList } = this.state

        return(
          <View className='choose-store-container box vertical'>
            <View className='search-view'>
            <AtSearchBar
            showActionButton
            value={this.state.searchValue}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
            />
            </View>
            <View className='items-view'>
              <View className='item-view' >
                <View className='box vbox top'>
                  <Text className = 'flex name'> 上海联通江苏路营业厅 </Text>
                  <AtCheckbox selectedList={selectedList} options={[{value: 0, label: ''},]} onChange={this.chkHandleChange} />
                </View>
                <View className='bottom'>
                  <Text className = 'address'>云南省 昆明市 五华区 滨江西路58号 上海联通江苏路营业厅 </Text>
                </View>
              </View>
              <View className='item-view' >
                <View className='box vbox top'>
                  <Text className = 'flex name'> 上海联通江苏路营业厅 v1 </Text>
                  <AtCheckbox selectedList={selectedList} options={[{value: 1, label: ''}]} onChange={this.chkHandleChange} />
                </View>
                <View className='bottom'>
                  <Text className = 'address'>云南省 昆明市 五华区 滨江西路58号 上海联通江苏路营业厅 v1 </Text>
                </View>
              </View>
              <View className='item-view' >
                <View className='box vbox top'>
                  <Text className = 'flex name'> 上海联通江苏路营业厅 v2 </Text>
                  <AtCheckbox selectedList={selectedList} options={[{value: 2, label: ''}]} onChange={this.chkHandleChange} />
                </View>
                <View className='bottom'>
                  <Text className = 'address'>云南省 昆明市 五华区 滨江西路58号 上海联通江苏路营业厅 v2 </Text>
                </View>
              </View>
            </View>
            <AtButton className='choose-store-submit' onClick={this.submitChooseStore.bind(this)}>确定</AtButton>
          </View>

        )
    }
}
export default Index
