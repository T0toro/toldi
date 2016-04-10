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
  * Find word by name
  */
exports.find = function(req, res) {
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