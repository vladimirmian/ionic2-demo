let express = require('express');
let router = express.Router();
let { constant, isEmptyObj, socketclient } = require('./../../shared/constant');
let { traveler } = require('./mock/traveler.mock');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/list', (req, res) => {
    console.log('===========查询出行人列表' + new Date() + '===============');
    console.log(JSON.stringify(req.body));
    console.log('===========查询出行人列表end===============');
    const cb = {
        status: 200,
        data: traveler()
    }
    res.status(constant.success).send(cb);
});



module.exports = router;