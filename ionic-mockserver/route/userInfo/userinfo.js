let express = require('express');
let router = express.Router();
let { constant, isEmptyObj, socketclient } = require('./../../shared/constant');
let { userInfo } = require('./mock/user.mock');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/current', (req, res) => {
    console.log('===========当前用户信息查询' + new Date() + '===============');
    console.log(JSON.stringify(req.body));
    console.log('===========当前用户信息查询end===============');
    const cb = {
        status: 200,
        data: userInfo()
    }
    res.status(constant.success).send(cb);
});



module.exports = router;