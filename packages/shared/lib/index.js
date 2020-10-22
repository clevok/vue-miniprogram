"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_clonedeep_1 = require("lodash.clonedeep");
var hasOwnProperty = Object.prototype.hasOwnProperty;
exports.hasOwn = function (val, key) {
    return hasOwnProperty.call(val, key);
};
exports.isArray = Array.isArray;
exports.isFunction = function (val) { return typeof val === 'function'; };
exports.isString = function (val) { return typeof val === 'string'; };
exports.isSymbol = function (val) { return typeof val === 'symbol'; };
exports.isObject = function (val) {
    return val !== null && typeof val === 'object';
};
exports.isPromise = function (val) {
    return exports.isObject(val) && exports.isFunction(val.then) && exports.isFunction(val.catch);
};
function freeze(value) {
    if (!exports.isObject(value)) {
        return value;
    }
    value = lodash_clonedeep_1.default(value);
    Object.keys(value).forEach(function (key) {
        value[key] = freeze(value[key]);
    });
    return value;
}
exports.freeze = freeze;
