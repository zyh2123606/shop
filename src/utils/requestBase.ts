import Taro from '@tarojs/taro'

class RequestBase{
    private httpRequest: Function = () => {}
    private defaultConfig = {}
    constructor(){
        this.httpRequest = Taro.request
        this.defaultConfig = {
            header: {
                'content-type': 'application/json',
                'token': Taro.getStorageSync('token')
            },
            success: res => {
                const { statusCode, data } = res
                let message = `位置错误${statusCode}`
                let isSuccess = true
                switch(statusCode){
                    case 200: 
                        isSuccess = true
                        break
                    case 404:
                        message = '请求地址不存在404'
                        isSuccess = false
                        break
                    case 500:
                        message = '服务器内部错误500'
                        isSuccess = false
                        break
                    default:
                        isSuccess = false
                        break
                }
                if(!isSuccess)
                    return Taro.showToast({icon: 'none', title: message})
            },
            fail: res => {},
            complete: res => {}
        }
    }
    public post(url: string, data: {}, config: {}){
        return this.httpRequest({url, method: 'POST', data, ...this.defaultConfig, ...config})
    }
    public get(url: string, data={}, config: {}){
        return this.httpRequest({url, method: 'GET', data, ...this.defaultConfig, ...config}) 
    }
}

export default RequestBase