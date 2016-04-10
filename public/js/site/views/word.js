/**
 * WordView
 *
 * @module      :: View
 * @description :: Represent set of methods for render Words
 */

var app = app || {};

app.WordView = Bacbone.View.extend({
    tagName: 'section',
    className: 'list-item',
    template: _.template( $('#test').html()),
    render: function() {
        this.$el.html(this.template( this.model.toJSON() ));

        return this;
    }
});