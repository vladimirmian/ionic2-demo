let Mock = require('mockjs')
var Random = Mock.Random;
let city = function() {
    return Mock.mock({
        'cityList|100': [{
            'id|+1': 1,
            code: function() {
                return Random.first(3);
            },
            name: function() {
                return Random.county();
            }
        }]
    });
}
module.exports = { city };