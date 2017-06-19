/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var assert = require('assert');
var buf = require('./');

var ff = buf.from.hex('ff');

assert(Buffer.isBuffer(ff));
assert(!Buffer.isBuffer(buf.to.hex(ff)));
assert.equal(buf.to.hex(ff), 'ff');

var unicode = buf.from.utf8('ff');
assert.equal(buf.to.hex(unicode), '6666');

console.log('Passes.');
