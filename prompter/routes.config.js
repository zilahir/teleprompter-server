const PromptController = require('./controllers/prompter.controller')
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');

exports.routesConfig = function(app) {
    app.post('/prompter', [
        PromptController.insert
    ])
    app.get('/allprompterbyuserid', [
        PromptController.getAllPrompterByUserId
    ])
}