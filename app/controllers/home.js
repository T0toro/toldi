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

exports.index = function(req, res) {
  res.render('index');
}