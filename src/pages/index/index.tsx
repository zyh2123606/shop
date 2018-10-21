import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import Logo from '../../images/logo.png'
import TypeProd from '../../images/type_img.png'
import './index.less'
import Service from '../../services/userService'

class Index extends Component{
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '首页'
    }
    async componentDidMount(){
        
    }
    render(){
        return(
            <View className='container'>
                <View className='header'>
                    <View className='at-row at-row__align--center'>
                        <View className='at-col'>
                            <Image className='logo-sty' mode='widthFix' src={Logo} />
                        </View>
                        <View>
                            <View className='at-row at-row__align--center'>
                                <Text className='arrow-txt'>选择门店</Text>
                                <Text className='arrow-right'></Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='type-banner'>
                    <View className='banner-inner'></View>
                </View>
                <View className='prod-panel'>
                    <View className='pannel-title'>商品类型</View>
                    <ScrollView
                        className='scroll-view'
                        scrollX
                        scrollWithAnimation
                        scrollLeft={0}>
                        <View id='A' className='prod-item'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <Text className='prod-name'>手机</Text>
                        </View>
                        <View id='A' className='prod-item'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <Text className='prod-name'>手机</Text>
                        </View><View id='A' className='prod-item'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <Text className='prod-name'>手机</Text>
                        </View><View id='A' className='prod-item'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <Text className='prod-name'>手机</Text>
                        </View><View id='A' className='prod-item'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <Text className='prod-name'>手机</Text>
                        </View>
                    </ScrollView>
                </View>
                <View className='prod-panel'>
                    <View className='pannel-title'>特惠专区</View>
                    <View className='th-banner'></View>
                    <View className='prod-list'>
                        <View className='product'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <View className='info'>
                                <Text className='name'>蓝牙耳机</Text>
                                <Text className='price'>￥89.00</Text>
                                <Text className='link'>立即购买</Text>
                            </View>
                        </View>
                        <View className='product'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <View className='info'>
                                <Text className='name'>蓝牙耳机</Text>
                                <Text className='price'>￥89.00</Text>
                                <Text className='link'>立即购买</Text>
                            </View>
                        </View>
                        <View className='product'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <View className='info'>
                                <Text className='name'>蓝牙耳机</Text>
                                <Text className='price'>￥89.00</Text>
                                <Text className='link-normal'>立即预约</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='prod-panel'>
                    <View className='pannel-title'>热门商品</View>
                    <View className='hot-banner'></View>
                    <View className='prod-list'>
                        <View className='product'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <View className='info'>
                                <Text className='name'>蓝牙耳机</Text>
                                <Text className='price'>￥89.00</Text>
                                <Text className='link'>立即购买</Text>
                            </View>
                        </View>
                        <View className='product'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <View className='info'>
                                <Text className='name'>蓝牙耳机</Text>
                                <Text className='price'>￥89.00</Text>
                                <Text className='link'>立即购买</Text>
                            </View>
                        </View>
                        <View className='product'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <View className='info'>
                                <Text className='name'>蓝牙耳机</Text>
                                <Text className='price'>￥89.00</Text>
                                <Text className='link-normal'>立即预约</Text>
                            </View>
                        </View>
                        <View className='product'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <View className='info'>
                                <Text className='name'>蓝牙耳机</Text>
                                <Text className='price'>￥89.00</Text>
                                <Text className='link-normal'>立即预约</Text>
                            </View>
                        </View>
                        <View className='product'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <View className='info'>
                                <Text className='name'>蓝牙耳机</Text>
                                <Text className='price'>￥89.00</Text>
                                <Text className='link-normal'>立即预约</Text>
                            </View>
                        </View>
                        <View className='product'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <View className='info'>
                                <Text className='name'>蓝牙耳机</Text>
                                <Text className='price'>￥89.00</Text>
                                <Text className='link-normal'>立即预约</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='prod-panel' style='padding-bottom: 20px;'>
                    <View className='pannel-title'>新品上架</View>
                    <View className='new-banner'></View>
                    <View className='prod-list'>
                        <View className='product'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <View className='info'>
                                <Text className='name'>蓝牙耳机</Text>
                                <Text className='price'>￥89.00</Text>
                                <Text className='link'>立即购买</Text>
                            </View>
                        </View>
                        <View className='product'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <View className='info'>
                                <Text className='name'>蓝牙耳机</Text>
                                <Text className='price'>￥89.00</Text>
                                <Text className='link'>立即购买</Text>
                            </View>
                        </View>
                        <View className='product'>
                            <Image className='prod-img' mode='widthFix' src={TypeProd} />
                            <View className='info'>
                                <Text className='name'>蓝牙耳机</Text>
                                <Text className='price'>￥89.00</Text>
                                <Text className='link-normal'>立即预约</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
export default Index