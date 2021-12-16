const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    projectName : { type: String, required: true, unique: true },
    project : { type : Object, required: true},
    user: {type: String, required: true}
})

module.exports = model('Project', schema)