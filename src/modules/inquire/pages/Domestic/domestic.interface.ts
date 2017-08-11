let inlandParams = {
    departCity: "",//出发城市，必填
    arriveCity: "",//到达城市，类型为往返时必填
    departDate: "",//出发日期，13位时间戳 必填
    arriveDate:"",//出发日期，13位时间戳 必填
    tripType: "",//出行类型，1-因公,2-因私
    tripPersons: [{//出行人员信息,必填信息
        id: "",//出行人ID
        personType: "",//人员类型，1-系统里的出行人，2-临时出行人
        credentialsType: "",//证件类型，1-身份证,2-护照。。。
        credentialsNum: "",//证件号码
        userName: "",//用户姓名
        companyId: "",//企业ID
        companyName: ""//企业名称
    }],
    takeOffTime: [{//起飞时段,字段为空时取全天时间
        startTime: "",//起始时间，HH:mm
        endTime: "",//结束时间，HH:mm
    }],
    airLineCompany: "",//航空公司，为空时取所有航空公司
    takeOffAirport: "",//起飞机场
    arriveAirport: "",//到达机场
    cabin: "",//舱位,为空时不限
    pageIndex: 1,//当前页数
    pageSize: 10,//每页条数
    sortInfo: [{
        type: "1",//1-起飞时间，2价格
        sort: "desc"//desc-逆序，asc-正序
    }]
}
export { inlandParams }