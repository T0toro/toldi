/**
 * WordView
 *
 * @module      :: View
 * @description :: Represent set of methods for render Words
 */

define(['backbone'], function(Backbone) {
  'use strict';

  var wordView = Backbone.View.extend({
        tagName: 'section',
        className: 'list-item',
        template: _.template( $('#test').html()),
        render: function() {
            this.$el.html(this.template( this.model.toJSON() ));

            return this;
        }
      });

    return wordView;
});


