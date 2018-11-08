import Request from '../utils/requestBase'

class CartService extends Request{
    private base_url = 'https://newretail.bonc.com.cn/top_mall/api/ShopCartController/'
    constructor(){
        super()
    }
    public getAllCart = (data={}, config={}) => {
      let params={'accountId':32,'DATA':data,'deptId':258}
      // debugger
      return this.post(this.base_url+"queryMemberMallCart",params,config)
    }
}

export default new CartService()
