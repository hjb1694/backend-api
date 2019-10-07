const {check} = require('express-validator');

module.exports = [
    check('email').trim().isEmail(), 
    check('password').trim().isLength({min : 6}), 
    check('name').trim().isLength({min:2})
];