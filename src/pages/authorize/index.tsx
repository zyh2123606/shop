import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.less'
import Login from'../../utils/login'

class Index extends Component{
    static options = {
        addGlobalClass: true
    }
    config: Config = {
        navigationBarTitleText: '授权'
    }
    componentWillMount(){
        // 查看是否授权
        Taro.showLoading({title:'正在努力加载！'})
        Taro.getSetting({
          success: function(res) {
            if (res.authSetting['scope.userInfo']) {

                Taro.getUserInfo().then(res => {
                    // 获取用户信息成功

                    //存起用户信息
                    Taro.setStorage({key:'userInfo',data:JSON.stringify(res.userInfo)})
                    //登陆和更新用户信息
                    Login.queryUsreInfo().then(qu_res=>{
                        if (qu_res.code === '0000'){
                            //登陆成功后的操作
                        }else{

                        }
                    })
                }).catch(res =>{
                    //获取用户信息失败
                    console.log(res)
                })
            }else{
                console.log('未授权')
            }
          }
        })

    }
    bindGetUserInfo(e){
        if (e.detail.userInfo){
          console.log('点击了授权成功')
            Taro.setStorageSync('userInfo',JSON.stringify(e.detail.userInfo))
            if (!Taro.getStorageSync('memId')){
              Login.queryUsreInfo()
              .then(success =>{
                if(success.code === '0000'){
                  //登陆成功后的操作
                }
              })
              .catch(failer =>{

              })
            }else{
              Login.mem_update()
              .then(success =>{
                if(success.code === '0000'){
                  //登陆成功后的操作
                }
              })
              .catch(failer =>{

              })
            }
        }else{
            Taro.showModal({
                title: '警告',
                content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                showCancel: false,
                confirmText: '返回授权'
              }).then(res=>{
                if (res.confirm) {
                  console.log('用户点击了“返回授权”')
                }
              })
        }

    }
    render(){
        return(
            <View>
                <Text>授权</Text>
                <AtButton openType='getUserInfo' size='normal' onGetUserInfo={this.bindGetUserInfo.bind(this)} >授权按钮</AtButton>
            </View>
        )
    }
}
export default Index
