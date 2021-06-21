const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('./../models/User');

router.post(
  '/',
  [
    check('email', 'Please provide an email').not().isEmpty(),
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Please provide a password').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (errors.length > 0) {
      res.send(errors);
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      console.log(user);

      if (user) {
        res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        email,
        password,
      });

      const salt = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(password, salt);

      await user.save();

      jwt.sign(
        {
          user: {
            id: user._id,
          },
        },
        'shhhhh',
        { expiresIn: 360000000000 },
        (err, token) => {
          if (err) res.status(500).json({ msg: 'server error' });
          res.send(token);
        }
      );
    } catch (err) {
      res.send(err);
    }
  }
);

module.exports = router;
