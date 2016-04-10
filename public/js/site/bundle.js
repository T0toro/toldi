requirejs.config({
  baseUrl: 'js/site',
  paths: {
    lodash:     '../libs/lodash.min',
    jquery:     '../libs/jquery.min',
    backbone:   '../libs/backbone.min',
    hbs:        '../libs/handlebars.min',
    text:       '../libs/text.min'
  },
  shim: {
    lodash: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'lodash'],
      exports: 'Backbone'
    }
  }
});

require(['jquery', 'hbs', 'views/app'], function($, hbs, app) {
  console.info(hbs);

  $.get('/search/ящ').done(function(data) {
      console.info('test', data);
    });
});