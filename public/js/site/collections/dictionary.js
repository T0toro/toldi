/**
 * Dictionary
 *
 * @module      :: Collections
 * @description :: Represent collection of words
 */

define(['backbone', 'models/word'], function(Backbone, Word) {
  'use strict';

  var Dictionary = Backbone.Collection.extend({
        model: Word
      });

  return Dictionary;
});

