let Mock = require('mockjs')
var Random = Mock.Random;

function air() {
    return Random.cword(5, 7) + '公司'
}
let inland = function() {
    return Mock.mock({
        total: 50,
        'inlandAirTicket|50': [{ //正常国内机票集合
            flightId: function() {
                return Random.natural(1000, 3000);
            }, //航班ID
            flightNum: function() {
                return Random.word(2, 3).toUpperCase() + Random.natural(1000, 3000);
            }, //航班号
            flightType: function() {
                return Random.cword(2, 5).toUpperCase() + '机';
            }, //飞机型号
            'airLineCompany|5': [function() {
                return Random.cword(5, 7) + '公司'
            }], //航空公司
            agreement: function() {
                return Random.boolean()
            }, //是否协议价 true/false
            codeShare: function() {
                return Random.word(2, 5) + Random.natural(1000, 3000);
            }, //共享航班(例:ZH9010)
            flightInformation: { //飞行信息
                takeOffTime: function() {
                    return Random.time('HH:mm:ss');
                }, //起飞时间HH:mm
                arrivalTime: function() {
                    return Random.time('HH:mm:ss');
                }, //到达时间HH:mm
                'takeOffPlace|5': [function() {
                    return Random.cword(5, 7) + '公司'
                }], //出发地-机场
                'arrivalPlace|5': [function() {
                    return Random.cword(5, 7) + '公司'
                }], //到达地-机场
                spendTime: function() {
                        return Random.natural(100000, 300000);
                    } //飞行时长，单位秒
            },
            transferInfo: [], //中转信息，为空时表示直达
            price: function() {
                return Random.natural(100000, 300000);
            }, //价格
            'cabinInfo|5': [{ //舱位信息
                airTicketId: function() {
                    return 'ca' + Random.natural(100000, 300000);
                }, //机票ID
                cabinType: function() {
                    return Random.word().toUpperCase();
                }, //舱位类型
                isRecommend: function() {
                    return Random.boolean()
                }, //是否推荐
                lastTicket: function() {
                    return Random.natural(100, 300);
                }, //剩余票数
                discount: function() {
                    return Random.float(0, 1);
                }, //折扣信息
                price: function() {
                    return Random.float(100, 300);
                }, //舱位价格
                cabinCode: function() {
                    return Random.cword(1, 3) + '舱位';
                }, //正规舱位代码(Y W)
                changePolicy: "", // 退改规则
                fuelCharge: function() {
                    return Random.float(100, 300);
                }, //燃油费
                airportCharge: function() {
                    return Random.float(100, 300);
                }, //机场建设费
                breachCase: "", //违规原因，为空时表示未违规
                account: function() {
                    return Random.boolean()
                }, //是否协议价
            }]
        }]
    });
}

module.exports = { inland };