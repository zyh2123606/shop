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
        "currentPage":0,
        "countPerPage":2,
        "fullname":"",
        "scope":100000

      }

      const res = await StoreService.getStore(param,{})
      Taro.hideLoading()
      if (res.data.RESP_CODE === '0000'){
        Taro.showToast({
          title: '成功',
          icon: 'success'
        })
        this.setState({deptList:res.data.DATA.deptList})
      }else{
        Taro.showToast({
          title: '失败',
          icon: 'none'
        })
      }


    }
    onChange (value) {
      this.setState({
        searchValue: value
      })
    }
    async onActionClick () {
      console.log('开始搜索')


      Taro.showLoading({title:'正在加载'})
      const lo_res = await LocationService.getLocation()
      let longitude = lo_res.longitude
      let latitude = lo_res.latitude

      let param={
        "deptIng":lo_res.longitude,
        "deptLat":lo_res.latitude,
        "currentPage":0,
        "countPerPage":2,
        "fullname":this.state.searchValue,
        "scope":100000

      }
      const res = await StoreService.getStore(param,{})
      Taro.hideLoading()
      if (res.data.RESP_CODE === '0000'){
        Taro.showToast({
          title: '成功',
          icon: 'success'
        })
        this.setState({deptList:res.data.DATA.deptList})
      }else{
        Taro.showToast({
          title: '失败',
          icon: 'none'
        })
      }
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
    async submitChooseStore(value){
      console.log("submitChooseStore==="+value)
      debugger
      Taro.showLoading({title:'正在加载'})
      const res = await StoreService.initStore({},{},this.state.deptList[this.state.selectedList[0]].depeId)
      Taro.hideLoading()
      if(res.data.RESP_CODE === '0000'){
        Taro.showToast({
          title: '成功',
          icon: 'success',
          duration:2000
        })
        setTimeout(function(){
          Taro.navigateBack()
         },2000)
      }else{
        Taro.showToast({
          title: '失败',
          icon: 'none'
        })
      }
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
              // "deptLat":"116.4961446153",
              // "province":"北京",
              // "distance":8759593.0,
              // "city":"北京",
              // "deptIng":"39.8076692016",
              // "district":"大兴",
              // "deptAddress":"北京市大兴区万源街1号",
              // "depeId":258,
              // "simplename":"Bluebird",
              // "fullname":"Bluebird"
              deptList.map((item,index)=>{
              return (
                <View className='items-view'>
                  <View className='item-view' >
                    <View className='box vbox top'>
                      <Text className = 'flex name'> {item.simplename} </Text>
                      <AtCheckbox selectedList={selectedList} options={[{value: index, label: ''},]} onChange={this.chkHandleChange} />
                    </View>
                    <View className='bottom'>
                      <Text className = 'address'>{item.deptAddress} {item.fullname} </Text>
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
