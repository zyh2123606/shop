import Request from '../utils/requestBase'

class IndexService extends Request{
    private base_url = 'https://newretail.bonc.com.cn/top_mall/api/salesWebToWoStore/'
    constructor(){
        super()
    }
    public initIndex = (data={}, config={}) => {
      let params={'accountId':32,'DATA':data,'deptId':258}
      // debugger
      return this.post(this.base_url+"index",params,config)
    }

}

export default new IndexService()
