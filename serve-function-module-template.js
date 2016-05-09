/**
 * Template for a function module that can be served by serve-function.
 *
 * @module serve-function-module-template
 */
(function(){
  'use strict';

  /*****************************************************************************
   * imports
   */
  var typeCheck = require('type-check').typeCheck;
  var helperModule = require('./lib/helper-module');

  var V = require('./lib/values');

  /*****************************************************************************
   * exports
   */
  module.exports = serveFunctionModuleTemplate;

  /**
   * This comment describes the callback function accepted by
   * serveFunctionModuleTemplate.
   *
   * @callback callback
   * @param {Error} error describes any errors that may have occurred
   * @param {String|Number} result
   */

  /**
   * This example function illustrates the format required by the serve-function
   * module. The function should accept an options object containing any
   * function parameters, and a callback to handle the results;
   *
   * @alias module:serve-function-module-template
   * @param {Object} options contains all function parameters
   * @param {String|Number} options.x anything that can be added
   * @param {String|Number} options.y anything that can be added
   * @param {String|Number} options.z anything that can be added
   * @param {callback} callback handles results
   */
  function serveFunctionModuleTemplate(options, callback){

    var error = validateOptions(options);

    var result = helperModule.add([options.x, options.y, options.z]);

    callback(error, result);
  }

  /*****************************************************************************
   * Define helper functions
   */

  /**
   * Validate inputs.
   *
   * @private
   *
   * @param {Object} options contains all function parameters
   * @param {String|Number} options.x anything that can be added
   * @param {String|Number} options.y anything that can be added
   * @param {String|Number} options.z anything that can be added
   *
   * @returns {Error|null} any errors due to invalid inputs
   */
  function validateOptions(options){

    var x = options.x;
    var y = options.y;
    var z = options.z;

    var xIsValid = typeCheck('String|Number',x);
    var yIsValid = typeCheck('String|Number',y);
    var zIsValid = typeCheck('String|Number',z);

    var inputsAreValid = xIsValid && yIsValid && zIsValid;

    return !inputsAreValid ? new Error(V.INVALID_INPUTS_MESSAGE) : null;
  }

})();
