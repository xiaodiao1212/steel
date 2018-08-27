'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = appInfo => {
  const config = exports = {};
  config.sequelize = {
    dialect: 'mysql',
    database: 'steel',
    host: 'pluto_datapark-Mdb.inner.jiedaibao.com',
    port: '13308',
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
      port: 10000,
      hostname: '0.0.0.0',
    },
  };
  return config;
};
