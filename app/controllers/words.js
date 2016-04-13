'use strict'

/**
 * WordsController
 *
 * @module      :: Controller
 * @description :: Contain logic for handling requests
 */

/**
 * Module variables
 */

var mongoose, Word;

/**
 * Module dependencies
 */

mongoose = require('mongoose');
Word     = mongoose.model('Word');

// Words request handler
//--------------------------------------------


/**
  * Find word by slug
  */

exports.show = function(req, res, next) {
  var searchQuery = req.params.word || false;

  if (searchQuery) {
    console.info('test', searchQuery);
    Word
      .find({
        name: searchQuery
      })
      .exec(function(err, word) {
        if(err) return next(err);

        if(Array.isArray(word) && word.length > 0) {
          return res.json({
            word: word
          });
        } else {
          return res.json({
            code: 404,
            msg: 'Not Found'
          });
        }
      });
  }
}

/**
  * Find words in a regex
  */
exports.find = function(req, res, next) {
  var word = req.params.word || false;

  if (word) {
    Word
      .find({
        name: {
          "$regex": word,
          "$options": "i"
        }
      })
      .exec(function(err, word) {
        if(err) return next(err);

        res.json({
          word: word
        });
      });
  }
}
