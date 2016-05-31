/**
 * Tests for serve-function-module-template
 */
;(function () {
  /* global describe, it */
  'use strict'

  /* Imports */
  var expect = require('chai').expect
  var _ = require('lodash')

  var serveFunctionModule = require('../serve-function-module-template')

  /* Tests */
  describe('serve-function-module-template', function () {
    var validOptions = {
      x: 'valid',
      y: 'also valid',
      z: 'this is a invalid input'
    }
    var invalidX = _.cloneDeep(validOptions)
    var invalidY = _.cloneDeep(validOptions)
    var invalidZ = _.cloneDeep(validOptions)

    invalidX.x = null
    invalidY.y = []
    invalidZ.z = {}

    function itShouldError (forString, options) {
      it('should return an error for ' + forString, function (done) {
        serveFunctionModule(options, function (error) {
          expect(error).to.be.an('error')

          done()
        })
      })
    }

    itShouldError('invalid x', invalidX)
    itShouldError('invalid y', invalidY)
    itShouldError('invalid z', invalidZ)

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
