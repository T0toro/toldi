'use strict'

/**
 * Module variables
 */

var home, words;

/**
 * Module dependencies
 */


home  = require('../app/controllers/home');
words = require('../app/controllers/words');


module.exports = function(app) {
  app.get('/', home.index);
  app.get('/search/:word', words.search);
  app.get('/word/:slug', words.show);

  app.get('/words', words.index);
}
