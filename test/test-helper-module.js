/**
 * Tests for helper
 */
;(function () {
  /* global describe, it */
  'use strict'

  /* Imports */
  var expect = require('chai').expect

  var helper = require('../lib/helper')

  /* Tests */
  describe('helper', function () {
    describe('add', function () {
      it('should add numbers', function () {
        var result = helper([1, 2, 3])

        var expectedResult = 6

        expect(result).to.equal(expectedResult)
      })

      it('should add strings', function () {
        var result = helper(['a', 'b', 'c'])

        var expectedResult = 'abc'

        expect(result).to.equal(expectedResult)
      })
    })
  })
})()
