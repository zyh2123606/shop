import Taro, { Component, Config } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import {  AtButton ,AtSearchBar,AtCheckbox} from 'taro-ui'
import './index.less'

import LocationService from '../../utils/location'
import StoreService from  '../../services/storeService'
class Index extends Component{
  state = {
    searchValue: '',
    selectedList: [],
    deptList:[]

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
    async componentDidMount(){
      Taro.showLoading({title:'正在加载'})
      const lo_res = await LocationService.getLocation()
      let longitude = lo_res.longitude
      let latitude = lo_res.latitude

      let param={
        "deptIng":lo_res.longitude,
        "deptLat":lo_res.latitude,
        "currentPage":"1",
        "countPerPage":"10",
        "fullname":""
      }
      debugger
      const res = await StoreService.getStore(param,{})
      debugger
      Taro.hideLoading;
      setTimeout(function(){
        Taro.hideLoading()
      },2000)

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
      const { selectedList ,deptList} = this.state

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

            {
              deptList.map((item,index)=>{
              return (
                <View className='items-view'>
                  <View className='item-view' >
                    <View className='box vbox top'>
                      <Text className = 'flex name'> item.simplename </Text>
                      <AtCheckbox selectedList={selectedList} options={[{value: 0, label: ''},]} onChange={this.chkHandleChange} />
                    </View>
                    <View className='bottom'>
                      <Text className = 'address'>item.fullname </Text>
                    </View>
                  </View>
                </View>)
              })
            }
            <AtButton className='choose-store-submit' onClick={this.submitChooseStore.bind(this)}>确定</AtButton>
          </View>

        )
    }
}
export default Index
