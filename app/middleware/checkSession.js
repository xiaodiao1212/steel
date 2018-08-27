'use strict';
module.exports = (app) => {
    return async function checkSession(ctx, next) {
        let token = ctx.request.body.token;
        let openid = '';
        try {
            console.log("开始");
            console.log(ctx.app.jwt.verify(token, ctx.app.config.jwt.secre));
            console.log('结束');
			openid = ctx.app.jwt.verify(token, ctx.app.config.jwt.secre).openid;
		} catch (error) {
            console.log(error);
			ctx.returnMsg('500', '解析token出错', {});
			return;
        }
        console.log(openid);
        if (!(ctx.app.config.openids.includes(openid))) {
            ctx.returnMsg('502', 'token权限校验不通过', {});
			return;
        }
        await next();
    };
};