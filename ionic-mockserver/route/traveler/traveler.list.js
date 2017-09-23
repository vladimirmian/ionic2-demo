let express = require('express');
let router = express.Router();
let Mock = require('mockjs')
var Random = Mock.Random;
let { constant, isEmptyObj, socketclient } = require('./../../shared/constant');
let { userInfo } = require('./mock/user.mock');


router.post('/', (req, res) => {
    console.log('===========登录信息' + new Date() + '===============');
    console.log(JSON.stringify(req.query));
    console.log('===========登录信息end===============');
    const cb = {
        status: 200,
        data: {
            token: Random.guid()
        }
    }
    res.status(constant.success).send(cb);
});



module.exports = router;