'use strict';
// exports.cors = {
//     // origin: 'http://100.66.155.4:4200',
//     // origin: 'http://127.0.0.1:4200',
//     allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
//     credentials: 'true',
// };
exports.secret = '960f5759ba9eb89cb44caf705d3dbc91';
exports.appid = 'wx973b108b0746a5c0';
exports.wxUrl = 'https://api.weixin.qq.com/sns/jscode2session';
exports.middleware = ['userCors'];
exports.jwt = {
    secret: "wx973b108b0746a5c0"
};
exports.checkUrl = ['/price/identity'];
exports.openids = ['ob8pF4-FcP9USH10D9Hg8gKW148M', 'ob8pF42NbsleU2GRS0AUpn54R2jk', 'ob8pF4wiNQ2ARewhJRyFLCJ-TAiw'];

exports.keys = 'session';

