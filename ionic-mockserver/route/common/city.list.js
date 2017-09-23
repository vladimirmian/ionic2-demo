let express = require('express');
let router = express.Router();
let { constant, isEmptyObj, socketclient } = require('./../../shared/constant');
let { city } = require('./mock/citylist.mock.js');
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/citylist', (req, res) => {
    console.log('===========查询城市列表' + new Date() + '===============');
    console.log(JSON.stringify(req.body));
    console.log('===========查询城市列表end===============');
    const cb = {
        status: 200,
        data: city()
    }
    res.status(constant.success).send(cb);
});



module.exports = router;