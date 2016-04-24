/**
 * wordView
 *
 * @module       :: View
 * @description  :: represent word in dom
 */


define([
    'backbone',
    'handlebars',
    'text!templates/wordItem.html'
], function(Backbone, Handlebars, wordItemTpl) {
    'use strict';

    /**
     * Module variables
     */

    var WordView;

    /**
     * Module expose
     */

    WordView = Backbone.View.extend({
        tagName: 'article',
        className: 'list-item',
        template: Handlebars.compile(wordItemTpl),
        render: function () {
            this.$el.html( this.template( this.model.toJSON() ));
            return this;
        }
    });

    return WordView;
});