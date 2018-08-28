'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = appInfo => {
  const config = exports = {};
  config.sequelize = {
    dialect: 'mysql',
    database: 'steel',
    host: 'localhost',
    port: '3306',
    username: 'steel',
    password: 'diaodiao1212',
    timezone: '+08:00',
    // logging: true,
    operatorsAliases: {
      $and: Op.and,
      $or: Op.or,
      $eq: Op.eq,
      $gt: Op.gt,
      $lt: Op.lt,
      $lte: Op.lte,
      $like: Op.like,
    },
  };
  config.logger = {
    level: 'DEBUG',
    dir: '/data/logs/steel',
  };
  exports.cluster = {
    listen: {
      port: 9200,
      hostname: '127.0.0.1',
    },
  };
  return config;
};
