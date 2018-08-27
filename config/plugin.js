'use strict';

// had enabled by egg
// exports.static = true;

// 第三方mysql处理库
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};
// 参数校验插件
exports.validate = {
    enable: true,
    package: 'egg-validate',
};
// 安全校验插件
exports.security = {
    enable: false,
};

exports.jwt = {
    enable: true,
    package: "egg-jwt"
};