/**
 * Dictionary
 *
 * @module      :: Collections
 * @description :: Represent collection of words
 */

var app = app || {};

app.Dictionary = Backbone.Collection.extend({
    model: app.Word
});

