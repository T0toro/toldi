/**
 * Module dependencies
 */

var mongoose = require('mongoose'),
    local    = require('./passport/local')
    User     = mongoose.model('User');

/**
 * Expose
 */

module.exports = function(passport, local) {
  // serialize sessions
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
    User.findOne({ _id: id }, function (err, user) {
      done(err, user)
    })
  })

  // use these strategies
  passport.use(local);
};