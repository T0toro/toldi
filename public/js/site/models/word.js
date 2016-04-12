/**
 * Word
 *
 * @module      :: Model
 * @description :: Represent word schema model in DB
 */

define(['backbone'], function(Backbone) {
  'use strict';

  var Word = Backbone.Model.extend({
        defaults: {
          name: 'Нет названия',
          description: 'Нет описания',
          slug: ''
        }
      });

  return Word;
});
