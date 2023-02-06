
const config = require('../config');

const jwt = require('../lib/jsonwebtoken');

const User = require('../models/User');

const AppError = require('../utils/appError');

exports.getUserByUsername = (username) => User.findOne({ username })

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
    const user = await this.getUserByUsername(username);

    if(!user) {

        throw new AppError('Invalid username!', {user});

        // throw new Error('Invalid username!');
    //    throw {

    //        message: 'Invalid username!',
    //        data: user,
    //    } 
    }
    
    const isValid = await user.validatePassword(password);

    if(!isValid) {
        throw new AppError('Invalid password');

        // throw {
        //     message: 'Invalid password!'};
    }


    const payload = { _id: user._id, username: user.username };
    const token = await jwt.sign(payload, config.SECRET, {expiresIn: '2h'});

    return token;
}