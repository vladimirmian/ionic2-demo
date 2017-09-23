let Mock = require('mockjs')
var Random = Mock.Random;
// 首页—index 国内机票—flightsInland 国际机票预订—flightsInternational.book 国际机票查询 — flightsInternational.query 酒店预订—hotel 酒店详情—hoteldetail 火车票—train 待办事项—todo.list 待办详情—todo.detail 我的订单—order.list 订单详情—order.detail 我的报表—report.list 个人中心—person.info 企业管理—companyManage.employee 

let traveler = function() {
    return Mock.mock({
        total: 100,
        'traveler|10': [{
            userId: function() {
                return Random.natural(1000, 3000);
            },
            userName: function() {
                return Random.cname();
            },
            phone: function() {
                return Random.natural(10012345678, 90012345678);
            },
            sex: function() {
                return Random.natural(0, 1);
            },
            cosCenter: {
                id: function() {
                    return 'coscenter' + Random.natural(1000, 3000);
                },
                name: function() {
                    return Random.cword(2, 5) + '部';
                }
            },
            department: {
                id: function() {
                    return 'dep' + Random.natural(1000, 3000);
                },
                name: function() {
                    return Random.cword(2, 5) + '部';
                }
            },
            'certificate|5': [{
                firstName: function() {
                    return Random.cfirst();
                },
                lastName: function() {
                    return Random.clast();
                },
                'certificateType|+1': 0,
                certificateNumber: function() {
                    return Random.natural(10012345678, 90012345678);
                }
            }]
        }]
    });
}

module.exports = { traveler };