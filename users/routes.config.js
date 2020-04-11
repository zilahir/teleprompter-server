const UsersController = require('./controllers/users.controller');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');

exports.routesConfig = function (app) {
    app.post('/users', [
        UsersController.insert
    ]);
    app.get('/users', [
        ValidationMiddleware.validJWTNeeded,
        UsersController.list
    ]);
    app.get('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.getById
    ]);
    app.patch('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.patchById
    ]);
    app.delete('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        UsersController.removeById
    ]);
    app.post('/passwordrecovery', [
        UsersController.createPasswordRecovery
    ])
    app.patch('/resetpassword', [
        UsersController.patchPasswordRecovery,
    ])
    app.get('/passwordrecovery/:slug', [
        UsersController.getPasswordRecovery
    ])
    app.patch('/resetpassword/:userId', [
        ValidationMiddleware.validJWTNeeded,
        UsersController.patchById
    ]);
};
