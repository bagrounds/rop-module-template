/**
 * Tests for serve-function-module-template
 */
;(function () {
  /* global describe, it, before */
  'use strict'

  /* Imports */
  var expect = require('chai').expect
  var _ = require('lodash')

  var serveFunctionModule = require('../serve-function-module-template')

  /* Tests */
  describe('serve-function-module-template', function () {
    var validOptions
    var invalidX
    var invalidY
    var invalidZ

    before(function () {
      validOptions = {
        x: 'valid',
        y: 'also valid',
        z: 'this is a invalid input'
      }

      invalidX = _.cloneDeep(validOptions)
      invalidY = _.cloneDeep(validOptions)
      invalidZ = _.cloneDeep(validOptions)

      invalidX.x = null

      invalidY.y = []

      invalidZ.z = {}
    })

    it('should return an error for invalid x', function (done) {
      serveFunctionModule(invalidX, function (error) {
        expect(error).to.be.an('error')

        done()
      })
    })

    it('should return an error for invalid y', function (done) {
      serveFunctionModule(invalidY, function (error) {
        expect(error).to.be.an('error')

        done()
      })
    })

    it('should return an error for invalid z', function (done) {
      serveFunctionModule(invalidZ, function (error) {
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
