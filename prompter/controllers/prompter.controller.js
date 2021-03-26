const PrompterModel = require('../models/prompter.model')

exports.insert = (req, res) => {
    PrompterModel.inserPrompter(req.body)
        .then(result => {
            res.status(200).send({
                id: result._id,
            })
        })
}

exports.insertWithoutAuth = (req, res) => {
    PrompterModel.inserPrompterWithoutAuth(req.body)
        .then(result => {
            res.status(200).send({
                id: result._id,
            })
        })
}

exports.getAllPrompterByUserId = (req, res) => {
    PrompterModel.getAllByUserId(req.params.userId)
        .then(result => {
            res.status(200).send(result)
        })
}

exports.removePrompter = (req, res) => {
    PrompterModel.deletePrompter(req.params.prompterId)
        .then(result => {
            res.status(200).send(result)
        })
}

exports.modifyPrompter = (req, res) => {
    PrompterModel.patchPrompter(req.params.prompterId, req.body)
        .then(result => {
            res.status(200).send(result)
        })
}

exports.modifyPrompterNoAuth = (req, res) => {
    PrompterModel.patchPrompterNoAuth(req.params.slug, req.body)
        .then(result => {
            res.status(200).send(result)
        })
}

exports.getPrompterBySlug = (req, res) => {
    PrompterModel.findByPrompterId(req.params.prompterId)
        .then(result => {
            res.status(200).send(result || {
                isSuccess: false,
            })
        })
}

exports.getNoAuthPrompterBySlug = (req, res) => {
    PrompterModel.getPrompterBySlugNoAuth(req.params.prompterId)
        .then(result => {
            res.status(200).send({
                isSuccess: true,
                ...result,
            })
        })
}