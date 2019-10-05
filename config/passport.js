const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;


const User = require("../models/User");
const keys = require("../config/keys");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports= passport => {

    passport.use(
        new JwtStrategy(options, (jwtPayload, done) => {
            // console.log(jwtPayload.id)

            User.findById(jwtPayload.id)
             .then(user => {
                 console.log(user.firstName)
                if(user) {
                    return done(null, user); //runs if successful
                }
                return done(null, false); //runs if unsuccessful
             })
             .catch(err => console.log("Passport encountered an error" + err));
        })
    )
}