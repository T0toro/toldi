/**
 * wordView
 *
 * @module       :: View
 * @description  :: represent word in dom
 */


define([
    'backbone',
], function(Backbone) {
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
        initialize: function() {},
        render: function () {
            this.$el.html( this.template( this.model.toJSON() ));
            return this;
        }
    });

    return WordView;
});