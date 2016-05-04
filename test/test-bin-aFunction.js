/**
 * Tests for bin/aFunction
 */
;(function () {
    /* global describe, it, before */
    "use strict";

    /***************************************************************************
     * Imports
     */
    var exec = require('child_process').exec;

    var expect = require('chai').expect;

    /***************************************************************************
     * Tests
     */
    describe('bin/aFunction', function () {

        it('should work with valid command line parameters', function (done) {

            exec('./bin/aFunction -x a -y b -z c', function (error, stdout, stderr) {

                expect(error).to.be.null;

                expect(stderr).to.be.empty;

                expect(stdout.trim()).to.equal('abc');

                done();
            });
        });

        it('should error with invalid command line parameters', function (done) {

            exec('./bin/aFunction -x a -y b', function (error, stdout, stderr) {

                expect(error).to.be.null;

                expect(stdout).to.be.empty;

                expect(stderr).to.not.be.empty;

                done();
            });
        });
    });
})();
