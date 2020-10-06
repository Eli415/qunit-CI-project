const { add } = require('../add.js');

QUnit.module('add');

QUnit.test('add two numbers', assert => {
    assert.equal(add(1, 1), 2, '1 + 1 = 2');
});
