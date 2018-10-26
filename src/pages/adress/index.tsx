import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import { AtCheckbox } from 'taro-ui'
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

    chkHandleChange = selectedList => {
      this.setState({ selectedList })
    }
    onClickEdith = () =>{
      console.log('点击编辑')
    }
    onClickDetele= () =>{
      console.log('点击删除')
    }
    render(){
      const { selectedList } = this.state
        return(
          <View className='adress-container box vertical'>
            <View className='item-view'>
              <View className='item-top-view'>
                <View className='box'>
                  <Text className='flex'>张小红</Text>
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
          </View>

        )
    }
}
export default Index
