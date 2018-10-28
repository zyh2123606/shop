import Request from '../utils/requestBase'

class UserService extends Request{
    private base_url = 'https://newretail.bonc.com.cn/top_mall/api/salesWebToWoStore/'
    constructor(){
        super()
    }
    public getUserInfo = (data={}, config={}) => {

    }
}

export default new UserService()
