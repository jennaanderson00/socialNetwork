const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String
        // required, must be between 1-280 characters
    },
    createdAt: {
        // use a getter method to format the timestamp on query
        type: Date,
        default: Date.now
    },
    username: {
        type: String
        // required
    },
    reactions: {
        // array of nested documents created with the reactionSchema
        type: Array
    }
})

//  schema settings - create a virtual called reactionCount that retrieves the length of the thoughts reactions array field on query

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;