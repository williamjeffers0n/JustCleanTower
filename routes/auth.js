const {
  Router
} = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/config.json');
const {
  User
} = require('../models');
/* POST login. */
router.post('/login', (req, res, next) => {
  const {
    email,
    password
  } = req.body;
  if (email && password) {
    User.findOne({
        where: {
          email
        }
      })
      .then(user => {
        if (!user) {
          res.status(401).json({
            msg: 'No such user found',
            user
          });
        }

        if (user.password === password) {
          let payload = {
            id: user.id
          };
          let token = jwt.sign(payload, config.secret);
          res.json({
            msg: 'Login Success',
            token: token
          });
        } else {
          res.status(401).json({
            msg: 'Password is incorrect'
          });
        }
      })
      .catch(err => {
        res.status(401).json({
          msg: 'No such user found',
          user
        });
      });
  }

});
module.exports = router
