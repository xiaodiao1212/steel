'use strict';
module.exports = app => {
	const { router, controller, middleware } = app;
	  const { checkSession } = middleware;
	/**
	 * @apiVersion 0.0.1
	 * @apiGroup Config
	 * @apiDescription 创建一个配置
	 * @api {POST} /price/create 创建一个新的配置
	 * @apiParam {String} mark 用户定义的唯一标识
	 * @apiParam {String} name 配置名称.
	 * @apiParam {String} description 配置的说明
	 * @apiParam {String} visibility 配置的可见性
	 * @apiParam {Number} parentId 配置的父节点id
	 * @apiSuccessExample {json} 请求成功:
	 * {"data":{},"error":{"returnCode":0,"returnMessage":"创建成功","returnUserMessage":"创建成功"}}
	 */
	router.post('/price/create', checkSession(), controller.price.create);
	router.post('/price/del', checkSession(), controller.price.del);
	router.post('/price/update', checkSession(), controller.price.update);
	router.post('/price/findOne', checkSession(), controller.price.findOne);
	router.post('/price/findAll', checkSession(), controller.price.findAll);
	router.post('/price/identity', controller.price.identity);
};
