// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.0
// This file is automatically generated by "node/_tools/setup.ts". Do not modify this file manually

'use strict';

// Tests below are not from WPT.
require('../common');
const assert = require('assert');

const ref = new URL('http://example.com/path');
const url = new URL('http://example.com/path');
assert.throws(() => {
  url.href = '';
}, {
  name: 'TypeError'
});

assert.deepStrictEqual(url, ref);