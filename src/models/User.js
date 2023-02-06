const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [5, 'Username is too short, minimum allowed length is 5'],
        unique: true,
        // validate: [/^[a-zA-Z0-9]+$/, 'Message here']
        validate: {
            validator: function(value) {
                return /^[a-zA-Z0-9]+$/.test(value);
            },
            message: 'Username should consist only of Latin letters and digits!'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password is too short'],
        validate: [/^[a-zA-Z0-9]+$/, 'Password not meeting requirements!']
    }
});

userSchema.method('validatePassword', function(password) {
return bcrypt.compare(password, this.password);
})

//try async

// this could be done in the service section
userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model('User', userSchema);

module.exports = User;