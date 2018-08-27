'use strict';
const moment = require('moment');
module.exports = app => {
	const { STRING, INTEGER, DATE, BOOLEAN, NOW, fn, col } = app.Sequelize;
	const Price = app.model.define('price', {
		id: {
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			type: INTEGER,
		},
		size: {
			allowNull: false,
			type: STRING,
		},
		specification: {
			allowNull: false,
			type: STRING,
		},
		type: {
			allowNull: false,
			type: STRING,
		},
		detail: {
			allowNull: true,
			type: STRING,
		},
		price: {
			allowNull: false,
			type: STRING,
		},
		warning: {
			allowNull: false,
			defaultValue: false,
			type: BOOLEAN,
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
			tableName: 'price',
			underscored: true
		}
	);
	Price.addItem = async function (size, specification, type, detail, price, warning) {
		return await this.create({
			size,
			specification,
			type,
			detail,
			price,
			warning,
			is_deleted: false
		});
	};
	Price.delItem = async function (id) {
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
	Price.updateItem = async function (id, detail, price, warning) {
		return await this.update({
			detail,
			price,
			warning
		}, {
				where: {
					id,
					is_deleted: false,
				},
			}
		);
	};
	Price.findItemById = async function (id) {
		return app.getJsonData(await this.findOne({
				where: {
					id,
					is_deleted: false,
				},
			}
		));
	};
	Price.findItem = async function (size, specification, type) {
		return app.getJsonData(await this.findOne({
				where: {
					size,
					specification,
					type,
					is_deleted: false,
				},
			}
		));
	};
	Price.findAllItem = async function (is_deleted) {
		return app.getJsonData(await this.findAll({
				where: {
					is_deleted: false,
				},
			}
		));
	}
	return Price;
};
