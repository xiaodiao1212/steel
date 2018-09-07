'use strict';

module.exports = app => {
  app.beforeStart(async function() {

    if (app.env === 'local') {
      await app.model.sync({ force: true }); // false的时候不会重启数据库。
    }

    // await app.model.Role.init();
    // await app.model.Permission.init();
    // await app.model.RolePermission.init();
    // await app.model.Member.init();
    // await app.model.sync({ force: true });
  });
};