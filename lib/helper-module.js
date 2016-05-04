/**
 * Example helper module for serve-function-module-template
 *
 * @private
 * @module helper-module
 */
;(function(){
    'use strict';

    /***************************************************************************
     * Imports
     */
    var typeCheck = require('type-check').typeCheck;

    module.exports = {
        add: add
    };

    /***************************************************************************
     * Define functions
     */

    /**
     * Adds its input arguments.
     *
     * @alias module:helper-module.add
     * @param {Array<String|Number>} summands things to be added
     * @returns {String|Number|Error} the sum of summands
     */
    function add(summands){

        var initialValue;

        if( typeCheck('[String]',summands) ){
            initialValue = '';
        } else if( typeCheck('[Number]',summands) ){
            initialValue = 0;
        } else {
            return new Error('invalid inputs');
        }

        var sum = summands.reduce(function(sum,argument){
            return sum + argument;
        },initialValue);

        return sum;
    }
})();