/**
 * Word
 *
 * @module      :: Model
 * @description :: Represent word schema model in DB
 */

var app = app || {};

app.Word = Backbone.Model.extend({
    defaults: {
        name: 'Нет названия',
        description: 'Нет описания',
        slug: ''
    }
});