//// Set constant variables
// Include the calculator.js file, which contains functions and exports their returns / results
const { sum, difference, quotient, product, summaryDetail, descriptionList } = require("../markdown");

//// These tests use Quinit and its modules to verify certain conditions then print details about passing / failing

//// TESTS FOR MARKDOWN - PRINT TO GITHUB WEB DETAILS
QUnit.module('Test that writes markdown');
QUnit.test('Markdown test: Summary / Detail Panel', assert => {
   // write our test & print markdown string
   assert.equal(summaryDetail('My Summary Content', 'My Details Content'), 
   "<details><summary>My Summary Content</summary>My Details Content</details>", 
   'Make sure your Summary Content and Summary Details match expected output.'
   );
})
QUnit.test('Markdown test: Description List', assert => {
   // write our test & print markdown string
   assert.equal(descriptionList(), "<dl><dt>images</dt><dd>.jpg, .gif, .png</dd><dt>styles</dt><dd>.css</dd><dt>scripts</dt><dd>.js</dd><dt>documents</dt><dd>.html</dd></dl>");
})