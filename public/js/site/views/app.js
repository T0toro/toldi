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
      'input .form-input-search': 'searchOnPress'
    },
    dictionary: new DictionaryView(),

    initialize: function() {
      this.inputSearch = this.$('.form-input-search');
    },

    searchOnPress: function(e) {
      var $searchQuery = this.inputSearch.val() || '',
          self = this;

      !!$searchQuery && $searchQuery.length > 1 && $.get('/search/' + $searchQuery.toUpperCase())
        .done(function(data) {
          console.info(data);
          self.dictionary.collection.reset(data);

          self.$('.list-word').html(self.dictionary.el);
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
