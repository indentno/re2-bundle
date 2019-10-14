# re2-bundle

https://github.com/uhop/node-re2 built for Linux and MacOS

```js
'use strict';

var RE2 = require('./build/re2.v10.16.3.linux.node');

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
```