/**
 * Template for a function module that can be served by serve-function.
 *
 * @module serve-function-module-template
 */
;(function () {
  'use strict'

  /* Imports */
  var typeCheck = require('type-check').typeCheck
  var helper = require('./lib/helper')

  /* Exports */
  module.exports = serveFunctionModuleTemplate

  /**
   * This example function illustrates the format required by the serve-function
   * module. The function should accept an options object containing any
   * function parameters, and a callback to handle the results
   *
   * @function serveFunctionModuleTemplate
   * @alias serve-function-module-template
   *
   * @param {options} options contains all function parameters
   * @param {callback} callback handles results
   */
  function serveFunctionModuleTemplate (options, callback) {
    var error = invalidOptions(options)

    var result = helper([options.x, options.y, options.z])

    callback(error, result)
  }

  /**
   * Define the options object.
   *
   * @typedef {Object} options all function parameters
   *
   * @property {String|Number} x anything that can be added
   * @property {String|Number} y anything that can be added
   * @property {String|Number} z anything that can be added
   */

  /**
   * This comment describes the callback function accepted by
   * serveFunctionModuleTemplate.
   *
   * @callback callback
   *
   * @param {Error} error describes any errors that may have occurred
   * @param {String|Number} result of this function call
   */

  /**
   * Validate inputs.
   *
   * @param {options} options contains all function parameters
   *
   * @return {Error} any errors due to invalid inputs.
   */
  function invalidOptions (options) {
    var x = options.x
    var y = options.y
    var z = options.z

    var stringOrNumber = 'String|Number'
    var message

    var xIsValid = typeCheck(stringOrNumber, x)

    if (!xIsValid) {
      message = 'invalid x: ' + x

      return new Error(message)
    }

    var yIsValid = typeCheck(stringOrNumber, y)

    if (!yIsValid) {
      message = 'invalid y: ' + y

      return new Error(message)
    }

    var zIsValid = typeCheck(stringOrNumber, z)

    if (!zIsValid) {
      message = 'invalid z: ' + z

      return new Error(message)
    }

    return null
  }
})()
