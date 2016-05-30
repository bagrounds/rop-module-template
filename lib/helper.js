/**
 * Example helper module for serve-function-module-template.
 *
 * @module helper
 */
;(function () {
  'use strict'

  /* Imports */
  var typeCheck = require('type-check').typeCheck

  /* Exports */
  module.exports = add

  /**
   * Adds its input arguments.
   *
   * @function helper
   *
   * @param {Array<String|Number>} summands things to be added
   *
   * @return {String|Number|Error} the sum of summands
   */
  function add (summands) {
    var initialValue

    if (typeCheck('[String]', summands)) {
      initialValue = ''
    } else if (typeCheck('[Number]', summands)) {
      initialValue = 0
    } else {
      return new Error('invalid inputs')
    }

    var sum = summands.reduce(function (sum, argument) {
      return sum + argument
    }, initialValue)

    return sum
  }
})()
