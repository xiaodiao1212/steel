'use strict';
module.exports = () => {
    return async function userCors(ctx, next) {
        ctx.set('Access-Control-Allow-Origin', ctx.request.headers.origin);
        ctx.set('Access-Control-Allow-Credentials', true); // 是否支持cookie跨域
        ctx.set('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
        ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS,PATCH');
        ctx.set('Access-Control-Max-Age', '1728000'); // cors预检请求的有效期（单位秒） 20天
        ctx.status = 200;
        await next();
    };
}