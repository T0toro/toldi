requirejs.config({
  baseUrl: 'js/site',
  paths: {
    lodash:     '../libs/lodash.min',
    jquery:     '../libs/jquery.min',
    backbone:   '../libs/backbone.min',
    hbs: '../libs/handlebars.min'
  },
  shim: {
    lodash: {
      exports: '_'
    }
  }
});

require(['jquery', 'hbs', 'app'], function($, app) {
  console.info(window);

  $.get('/search/ящ').done(function(data) {
      console.info('test', data);
    });
});