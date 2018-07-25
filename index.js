'use strict';
/**
 *@desc
 *@author wenzhe
 *@date 2018-07-09
 */
/**
 * 获取函数的形参个数
 * @param {Function} func [要获取的函数]
 * @return {*}       [形参的数组或undefind]
 */

module.exports = function (func) {
    if (typeof func == 'function') {
        var mathes = /[^(]+\(([^)]*)?\)/gm.exec(Function.prototype.toString.call(func));
        if (mathes[1]) {
            var args = mathes[1].replace(/[^,\w]*/g, '').split(',');
            return args;
        }
    }
};

