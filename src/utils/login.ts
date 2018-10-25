import Request from '../utils/requestBase'
import Taro, { Component, Config } from '@tarojs/taro'

class LoginServices extends Request{
    private base_url = ''
    constructor(){
        super()
    }
    public mem_login = async() =>{
      const res = await Taro.login()
      if (res.code){
        console.log('微信登陆成功')
        const net_res = await this.post("https://iretail.bonc.com.cn/api/login/"+res.code,{},{})

        if (net_res.data.code === '0000'){
          console.log('后台登陆网络请求失败')
          Taro.setStorageSync('header',net_res.header['Set-Cookie'])
          Taro.setStorageSync('memId',net_res.data.data.memId)
          Taro.setStorageSync('sessionId',net_res.data.data.sessionId)
        }else{
          console.log('后台登陆失败')
          Taro.showToast({title:net_res.data.msg,icon:'none'})
        }
        return net_res.data
      }else{
        console.log('微信登陆失败')
        Taro.showToast({title:'微信登陆失败',icon:'none'})
      }

      return res
    }
    public mem_update = async() =>{
      let userInfo = JSON.parse(Taro.getStorageSync('userInfo'))
      const up_res = await this.post('https://iretail.bonc.com.cn/api/mem/update',{memId:userInfo.memId,nickName:userInfo.nickName,avatarUrl:userInfo.avatarUrl},{})

      if (up_res.data.code != '0000'){
        Taro.showToast({title:up_res.data.msg,icon:'none'})
      }
      return up_res
    }

    public queryUsreInfo = async() => {
        Taro.showLoading({title:'正在努力加载！'})
        let that = this
        console.log(Taro.getStorageSync('memId')+'\n'+Taro.getStorageSync('nickName')+'\n' +Taro.getStorageSync('avatarUrl')+'\n')
        if (!Taro.getStorageSync('memId')|| !Taro.getStorageSync('nickName') || !Taro.getStorageSync('avatarUrl')){
          that.mem_login()
            .then(scuuess => {
                if (scuuess.code === '0000'){
                  const up_res = that.mem_update()
                  Taro.hideLoading()
                  return up_res
                }else{
                  Taro.hideLoading()
                  return scuuess
                }

            }).catch(fiale =>{
                Taro.hideLoading()
                return fiale
            })
        }else{

          const res =  that.mem_update()
          Taro.hideLoading()
          return res

        }
    }
}

export default new LoginServices()
