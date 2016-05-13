'use strict'

/**
 * Module variables
 */

var home, words;

/**
 * Module dependencies
 */


home    = require('../app/controllers/home');
words   = require('../app/controllers/words');


module.exports = function(app) {
  app.get('/', home.index);
  app.get('/search/:word', words.search);

  // Words
  //---------------------------------------

  app.get('/words', words.index);
  app.get('/word/:slug', words.show);

  // Sitemap
  //---------------------------------------

  app.get('/sitemap', home.sitemap);
  app.get('/sitemap/:letter', words.searchByLetter);
}
