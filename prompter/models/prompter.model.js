const mongoose = require('../../services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const propmpterSchema = new Schema({
    id: String,
    text: String,
    meta: Schema.Types.Mixed,
    userId: String,
})

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

// exports.getAllByUserId = 