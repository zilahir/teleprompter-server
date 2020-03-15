const mongoose = require('../../services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const propmpterSchema = new Schema({
    slug: String,
    text: String,
    meta: Schema.Types.Mixed,
    userId: String,
    projectName: String,
})

propmpterSchema.set('toJSON', {
    virtuals: true
});

propmpterSchema.findById = function (cb) {
    return this.model('Prompter').find({id: this.id}, cb);
};

propmpterSchema.findByUserId = function (cb) {
    return this.model('Prompter').find({userId: this.userId}, cb);
};

const Prompter = mongoose.model('Prompter', propmpterSchema)

exports.inserPrompter = prompterData => {
    const prompter = new Prompter(prompterData)
    return prompter.save()
}

exports.getAllByUserId = userId => {
    return Prompter.find({
        userId
    })
}

exports.deletePrompter = idToTel => {
    return new Promise((resolve, reject) => {
        Prompter.remove({_id: idToTel}, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve({
                    isSuccess: true,
                    idToTel,
                })
            }
        })
    })
}