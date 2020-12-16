const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const config = require('../config/config.json');
const userCntrl = require('../controllers/user.control');
const {
  User
} = require('../models');
passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : config.secret
    },
    function (jwtPayload, cb) {
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
         return userCntrl.getUserById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));
