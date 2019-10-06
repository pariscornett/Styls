module.exports = function(app) {
    const passport = require('passport');
    const mongoose = require('mongoose');
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const keys = require('../../config/keys');
    const User = require('../../models/User');
    const multer = require('multer');
    const fs = require('fs');

    //Test Route
    app.get('/api/user/test', (req, res) => {
        res.json({
            success: true,
            msg: 'Testing endpoint works!'
        });
    });

    // @route POST /api/user
    // @desc creates a new user (references class activity 18 in the Mongo/Mongoose folder)
    app.post('/api/user', function(req, res) {
        const { firstName, lastName, email, password } = req.body;

        User.findOne({
            email
        }).then(user => {
            if (user) {
                return res.status(400).json({
                    msg: 'This user already exists'
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
        });
    });

    // @route POST api/user/login
    // @desc logs in a user
    app.post('/api/user/login', (req, res) => {
        const { email, password } = req.body;

        User.findOne({
            email
        }).then(user => {
            if (!user) {
                errors.email = 'User not found';
                return res.status(404).json(errors);
            }

            //compare the passwords
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    // User.findOne({
                    //   _id: user.ObjectId
                    // })
                    //create the payload
                    const payload = {
                        id: user._id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName
                    };

                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        { expiresIn: 3600 * 12 },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: `Bearer ${token}`
                            });
                        }
                    );
                } else {
                    return res.status(400).json({
                        msg: 'Incorrect password, try again'
                    });
                }
            });
        });
    });

    app.get(
        '/api/user/current/',
        passport.authenticate('jwt', { session: false }),
        (req, res) => {
            User.findById(req.user.id, (err, user) => {
                res.json(user);
            });
        }
    );

    // Set multer storage
    var storage = multer.diskStorage({
        // Set destination to ./uploads in root of node application
        destination: function(req, file, cb) {
            cb(null, 'uploads');
        },

        // alter the file name to be the field name plus the current date
        filename: function(req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now());
        }
    });

    // set the upload variable
    var upload = multer({ storage: storage });

    // upload route
    app.post(
        '/upload',
        passport.authenticate('jwt', { session: false }),
        upload.single('recfile'),
        (req, res) => {
            // get the file path
            var img = fs.readFileSync(req.file.path);

            // encode the image
            var encode_image = img.toString('base64');

            //console.log(req.body);
            // Ddfine a JSON for the image attributes for saving to database
            var newItem = {
                category: req.body.category,
                description: req.body.description,
                contentType: req.file.mimetype,
                image: new Buffer(encode_image, 'base64')
            };
          
            // create a new photo item in the db (need to change this to add to user)
            console.log(req.user.firstName);
            console.log(req.body);
            console.log(req.user._id);
            User.update(
                {
                    _id: req.user._id
                },
                { $push: { clothingItems: newItem } }
            )
                .then(file => {
                    res.json({ msg: 'File successfully uploaded' });
                })
                .catch(err => console.log(err));
        }
    );
};
