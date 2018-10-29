
import Request from '../utils/requestBase'
import configStore from 'src/store';

class StoreService extends Request{
    private base_url = 'https://newretail.bonc.com.cn/top_mall/api/salesWebToWoStore/'
    constructor(){
        super()
    }
    public getStore = (data={}, config={}) => {
      let params={'accountId':10,'DATA':data}
      return this.post(this.base_url+"storeList",params,config)
    }
    public searchStore = (data={},config={}) => {
      let params={'accountId':10,'DATA':data}
      return this.post(this.base_url+"storeList",params,config)
    }

    public initStore = (data={},config={},deptId={}) => {
      debugger
      let params={'accountId':10,'DATA':data,deptId:deptId}
      return this.post(this.base_url+"initDept",params,config)
    }

}

export default new StoreService()
