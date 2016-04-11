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

require(['jquery', 'handlebars', 'views/app', 'text!templates/wordItem.html'], function($, Handlebars, app, wordItemTmpl) {
  var dictionary = [
    {
      name: 'Ящур',
      content: 'острое вирусное заболевание из группы антропозоонозов (инфекционных болезней животных, которыми болеет также и человек)',
      slug: 'yashyr',
    },
    {
      name: 'Ящур',
      content: 'острое вирусное заболевание из группы антропозоонозов (инфекционных болезней животных, которыми болеет также и человек)',
      slug: 'yashyr',
    },
    {
      name: 'Ящур',
      content: 'острое вирусное заболевание из группы антропозоонозов (инфекционных болезней животных, которыми болеет также и человек)',
      slug: 'yashyr',
    },
    {
      name: 'Ящур',
      content: 'острое вирусное заболевание из группы антропозоонозов (инфекционных болезней животных, которыми болеет также и человек)',
      slug: 'yashyr',
    },
    {
      name: 'Ящур',
      content: 'острое вирусное заболевание из группы антропозоонозов (инфекционных болезней животных, которыми болеет также и человек)',
      slug: 'yashyr',
    },
    {
      name: 'Ящур',
      content: 'острое вирусное заболевание из группы антропозоонозов (инфекционных болезней животных, которыми болеет также и человек)',
      slug: 'yashyr',
    },
    {
      name: 'Ящур',
      content: 'острое вирусное заболевание из группы антропозоонозов (инфекционных болезней животных, которыми болеет также и человек)',
      slug: 'yashyr',
    },
    {
      name: 'Ящур',
      content: 'острое вирусное заболевание из группы антропозоонозов (инфекционных болезней животных, которыми болеет также и человек)',
      slug: 'yashyr',
    },
  ];

  console.info(Handlebars, dictionary, wordItemTmpl);

  var template = Handlebars.compile(wordItemTmpl);

  console.info('Compiled template: ', $('body').append(template(dictionary[0])));

  $.get('/search/а').done(function(data) {
    console.info('test', data);
  });
});
