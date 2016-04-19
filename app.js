#!/usr/bin/env node

/**
 * Express server
 * @module app
 */
(function(){

  // npm packages
  var http = require('http');
  var express = require('express');
  var stylus = require('stylus');

  var module = require('./lib/module');

  var PORT = (process.env.PORT || '3000');

  var app = express();
  var router = express.Router();

  var server = http.createServer(app);

  app.set('port', PORT);
  app.set('view engine', 'jade');

  app.use(stylus.middleware({
    src: __dirname,
    dest: __dirname + '/public',
    debug: true,
    force: true
  }));

  app.use('/', express.static(__dirname + '/public'));

  router.get('/', function(request, response) {
    response.render('index', { title: 'Express' });
  });

  app.use(router);

  server.on('listening', function onListening(){
    console.log(server.address());
  });

  server.on('request', function onRequest(request){
    console.log('[' + request.ips + '] -> ' + request.method + ' ' + request.url);
  });

  server.listen(PORT);

})();
