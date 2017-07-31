let userinfo = {
    userId: "",//用户ID
    userCnName: {//用户中文姓名
        firstＮame: "",//姓
        lastName: "",//名
    },
    userEnName: {//用户英文姓名
        firstＮame: "",//姓
        lastName: "",//名
    },
    birthDay: "",//出生日期
    credentialsInfo: [{//证件信息
        credentialsType: "",//证件类型
        credentialsNum: "",//证件号码
        firstＮame: "",//姓
        lastName: "",//名
        expiryDate: ""//有效期
    }],
    vipNum: "",//会员号
    mobile: "",//手机号码
    email: "",//邮箱
    preference: [""],//偏好
    remark: "",//备注
    companyInfo: {//企业信息
        companyId: "",//企业ID
        companyName: ""//企业名称
    },
    departmentId: "",//部门ID
    costCenterId: "",//成本中心ID
    departmentName: "",//部门名称 V0.4增加
    costCenterName: "",//成本中心名称 V0.4增加
    empNum: "",//工号 V0.4增加
    sex: "",//性别 0-男 1-女 V0.4增加<
    hasCredentials: "",//是否存在证件 0-无 1-有 V0.4增加 
    menuList: [],//菜单权限数组 首页—index 国内机票—flightsInland 国际机票预订—flightsInternational.book 国际机票查询 — flightsInternational.query 酒店预订—hotel 酒店详情—hoteldetail 火车票—train 待办事项—todo.list 待办详情—todo.detail 我的订单—order.list 订单详情—order.detail 我的报表—report.list 个人中心—person.info 企业管理—companyManage.employee 
}
export { userinfo }