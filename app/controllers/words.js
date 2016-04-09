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

var mongoose, Word, _;

/**
 * Module dependencies
 */

mongoose = require('mongoose');
Word     = mongoose.model('Word');
       _ = require('lodash');

/**
 * Words request handler
 */


/**
  * Find all words
  */
exports.all = function(req, res) {
  Word
    .find()
    .limit(5)
    .exec(function(err, words) {
      if(err) return next(err);

      res.json({
        words: words
      });
    });
}

/**
  * Find all words
  */
exports.find = function(req, res) {
  var word = req.params.word || '';

  console.info(word);

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