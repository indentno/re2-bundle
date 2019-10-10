'use strict';

if (process.platform === 'linux') {
  var RE2 = require('./build/re2.linux.node');
} else {
  var RE2 = require('./build/re2.macos.node');
}

if (typeof Symbol != 'undefined') {
  Symbol.match &&
    (RE2.prototype[Symbol.match] = function(str) {
      return this.match(str);
    });
  Symbol.search &&
    (RE2.prototype[Symbol.search] = function(str) {
      return this.search(str);
    });
  Symbol.replace &&
    (RE2.prototype[Symbol.replace] = function(str, repl) {
      return this.replace(str, repl);
    });
  Symbol.split &&
    (RE2.prototype[Symbol.split] = function(str, limit) {
      return this.split(str, limit);
    });
}

module.exports = RE2;
