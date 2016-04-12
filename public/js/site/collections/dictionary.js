/**
 * Dictionary
 *
 * @module      :: Collections
 * @description :: Represent collection of words
 */

define(['backbone'], function(Backbone) {
  'use strict';

  var Dictionary = Backbone.Collection.extend({
        model: app.Word
      });

  return Dictionary;
});

