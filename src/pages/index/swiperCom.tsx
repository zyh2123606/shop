import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, ScrollView, Swiper, SwiperItem } from '@tarojs/components'

import './index.less'

class SwiperCom extends Component {

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
      <View className='type-banner'>
            <Swiper className='banner-inner'>
              {
                data.mallRelation.map((mallItem, index) => {
                  return (
                    <SwiperItem>
                      <View className='banner-inner' >
                        <Image className='image-view' src={'https://newretail.bonc.com.cn' + mallItem.displayPic}></Image>
                      </View>
                    </SwiperItem>
                  )

                })
              }
            </Swiper>
      </View>
    )
  }
}
export default SwiperCom
