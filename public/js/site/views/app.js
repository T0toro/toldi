/**
 * App
 *
 * @module       :: app
 * @description  :: Aplication start point
 */

define([
  'backbone',
  'views/dictionary'
], function(Backbone, DictionaryView) {
  'use strict';

  /**
   * Module variables
   */

  var App;

  /**
   * Module expose
   */

  App = Backbone.View.extend({
    el: '#home-page',
    events: {
      'click #btn-form-submit': 'formSubmit',
      'keyup .input-search': 'searchOnPress'
    },

    initialize: function() {
      this.inputSearch = this.$('.input-search');
      var dictionary = new DictionaryView();
    },

    searchOnPress: function(e) {
      var $searchQuery = this.inputSearch.val() || '';

      !!$searchQuery && $searchQuery.length > 1 && $.get('/word/' + $searchQuery.toUpperCase())
        .done(function(data) {
          console.info(data);
        });
    },

    formSubmit: function(e) {
      e.preventDefault();
      var $searchQuery = this.inputSearch || '';

      !!$searchQuery && $.get('/word/' + $searchQuery)
        .done(function(data) {
          console.info(data);
        });
    }
  });

  return App;
});
