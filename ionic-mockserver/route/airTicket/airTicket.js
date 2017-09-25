let express = require('express');
let router = express.Router();
let { constant, isEmptyObj, socketclient } = require('./../../shared/constant');
let { inland } = require('./mock/airTicket.mock');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.post('/inland', (req, res) => {
    console.log('===========查询机票列表' + new Date() + '===============');
    console.log(JSON.stringify(req.body));
    console.log('===========查询机票列表end===============');
    const cb = {
        status: 200,
        data: inland()
    }
    res.status(constant.success).send(cb);
});



module.exports = router;