'use strict'

/**
 * HomeController
 *
 * @module      :: Controller
 * @description :: Contain logic for handling request from home page
 */

/**
 * Home request handler
 */

exports.index = (req, res) => {
  res.render('index');
};

exports.sitemap = (req, res) => {
  return res.render('home/sitemap', {
    pageName: 'Карта сайта'
  });
};