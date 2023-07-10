const mongoose = require("mongoose")
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdOn: {
        type: Date,
        default: null
    }
}, {
    collection: "todo"
})

const todoModel = mongoose.model("todo", todoSchema)

module.exports = todoModel