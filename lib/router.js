/**
 * Define routes
 *
 *
 * @module router
 */
;(function(){
  "use strict";
  /***************************************************************************
   * imports
   */
  var express = require('express');

  var C = require('../conf/values');

  var router = express.Router();

  /***************************************************************************
   * Define GET request
   */
  router.get(C.ENDPOINT, function(request,response){
    response.send(C.TEST_MESSAGE);
  });

  module.exports = router;

})();
