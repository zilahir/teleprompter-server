const PrompterModel = require('../models/prompter.model')

exports.insert = (req, res) => {
    PrompterModel.inserPrompter(req.body)
        .then(result => {
            res.status(200).send({
                id: result._id,
            })
        })
}