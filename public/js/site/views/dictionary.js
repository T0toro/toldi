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
        el: '.list-word',
        initialize: function(initialWords) {
            this.collection = new Dictionary();
            this.collection.fetch({ reset: true });
            this.render();

            this.listenTo(this.collection, 'add', this.renderWord);
            this.listenTo(this.collection, 'reset', this.debug);
        },

        debug: function () {
            console.info(this.collection);
         },

        render: function() {
            this.collection.each(function(word) {
                this.renderWord( word );
            }, this);
        },

        renderWord: function( word ) {
            var wordView = new WordView( word );
            this.$el.html( wordView.render().el);
        }
    });

    return DictionaryView;
});