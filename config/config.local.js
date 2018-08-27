const Sequelize = require('sequelize')
const Op = Sequelize.Op
exports.sequelize = {
    dialect: 'mysql',
    database: 'steel',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'diaodiao1212',
    timezone: '+08:00',
    operatorsAliases: {
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $gt: Op.gt,
        $lt: Op.lt,
        $lte: Op.lte,
        $like: Op.like
    }
};

exports.logger = {
    consoleLevel: 'DEBUG',
};

exports.cluster = {
    listen: {
        port: 7001,
        hostname: '0.0.0.0',
    }
}