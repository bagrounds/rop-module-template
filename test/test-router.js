;(function(){
  "use strict";

  var chai = require("chai");

  describe('router', function() {

    var router = require('../lib/router');
    var serve =  require('../node_modules/serve-express-router/app');
    var portFinder = require('portfinder');
    var request = require('request');

    var C = require('../conf/values');

      it('should serve the test message', function (done) {

        portFinder.getPort(function(error,port){

          serve(port,router);

          var url = 'http://localhost:' + port;

          request(url,function(error,response,body){

            chai.expect(body).to.equal(C.TEST_MESSAGE);
            done();
          });
        });
      });
  });
})();
