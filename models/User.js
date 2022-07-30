const { Schema, model, SchemaTypes } = require('mongoose');
const validateEmail = function(email) {
    const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return re.test(email)
};

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [
                /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                'Please fill a valid email address'
            ],
        },
        thoughts: [
            {
                type: SchemaTypes.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: SchemaTypes.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;