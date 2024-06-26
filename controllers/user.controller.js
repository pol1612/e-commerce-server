const sharedUtils = require('../shared/http.utils');

const User = require('../database/models/user');
const bcrypt = require('bcrypt');
const e = require("express");
const err = require("jsonwebtoken/lib/JsonWebTokenError");
let registerAllowedFields  = [
    "username",
    "email",
    "password",
    "isAdmin"
]
let loginAllowedFields  = [
    "email",
    "password"
]

const getUserById = async (req, res) => {
    const userId = req.params.id;
    if(userId) {
        try{
            const user = await User.findById(userId)
            if(user) {
                res.send(JSON.stringify(user))
            }else {
                res.status(404).send({})
            }
        }catch(err){
            console.log(" getUserById "+err.message.toString())
            res.status(500).send({})
        }
    }else {
        res.status(400).send({error: 'Bad request id'});
    }
}

const createUserAndGetUserAuthToken = async (req, res) => {

    let isRequestValid = sharedUtils.validateRequestBodyFields(registerAllowedFields,req.body)
    try {
        if(isRequestValid) {

            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                isAdmin: req.body.isAdmin,
            });

            const user = await User.findOne({ email: newUser.email });
            if (!user) {

                const salt = await bcrypt.genSalt(10);

                newUser.password = await bcrypt.hash(newUser.password, salt);

                await newUser.save()

                const token = newUser.generateAuthToken();

                const data = {
                    token: token,
                    id: newUser.id,
                    isAdmin: newUser.isAdmin,
                };

                res.send(data);
            }
            else{
                res.status(400).send({})
            }

        }else{
            res.status(400).send({})
        }
    }catch(err){
        console.log(" createUserAndGetUserAuthToken "+err.message.toString())
        res.status(500).send({})
    }
}

const getUserAuthToken = async (req, res) => {
    try{
        console.log("getUserAuthToken method body: ");
        console.log(req.body);
        const user = await User.findOne({ email: req.body.email });

        if (user) {

            const passwordIsValid = await bcrypt.compare(req.body.password, user.password);

            if (passwordIsValid) {

                const token = user.generateAuthToken();
                const data = {
                    token: token,
                    userId: user.id,
                    isAdmin: user.isAdmin,
                };

                res.send(data);

            }else{
                res.status(400).send({})
            }

        }else {
            res.status(404).send({})
        }

    }catch (e) {
        console.log(" getUserAuthToken "+e.message.toString())
        res.status(500).send({})
    }

}
module.exports = {getUserById, createUserAndGetUserAuthToken, getUserAuthToken}