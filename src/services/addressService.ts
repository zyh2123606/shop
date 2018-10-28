import Request from '../utils/requestBase'
import configStore from 'src/store';

class AddressService extends Request{
    private base_url = 'https://newretail.bonc.com.cn/top_mall/api/salesWebToWoStore/'
    constructor(){
        super()
    }
    public getAallAddress = (data={}, config={}) => {
      let params={'accountId':10,'DATA':data}
      return this.post(this.base_url+"queryMemberAddress",params,config)
    }
    public uapdateAddress = (data={},config={}) => {
      let params={'accountId':10,'DATA':data}
      return this.post(this.base_url+"updateMemberAddress",params,config)
    }
    public addAddress = (data={},config={}) => {
      let params={'accountId':10,'DATA':data}
      return this.post(this.base_url+"saveMemberAddress",params,config)
    }
    public deleteAddress = (data={},config={}) => {
      let params={'accountId':10,'DATA':data}
      return this.post(this.base_url+"removeMemberAddress",params,config)
    }
}

export default new AddressService()
