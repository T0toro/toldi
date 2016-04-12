/**
 * App
 *
 * @module       :: app
 * @description  :: Aplication start point
 */

define(['backbone'], function(Backbone) {
  'use strict';

  /**
   * Module variables
   */

  var App;

  /**
   * Module body
   */

  App = Backbone.View.extend({
    el: '#home-page',
    events: {
      'click #btn-form-submit': 'formSubmit'
    },

    initialize: function() {

    },

    formSubmit: function(e) {
      e.preventDefault();

      $.get('/word');
    }
  });

  return App;
});
