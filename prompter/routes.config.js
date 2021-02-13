const PromptController = require('./controllers/prompter.controller')
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');

exports.routesConfig = function(app) {
    app.post('/prompter', [
        PromptController.insert
    ])
    app.post('/prompternoauth', [
        PromptController.insertWithoutAuth
    ])
    app.patch('/prompternoauth/:slug', [
        PromptController.modifyPrompterNoAuth
    ])
    app.get('/prompternoauth/:prompterId', [
        PromptController.getNoAuthPrompterBySlug
    ])
    app.get('/allprompterbyuserid/:userId', [
        PromptController.getAllPrompterByUserId
    ])
    app.delete('/prompter/:prompterId', [
        PromptController.removePrompter
    ])
    app.patch('/prompter/:prompterId', [
        PromptController.modifyPrompter
    ])
    app.get('/prompter/:prompterId', [
        PromptController.getPrompterBySlug
    ])
}