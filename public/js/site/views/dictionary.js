/**
 * DictionaryView
 *
 * @module      ::  View
 * @description :: represent word list
 */

define([
    'backbone',
    'collections/dictionary',
    'views/word'
], function(Backbone, Dictionary, WordView) {
    'use strict';

    /**
     * Module variables
     */

    var DictionaryView;

    /**
     * Module expose
     */

    DictionaryView = Backbone.View.extend({
        tagName: 'ul',
        className: 'list-word',

        initialize: function(initialWords) {
            this.collection = new Dictionary();

            this.listenTo(this.collection, 'add, reset', this.render);
        },

        render: function() {
            var self = this;

            this.$el.empty();

            this.collection.each(function(word) {
                self.renderWord( word );
            }, this);
        },

        renderWord: function( word ) {
            var wordView = new WordView({
                model: word
            });

            this.$el.append( wordView.render().el );
        }
    });

    return DictionaryView;
});