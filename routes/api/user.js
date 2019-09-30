module.exports = function (app) {
    const passport = require("passport");
    const mongoose = require("mongoose");
    const bycrpt = require("bcryptjs");
    const jwt = require("jsonwebtoken");
    const db = require("../../models");
    const keys = require("../../config/keys");
    
    app.get("/api/user/test",passport.authenticate("jwt", {session: false}),(req, res) => {
        res.json({
            success: true,
            msg: "Testing endpoint works!"
        });
    });

    // @route POST /api/user
    // @desc creates a new user
    // app.post("/api/user", (req, res) => {  
    //     db.User.find({                      //looks for existing user by querying where email = email user inputs
    //         email: req.body.email
    //     })
    //     .then(User => {
    //         if(User) {                      //if we have a record of the email provided, throw an error
    //             return res.status(400).json({ 
    //                 email: "This email already exists"
    //             });
    //         } else {                        //if we do not have a record of the email provided, create a new User (this mirrors our UserSchema)
    //             const newUser = {
    //                 firstName: req.body.firstName,
    //                 lastName: req.body.lastName,
    //                 email: req.body.email,
    //                 password: req.body.password,
    //                 date: Date.now
    //             }

    //             //hashes password before storage in db
    //             bcrypt.genSalt(10, (err, salt) => {
    //                 bcrypt.hash(newUser.password, salt, (err, hash) => {
    //                     if(err) throw(err);                             //if there is an error, throw the error
    //                     newUser.password = hash;                          // otherwise, reassign the password to the hash

    //                     //now, we are able to save this to db.
    //                     User.create(newUser)
    //                         .then(User => {
    //                             res.status(200).json({
    //                                 msg: newUser.firstName + "'s account was successfully created!",
    //                                 userCreated: true
    //                             });
    //                         })
    //                         .catch(err => console.log(err));
    //                 })
    //             })
    //         }
    //     })
    // }) 

    // @route POST /api/user
    // @desc creates a new user (references class activity 18 in the Mongo/Mongoose folder)
    app.post("/api/user", function (req, res){
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            date: Date.now
        };
    
        db.User.create(newUser)
            .then(function(newUser){
                res.status(200).json({
                    msg: newUser.firstName + "'s account was successfully created!"
                })
            })
            .catch(function(err){
                res.status(500).json({
                    msg: "We encountered an error creating a new user"
                })
            })
    })
};




