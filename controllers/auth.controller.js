const mongoose = require('mongoose');
const { User } = require('../models');

module.exports.register = (req, res, next) => {
  res.render('auth/register')
}

module.exports.doRegister = (req, res, next) => {

  function renderWithErrors(errors) {
    res.status(400).render('auth/register', {
      user: req.body,
      errors
    });
  }

  const { email } = req.body;
  User.findOne({ email })
    .then(user => {
      if (user) {
        renderWithErrors({ email: 'Email already exists' })
      } else {
        return User.create(req.body)
          .then((user) => res.redirect('/login'))
      }
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors)
      } else {
        next(error);
      }
    })
}

module.exports.login = (req, res, next) => {
  res.render('auth/login')
}

module.exports.doLogin = (req, res, next) => {

  function renderInvalidLogin() {
    res.status(400).render('auth/login', {
      user: req.body,
      errors: { password: 'Invalid email or password' }
    });
  }

  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        renderInvalidLogin();
      } else {
        return user.checkPassword(password)
          .then(match => {
            if (match) {
              req.session.userId = user.id;
              res.redirect('/tasks');
            } else {
              renderInvalidLogin();
            }
          })
      }
    })
    .catch(error => next(error));
}
