'use strict';
const crypto = require('crypto');

const Controller = require('egg').Controller;



class PriceController extends Controller {
	async create() {
		this.ctx.validate({
			size: 'string',
			specification: 'string',
			type: 'string',
			price: 'string',
			warning: 'boolean',
			detail: {
				type: 'string',
				empty: true,
			}
		});
		let { size, specification, type, detail, price, warning } = this.ctx.request.body;
		let hasOne = await this.ctx.model.Price.findItem(size, specification, type);
		if (hasOne) {
			this.ctx.returnMsg('1001', '数据已存在', {});
			return false;
		}
		let result = await this.ctx.model.Price.addItem(size, specification, type, detail, price, warning);

		if (result) {
			this.ctx.success();
		} else {
			this.ctx.returnMsg('500', '添加数据出错', {});
		}

	};
	async del() {
		this.ctx.validate({
			id: 'number'
		});
		let { id } = this.ctx.request.body;
		let result = await this.ctx.model.Price.delItem(id);
		if (result) {
			this.ctx.success();
		} else {
			this.ctx.returnMsg('500', '删除数据出错', {});
		}

	};
	async update() {
		this.ctx.validate({
			id: 'number',
			detail: {
				type: 'string',
				empty: true,
			},
			price: 'string',
			warning: 'boolean'
		});
		let { id, detail, price, warning } = this.ctx.request.body;

		let hasOne = await this.ctx.model.Price.findItemById(id);

		if (hasOne) {
			let result = await this.ctx.model.Price.updateItem(id, detail, price, warning);
			if (result) {
				this.ctx.success();
			} else {
				this.ctx.returnMsg('500', '更新数据出错', {});
			}
		} else {
			this.ctx.returnMsg('0', '数据不存在', {});
		}



	};
	async findOne() {
		this.ctx.validate({
			id: 'string'
		});
		let { id } = this.ctx.request.body;
		let result = await this.ctx.model.Price.findItemById(id);
		if (result) {
			this.ctx.returnMsg('0', '成功', result);
		} else {
			this.ctx.returnMsg('500', '查询数据出错', {});
		}

	};

	async findAll() {
		let result = await this.ctx.model.Price.findAllItem();
		if (result) {
			this.ctx.returnMsg('0', '成功', {list: result, total: result.length});
		} else {
			this.ctx.returnMsg('500', '查询数据出错', {});
		}

	};

	async identity() {
		this.ctx.validate({
			code: 'string',
			encryptedData: 'string',
			iv: 'string'
		});
		let { code, encryptedData, iv } = this.ctx.request.body;
		let reqUrl = `${this.app.config.wxUrl}?appid=${this.app.config.appid}&secret=${this.app.config.secret}&js_code=${code}&grant_type=authorization_code`
		const result = await this.ctx.curl(reqUrl);
		if (result.status !== 200) {
			this.ctx.returnMsg(result.status, '微信服务器服务器错误', {data: result.data.toString()});
            return;
        }
		let resultData = JSON.parse(result.data.toString());
		console.log("===================resultData======================");
		console.log(resultData);
		let openid = resultData.openid;
		console.log("===================openid======================");
		console.log(openid);
		let token = this.app.jwt.sign({ openid: openid }, this.app.config.jwt.secret);
		this.ctx.returnMsg('0', '成功', {token});
	};

}

module.exports = PriceController;
