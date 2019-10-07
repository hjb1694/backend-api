const {validationResult} = require('express-validator');
const {User} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');


const signToken = (user) => {
    return jwt.sign(user, config.jwtsecret, {expiresIn : '1hr'});
}

exports.loginController = async (req,res) => {

        const {email, password} = req.body;



}

exports.registerController = async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
       return res.status(422).json({errors : errors.array()});
    }

    const {name, email, password} = req.body;
    
    try{

        const existingUser = await User.findAll({
            where : {
                email
            }
        });

        if(existingUser.length){
            return res.status(422).json({error : 'This email address already exists!'});
        }

        const hashedPassword = bcrypt.hashSync(password, 8);

        const user = await User.create({
            name : name.trim(), 
            email : email.trim(), 
            password : hashedPassword
        });

        const token = signToken({
            userId : user.id
        })

        return res.send({
            userId : user.id, 
            token
        });

    }catch(e){
       
        res.status(400).json({error : 'Sorry, there was a server error!'});
        
    }
}