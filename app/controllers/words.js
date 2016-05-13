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
 * All words
 */

exports.index = (req, res, next) => {
  Word
    .find()
    .limit(5)
    .exec((err, words) => {
      if (err) return next(err);

      Array.isArray(words) && !!words.length && res.json(words);
    });
};

/**
  * Find word by slug
  */

exports.show = (req, res, next) => {
  var searchQuery = req.params.slug|| false;

  if (searchQuery) {
    Word
      .find({
        slug: searchQuery
      })
      .exec((err, word) => {
        if(err) return next(err);

        if(Array.isArray(word) && word.length > 0) {
          return res.render('words/show' , {
            pageName: word[0].name,
            word: word[0]
          });
        } else {
          return res.render('static/404');
        }
      });
  } else {
    return res.render('static/404');
  }
};

/**
  * Find words in a regex
  */
exports.search = (req, res, next) => {
  let word = req.params.word || false;

  if (word) {
    Word
      .find({
        name: {
          "$regex": new RegExp("^" + word, "i"),
        }
      })
      .exec((err, word) => {
        if(err) return next(err);

        res.json(word);
      });
  }
};

exports.searchByLetter = (req, res, next) => {
  let letter = req.params.letter || '';

  if (letter) {
    Word
      .find({
        name: {
          "$regex": new RegExp("^" + letter, "i"),
        }
      })
      .exec((err, words) => {
        if (err) return next(err);

        res.render('home/sitemap', {
          words: words
        });
      });
  }
}