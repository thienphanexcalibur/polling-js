const poll = require('./dist/polling.js');

const assert = require('assert');

describe('check export', () => {
  it('should be typeof function', function () {
    assert.strictEqual(typeof poll, 'function');
  });
});




