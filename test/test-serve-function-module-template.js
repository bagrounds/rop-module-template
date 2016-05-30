/**
 * Tests for serve-function-module-template
 */
;(function () {
  /* global describe, it, before */
  'use strict'

  /* Imports */
  var expect = require('chai').expect

  var serveFunctionModule = require('../serve-function-module-template')

  /* Tests */
  describe('serve-function-module-template', function () {
    var validOptions
    var invalidOptions

    before(function () {
      validOptions = {
        x: 'valid',
        y: 'also valid',
        z: 'this is a invalid input'
      }

      invalidOptions = {
        x: 'valid',
        y: 'also valid',
        z: ['this', 'is', 'an', 'invalid', 'input']
      }
    })

    it('should return an error for invalid inputs', function (done) {
      serveFunctionModule(invalidOptions, function (error) {
        expect(error).to.be.an('error')

        done()
      })
    })

    it('should not return an error for valid inputs', function (done) {
      serveFunctionModule(validOptions, function (error, result) {
        expect(error).to.be.null
        expect(result).to.be.ok

        done()
      })
    })

    it('should return the sum of its inputs', function (done) {
      var expectedResult = validOptions.x + validOptions.y +
      validOptions.z

      serveFunctionModule(validOptions, function (error, result) {
        expect(error).to.not.be.ok
        expect(result).to.equal(expectedResult)

        done()
      })
    })
  })
})()
