/**
 * Set up Express application
 *
 * Purpose:
 * - initialize and configure Express app
 * - import and assign routing modules
 *
 * @module app
 */
(function(){
  "use strict";
  /*****************************************************************************
   * imports
   */
  var express = require('express');
  var request = require('request');

  var serve = require('./node_modules/serve-express-router/app');

  var pkg = require('./package.json');
  var C = require('./conf/values');
  var router = require('./lib/router');

  /***************************************************************************
   * request config and launch server
   */

  var configUrl = C.CONFIG_URL + '?name=' + pkg.name;

  request(configUrl,function(error,response, config){

    error && console.log(error);

    console.log('config: ' + config);

    config = JSON.parse(config);

    serve(config.port,router);
  });

})();
