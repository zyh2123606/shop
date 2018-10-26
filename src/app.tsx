import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}
const store = configStore()
class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/cart/index',
      'pages/account/index',
      'pages/authorize/index',
      'pages/signUp/index',
      'pages/adress/index',
      'pages/addadress/index',
      'pages/member/index',
      'pages/redpackets/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '店铺',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: '#ffffff',
      selectedColor: '#FF8E44',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: 'images/home.png',
          text: '首页',
          selectedIconPath: 'images/home_1.png'
        },
        {
          pagePath: 'pages/cart/index',
          iconPath: 'images/car.png',
          text: '购物车',
          selectedIconPath: 'images/car_1.png'
        },
        {
          pagePath: 'pages/account/index',
          iconPath: 'images/account.png',
          text: '我的',
          selectedIconPath: 'images/account_1.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
