import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text ,Image} from '@tarojs/components'
import { AtCheckbox, AtSwipeAction, AtInputNumber  } from 'taro-ui'
import './index.less'
import CartService from '../../services/cartService'
class Index extends Component{
    state = {
      selectedList: [],
      selectedAll:[],
      list:[],
      total:0
     }
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '购物车'
    }
    chkHandleChange = selectedList => {
        let tp_total=0;
        for (let i=0;i<selectedList.length;i++){
          tp_total += this.state.list[selectedList[i]].salePrice * this.state.list[selectedList[i]].goodsTotal
        }

        if (selectedList.length != this.state.list.length){
          //取消全选
          this.setState({selectedList:selectedList,total:tp_total,selectedAll:[]})
        }else{
          this.setState({selectedList:selectedList,total:tp_total,selectedAll:[1]})
        }

    }
    chkHandleAllChange = (value) => {
      if (value[0] == 1){//选择全选
        let tp_total=0;
        let tp_selectList=[]
          for (let i=0;i<this.state.list.length;i++){
            tp_total += this.state.list[i].salePrice *this.state.list[i].goodsTotal
            tp_selectList.push(i)
          }
          this.setState({selectedList:tp_selectList,total:tp_total,selectedAll:value})
      }else{
        let tp_total=0;
        let tp_selectList=[]
        this.setState({selectedList:tp_selectList,total:tp_total,selectedAll:value})
      }



    }
    handleChange = (index,value) =>{
      console.log(value)

      let tp_total=0;
        for (let i=0;i<this.state.selectedList.length;i++){
          if (this.state.selectedList[i] != index){
            tp_total += this.state.list[this.state.selectedList[i]].salePrice *this.state.list[this.state.selectedList[i]].goodsTotal
          }else{
            tp_total += this.state.list[this.state.selectedList[i]].salePrice * value
          }
        }

      this.state.list[index].goodsTotal = value
      this.state.total = tp_total
      this.forceUpdate()
    }

    async componentDidMount(){

      Taro.showLoading({title:'正在加载！！'})
      const res =await CartService.getAllCart({
        'currentPage':0,
        'countPerPage':10
        })
        Taro.hideLoading()

        if(res.data.RESP_CODE === '0000'){
          // debugger

        // debugger
          this.setState({list:res.data.DATA})
          Taro.showToast({title:'成功！',icon:'success',duration:2000})
        }else{
          Taro.showToast({title:'加载失败！',icon:'none',duration:2000})

        }

    }

    render(){
        const { selectedList ,list,total,selectedAll } = this.state
        return(
            <View className='cart-container box vertical'>
            {

              list.map((item,index)=>{
                let attr = []
                if (item.attrNames){
                  attr = item.attrNames.split(' ')
                }

                return (
            // "goodsImg": "/images/goodsImages/20181025094051879135.png",商品图标
            // "salePrice": 1750,//销售价格
            // "goodsTotal": 21,//商品数量
            // "cartId": 16,//购物车商品id
            // "typeName": "1105",//商品名称
            // "attrNames": "白色 4G",//商品属性
            // "skuId": 945//商品skuid
                  <View className='cart-content'>
                      <View className='panel box horizontal vbox'>
                          <AtCheckbox selectedList={selectedList} options={[{value: index, label: ''}]} onChange={this.chkHandleChange} />
                          <Image className='image-view' src={'https://newretail.bonc.com.cn'+item.goodsImg}></Image>
                          <View className='flex action'>
                              <AtSwipeAction isClose={true} autoClose={true} options={[{text: '删除', style: { color: '#FF4949', background: 'transparent' }}]}>
                                  <View className='box vertical'>
                                      <Text className='prod-name'>{item.typeName}</Text>
                                      <View>
                                      {
                                        attr.map((art_item,art_index)=>{
                                          return(
                                            <Text className='prod-tag'>{art_item}</Text>
                                            )
                                        })
                                      }
                                      </View>
                                      <View style='margin-right:20px;padding-bottom:15px;' className='box vbox horizontal'>
                                          <Text className='money flex'>{'¥'+item.salePrice}</Text>
                                          <AtInputNumber
                                              min={1}
                                              max={100}
                                              step={1}
                                              value={item.goodsTotal}
                                              onChange={this.handleChange.bind(this,index)}
                                              />
                                      </View>
                                  </View>
                              </AtSwipeAction>
                          </View>
                      </View>
                  </View>
                )
              })
            }
                <View className='footer-bar' style={{bottom: process.env.TARO_ENV === "weapp"?0:50}}>
                    <View className='footer-content box vbox'>
                        <View className='flex'>
                            <AtCheckbox selectedList={selectedAll} options={[{value: 1 , label: '全部'}]} onChange={this.chkHandleAllChange} />
                        </View>
                        <View>合计：<Text className='money'>￥{total}</Text></View>
                        <Text className='pay-btn'>结算</Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default Index
