import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, ScrollView, Swiper, SwiperItem } from '@tarojs/components'

// import './index.less'

class ProductCom extends Component {

  state = {
    data: {},
  }
  async componentDidMount() {



  }
  onClickChooseShop() {
  }



  render() {
    const { data } = this.props
    return (
      <View className='prod-panel'>
            <View className='pannel-title'>{data.columnName}</View>
            <View className='th-banner'></View>
            {
              data.mallRelation.map((mallItem, index) => {
                return (
                  <View className='prod-list'>
                    <View className='product'>
                      <Image className='prod-img' mode='widthFix' src={'https://newretail.bonc.com.cn' + mallItem.displayPic} />
                      <View className='info'>
                        <Text className='name'>{mallItem.displayName}</Text>
                        <Text className='price'>￥{mallItem.displayPrice}</Text>
                        <Text className='link'>立即购买</Text>
                      </View>
                    </View>
                  </View>
                )
              })
            }
          </View>
    )
  }
}
export default ProductCom
