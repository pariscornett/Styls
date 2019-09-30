module.exports = function (app) {
    const passport = require("passport");
    const mongoose = require("mongoose");
    const bcrypt = require("bcryptjs");
    const jwt = require("jsonwebtoken");
    const keys = require("../../config/keys");
    const User = require("../../models/User");
    app.get("/api/user/test",passport.authenticate("jwt", {session: false}),(req, res) => {
        res.json({
            success: true,
            msg: "Testing endpoint works!"
        });
    });

    // @route POST /api/user
    // @desc creates a new user (references class activity 18 in the Mongo/Mongoose folder)
    app.post("/api/user", function (req, res){
        const { firstName, lastName, email, password } = req.body;

        User.findOne({
            email
          }).then(user => {
            if (user) {
              return res.status(400).json({
                  msg: "This user already exists"
              });
            } else {
        
              const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                date: Date.now
              });
        
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
            });
        }
            
    })
});

  // @route POST api/user/login
  // @desc logs in a user
  app.post("/api/user/login", (req, res) => {
    const { email, password } = req.body;

    User.findOne({
      email
    })
    .then(user => {
      if(!user) {
       errors.email = "User not found";
       return res.status(404).json(errors);
      }

      //compare the passwords
      bcrypt.compare(password, user.password)
            .then(isMatch => {
              if(isMatch) {
                // User.findOne({
                //   _id: user.ObjectId
                // })
                //create the payload
                const payload = {
                  _id: user.ObjectId,
                  email: user.email,
                  firstName: user.firstName,
                  lastName: user.lastName
                }

                  jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 * 12 },
                    (err, token) => {
                      res.json({
                        success:true,
                        token: `Bearer ${token}`
                      });
                    }
                  );
              } else {
                return res.status(400).json({
                  msg: "Incorrect password, try again"
                })
              }
            })
           
    })
  })

}




