import Request from '../utils/requestBase'

class MemberService extends Request{
    private base_url = 'https://newretail.bonc.com.cn/top_mall/api/MemberMallController/'
    constructor(){
        super()
    }
    //获取所有会员信息
    public getAllMember = (data={}, config={}) => {
      let params={'accountId':10,'DATA':data,'deptId':258}
      return this.post(this.base_url+"queryMemberBasicInfoByDeptIdAndTelnum",params,config)

    }
    //添加会员
    public addMember = (data={}, config={}) => {
      let params={'accountId':10,'DATA':data,'deptId':258}
      return this.post(this.base_url+"saveMemberBasicInfo",params,config)
    }
    //更新会员信息
    public updateMember = (data={}, config={}) => {
      let params={'accountId':10,'DATA':data,'deptId':258}
      return this.post(this.base_url+"changeMemberBasicInfo",params,config)


    }
    //会员红包查询
    public getAllRedTicket = (data={}, config={}) => {
      let params={'accountId':10,'DATA':data,'deptId':258}
      return this.post(this.base_url+"queryRedTicket",params,config)
    }
}

export default new MemberService()
