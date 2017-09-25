let express = require('express');
let app = express();
let server = require('http').createServer(app);
let bodyParser = require('body-parser');
let { socketclient, socketData } = require('./shared/constant');
let io = require('socket.io')(server, {
    serveClient: false,
    wsEngine: 'ws' // uws is not supported since it is a native module
});
const user = require('./route/userInfo/userinfo');
const login = require('./route/userInfo/login');
const common = require('./route/common/city.list');
const traveler = require('./route/traveler/traveler');
const airTicket = require('./route/airTicket/airTicket');
app.use('/login', login);
app.use('/user', user);
app.use('/common', common);
app.use('/traveler', traveler);
app.use('/airTicket', airTicket);
/**
 * 跨域处理
 */
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.urlencoded({
    extended: false
})); //extended为false表示使用querystring来解析数据，这是URL-encoded解析器
app.use(bodyParser.json({
    type: 'application/json'
}));

// parse various different custom JSON types as JSON   
// parse some custom thing into a Buffer   
app.use(bodyParser.raw({
    type: 'application/vnd.custom-type'
}));
// parse an HTML body into a string   
app.use(bodyParser.text({
    type: 'text/html'
}));
// socket 链接池
io.on('connect', function(socket) {
    console.log('client connect');
    // 上面这个时间是服务器自己发出来的
    socket.on('hi', function(data) {
        // 下面这个是发出去给浏览器的
        // let data = socketData()
        socket.broadcast.emit('hello', socketData());
    });
    socket.on('trainbook', function(data) {
        console.log('adasd')
        socket.broadcast.emit('trainbook');
    });
});

io.on('disconnect', (socket) => {
    console.log('socket disconnect')
    socket.on('disconnect', _ => {
        socket.broadcast.emit('disconnect');
    });
});



server.listen(6666, _ => {
    console.log('server listen on 6666');
});