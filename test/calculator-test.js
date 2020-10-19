//// Set constant variables
// Include the calculator.js file, which contains functions and exports their returns / results
const { sum, difference, quotient, product, summaryDetail } = require("../calculator");

//// TO DO: TESTS THAT SHOW MARKDOWN
echo summaryDetail("My Summary Content");

//// TESTS FOR SUM
QUnit.module('tests for sum');
QUnit.test('sum with two positive numbers', assert => {
   // this is where we write our test 
   assert.equal(sum(3, 4), 7, 'make sure 3 + 4 = 7');
   assert.equal(sum(2, 1), 3, 'make sure 2 + 1 = 3');
})
QUnit.test('sum with a negative and positive number', assert => {
   // this is where we write our test 
   assert.equal(sum(-3, 4), 1, 'make sure -3 + 4 = 1');
   assert.equal(sum(2, -1), 1, 'make sure 2 + (-1) = 1');
})
QUnit.test('sum with two negative numbers', assert => {
   // this is where we write our test 
   assert.equal(sum(-3, -4), -7, 'make sure -3 + (-4) = -7');
   assert.equal(sum(-2, -1), -3, 'make sure -2 + (-1) = -3');
})

//// TESTS FOR DIFFERENCE
QUnit.module('tests for difference');
QUnit.test('difference with two positive numbers', assert => {
    // this is where we write our test 
    assert.equal(difference(4, 4), 0, 'make sure 4 - 4 = 0');
    assert.equal(difference(12, 3), 9, 'make sure 12 - 3 = 9');
    assert.equal(difference(12, 0), 12, 'make sure x - zero is x');
 })

//// TESTS FOR PRODUCT
QUnit.module('tests for product');
QUnit.test('product with two positive numbers', assert => {
    // this is where we write our test 
    assert.equal(product(4, 4), 16, 'make sure 4 * 4 = 16');
    assert.equal(product(12, 3), 36, 'make sure 12 * 3 = 36');
    assert.equal(product(12, 0), 0, 'make sure anything * zero is zero');
 })
 
//// TESTS FOR QUOTIENT
QUnit.module('tests for quotient');
 QUnit.test('quotient with two positive numbers', assert => {
    // this is where we write our test 
    assert.equal(quotient(4, 4), 1, 'make sure 4/4 = 1');
    assert.equal(quotient(12, 3), 4, 'make sure 12/3 = 4');
    assert.equal(quotient(12, 0), Infinity, 'make sure dividing by zero is "not a number"');
 })
 
