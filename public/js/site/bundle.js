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
  map: {
    "*": {
      'underscore': 'lodash'
    }
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

require(['views/app'], function(App) {
  var app = new App();
});
