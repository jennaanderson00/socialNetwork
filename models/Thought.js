const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String
            // required, must be between 1-280 characters
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String
            // required
        },
        // array of nested documents created with the reactionSchema
        reactions: [
            {

            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getterss: true
        },
        id: false
    }
);

//  schema settings - create a virtual called reactionCount that retrieves the length of the thoughts reactions array field on query

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;