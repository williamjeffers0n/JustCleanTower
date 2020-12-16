const passport = require('passport');
module.exports = authorize;

function authorize() {
    return passport.authenticate('jwt', { session: false })
}
