import Request from '../utils/requestBase'

class UserService extends Request{
    private base_url = ''
    constructor(){
        super()
    }
    public getUserInfo = (data={}, config={}) => {
        
    }
}

export default new UserService()