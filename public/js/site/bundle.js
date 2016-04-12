requirejs.config({
  baseUrl: '/js',
  paths: {
    lodash:      'libs/lodash.min',
    jquery:      'libs/jquery.min',
    backbone:    'libs/backbone.min',
    handlebars:  'libs/handlebars.min',
    text:        'libs/text.min',
    models:      'site/models',
    collections: 'site/collections',
    views:       'site/views',
    templates:   'site/templates'
  },
  shim: {
    lodash: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'lodash'],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  }
});

require(['jquery', 'handlebars', 'views/app', 'text!templates/wordItem.html'], function($, Handlebars, app, wordItemTmpl) {});
