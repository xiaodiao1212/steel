'use strict';
const moment = require('moment');
module.exports = app => {
	const { STRING, INTEGER, DATE, BOOLEAN, NOW, fn, col } = app.Sequelize;
	const User = app.model.define('user', {
		id: {
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			type: INTEGER,
		},
		openid: {
			allowNull: false,
			type: STRING,
		},
		is_deleted: {
			allowNull: false,
			defaultValue: false,
			type: BOOLEAN,
		},
		created_at: {
			type: DATE,
			get() {
				return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss');
			},
		},
		updated_at: {
			type: DATE,
			get() {
				return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss');
			},
		},
	}, {
			tableName: 'user',
			underscored: true
		}
	);
	User.addItem = async function (openid) {
		return await this.create({
			openid,
			is_deleted: false
		});
	};
	User.delItemById = async function (id) {
		return await this.update({
			is_deleted: true,
		}, {
				where: {
					id,
					is_deleted: false,
				},
			}
		);
    };

    User.delItemByOpenid = async function (openid) {
		return await this.update({
			is_deleted: true,
		}, {
				where: {
					openid,
					is_deleted: false,
				},
			}
		);
    };

	User.findItemById = async function (id) {
		return app.getJsonData(await this.findOne({
				where: {
					id,
					is_deleted: false,
				},
			}
		));
    };

	User.findItemByOpenid = async function (openid) {
		return app.getJsonData(await this.findOne({
				where: {
					openid,
					is_deleted: false,
				},
			}
		));
	};
	User.findAllItem = async function (is_deleted) {
		return app.getJsonData(await this.findAll({
				where: {
					is_deleted: false,
				},
			}
		));
	}
	return User;
};
