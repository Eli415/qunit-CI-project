//// Set constant variables
// Include the calculator.js file, which contains functions and exports their returns / results
const { sum, difference, quotient, product, summaryDetail } = require("../markdown");

//// These tests use Quinit and its modules to verify certain conditions then print details about passing / failing

//// TESTS THAT PRINT MARKDOWN (In GitHub Details Page)
QUnit.module('Test that writes markdown');
QUnit.test('Test that writes markdown on fail', assert => {
   // this is where we write our test
   // print markdown string from the summaryDetail function
   assert.equal(summaryDetail('My Summary Content', 'My Details Content'), "<details><summary>My Summary Content</summary>My Details Content</details>", 'Make sure your Summary Content and Summary Details match expected output.');
})

//// TESTS FOR SUM
QUnit.module('Tests for sum');
QUnit.test('Sum with two positive numbers', assert => {
   // this is where we write our test 
   assert.equal(sum(3, 4), 7, 'make sure 3 + 4 = 7');
   assert.equal(sum(2, 1), 3, 'make sure 2 + 1 = 3');
})