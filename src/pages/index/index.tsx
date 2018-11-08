import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, ScrollView, Swiper, SwiperItem } from '@tarojs/components'
import Logo from '../../images/logo.png'
import './index.less'

import LocationService from '../../utils/location'
import IndexService from '../../services/indexService'
import SwiperCom from './swiperCom'
import ProductCom from './productCom'

class Index extends Component {
  static options = {
    addGlobalClass: true
  }
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    data: [],
  }
  async componentDidMount() {
    const lo_res = await LocationService.getLocation()
    const res = await IndexService.initIndex()

    this.setState({ data: res.data.DATA })
  }
  onClickChooseShop() {
    Taro.navigateTo({ url: '/pages/choosestore/index' })
  }

  render() {
    const { data } = this.state
    const listItems = data.map((item, index) => {
      return (item.columnName === '轮播' ? <View className='type-banner'>
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
        : <View className='prod-panel'>
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
        </View>)
    })
    return (
      <View className='index-container box vertical'>
        <View className='header'>
          <View className='box horizontal vbox'>
            <View className='flex'>
              <Image className='logo-sty' mode='widthFix' src={Logo} />
            </View>
            <View className='box horizontal vbox' style='font-size:16px;'>
              <Text className='arrow-txt' onClick={this.onClickChooseShop.bind(this)} >选择门店</Text>
              <Text className='arrow-right'></Text>
            </View>
          </View>
        </View>
        {data.map((item, index) => {
          return (item.columnName === '轮播'
            ? <View className='type-banner'>
              <Swiper className='banner-inner'>
                {
                  item.mallRelation.map((mallItem, index) => {
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
            : <View className='prod-panel'>
              <View className='pannel-title'>{item.columnName}</View>
              <View className='th-banner'></View>
              {
                item.mallRelation.map((mallItem, index) => {
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
            </View>)
        })}
      </View>
    )
  }
}
export default Index
