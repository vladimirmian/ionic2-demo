let Mock = require('mockjs')
var Random = Mock.Random;
let constant = {
    'success': 200,
    'nocontent': 204,
    'nofound': 404,
    'Forbidden': 403,
    'NotAllowed': 405,
    'servererror': 500,

}
let isEmptyObj = function(obj) {
    for (var name in obj) {
        return false;
    }
    return true;
};

let socketclient = require('socket.io-client')('http://localhost:3000');
let socketData = function() {
    return Mock.mock({
        'data': {
            msg: '出票成功',
            orderInfo: {
                orderId: Random.integer(1000, 9999),
                orderNum: 'OR' + Random.integer(1000, 9999),
                orderDate: Random.date('yyyy-MM-dd'),
                totalAmount: Random.integer(1000, 9999), //订单总价
                payAmount: Random.integer(1000, 9999), //支付总价
                orderStatus: Random.integer(1, 10), // 0-未提交审批/待支付金额payAmount>0_待支付 1-待审批 3-待处理(审批完成) 4-待处理(因私支付自动出票-待处理)(因公支付不需要审批自动出票-待处理) 6-已完成(所有子产品登帐完成) 7-审批驳回
            },
            productInfo: { // 产品信息，没有就给空
                airTicket: {
                    departCity: "", //出发城市
                    arriveCity: "", //到达城市
                    takeOffTime: "" //起飞时间
                },
                hotel: {
                    cityName: "", //城市名称
                    hotelName: "", //酒店名称
                    checkInDate: "" //入住日期
                },
                railway: {
                    railwayNum: 'G' + Random.integer(2000, 3000),
                    ticketNum: Random.integer(200000, 300000),
                    departStation: Random.city(), //出发站点
                    arriveStation: Random.city(), //到达站点
                    departDate: Random.date('yyyy-MM-dd HH:MM'), //出发日期 yyyy-MM-dd
                    departTime: Random.time('HH:mm') //出发时间 HH:mm
                }
            },
            tripPerson: Random.csentence(10, 16)
        }
    })
}

module.exports = { constant, isEmptyObj, socketclient, socketData };