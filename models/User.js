const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        // unique, required, trimmed
    },
    email: {
        type: String,
        // unique, required, must match valid email address
    },
    thoughts: {
        // array of _id values referencing the thought model
        type: Array
    },
    friends: {
        // array of _id values referencing the user model
        type: Array
    }
})

// schema settings - create a virtual called friendCount that retrieves the length of the users friends array field on query

const User = model('User', UserSchema);

module.exports = User;