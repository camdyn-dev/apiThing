const mongoose = require('mongoose');

const { Schema } = mongoose

const ProjectSchema = new Schema({
    name: String,
    type: String,
    level: String,
    language: String,
})

module.exports = mongoose.model("Project", ProjectSchema)