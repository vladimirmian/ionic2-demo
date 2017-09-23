let Mock = require('mockjs')
var Random = Mock.Random;
// 首页—index 国内机票—flightsInland 国际机票预订—flightsInternational.book 国际机票查询 — flightsInternational.query 酒店预订—hotel 酒店详情—hoteldetail 火车票—train 待办事项—todo.list 待办详情—todo.detail 我的订单—order.list 订单详情—order.detail 我的报表—report.list 个人中心—person.info 企业管理—companyManage.employee 

let userInfo = function() {
    return Mock.mock({
        userInfo: {
            userId: Random.natural(1000, 3000), //用户ID
            userCnName: { //用户中文姓名
                firstName: Random.cfirst(), //姓
                lastName: Random.clast(), //名
            },
            userEnName: { //用户英文姓名
                firstName: Random.first(), //姓
                lastName: Random.last(), //名
            },
            birthDay: Random.date('yyyy-MM-dd'), //出生日期
            'credentialsInfo|5': [{ //证件信息
                'credentialsType|5': 1, //证件类型
                credentialsNum: () => {
                    return Random.id();
                },
                firstName: () => {
                    return Random.cfirst()
                }, //姓
                lastName: () => {
                    return Random.last()
                }, //名
                expiryDate: () => {
                    return Random.date('yyyy-MM-dd')
                }, //有效期
            }],
            vipNum: Random.natural(1000, 3000), //会员号
            mobile: Random.natural(10012345678, 90012345678), //手机号码
            email: Random.email(), //邮箱
            preference: [""], //偏好
            remark: '', //备注
            companyInfo: { //企业信息
                companyId: Random.natural(1000, 3000), //企业ID
                companyName: Random.cword(6) //企业名称
            },
            departmentId: Random.natural(1000, 3000), //部门ID
            costCenterId: Random.natural(1000, 3000), //成本中心ID
            departmentName: Random.cword(6), //部门名称 V0.4增加
            costCenterName: Random.cword(6), //成本中心名称 V0.4增加
            empNum: Random.natural(1000, 3000), //工号 V0.4增加
            sex: Random.natural(0, 1), //性别 0-男 1-女 V0.4增加<
            hasCredentials: Random.natural(0, 1), //是否存在证件 0-无 1-有 V0.4增加 
            menuList: [""], //菜单权限数组 
            　　　　　　
        }　
    });
}

module.exports = { userInfo };