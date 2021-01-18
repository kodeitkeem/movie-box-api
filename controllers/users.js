const User = require('../models/user');
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');
const { create } = require('../models/user');

module.exports = {
    signup
}



async function signup(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json({token});
    } catch(error){
        res.status(400).json({msg: 'bad request'});
    }
}

function createJWT(user){
    return jwt.sign({user}, SECRET, {expiresIn: '24h'})
}