//// Set constant variables
// Include the calculator.js file, which contains functions and exports their returns / results
const { sum, difference, quotient, product, summaryDetail, descriptionList, ThreeColumnTable } = require("../markdown");

//// These tests use Quinit and its modules to verify certain conditions then print details about passing / failing

//// TESTS FOR MARKDOWN - PRINT TO GITHUB WEB DETAILS

QUnit.module('Markdown test(s)');

   QUnit.test('Summary / Detail Panel', assert => {
      // write our test & print markdown string
      assert.equal(summaryDetail('My Summary Content', 'My Details Content'), 
      "<details><summary>My Summary Content</summary>My Details Content</details>", 
      'Make sure your Summary Content and Summary Details match expected output.'
      );
   })

   QUnit.test('Description List', assert => {
      // write our test & print markdown string
      assert.equal(descriptionList([
         {title: "Images", description: ".jpg, .gif, .png"},
         {title: "Styles", description: ".css"},
         {title: "Documents", description: ".html"}
       ]),
      "<dl><dt>Images</dt><dd>.jpg, .gif, .png</dd><dt>Styles</dt><dd>.css</dd><dt>Documents</dt><dd>.html</dd></dl>", 
      'Make sure your Description List array is working as expected.'
      );
   })

   QUnit.test('Description List (0 Items!)', assert => {
      // write our test & print markdown string
      assert.equal(descriptionList([
       ]),
      "<dl></dl>", // this or null
      'Zero items.'
      );
   })

   ThreeColumnTable(["Item", "Price", "Qty"], [
      ["🍇 Grapes", "$2.99", 3],
      ["🍐 Pears", "$4.15", 1],
      ["🍋 Lemons", "$0.99", 2],
      ["🍍 Pineapples | " , "$4.89 | " , 6]
    ]);

   /*
   QUnit.test('3 Column Table', assert => {
      // write our test & print markdown string
      assert.equal(ThreeColumnTable('My Item', 'My Price', 'My Quantity'),
      "| Item | Price | Qty ||---|---|---|🍇 Grapes | ,$2.99 | ,3 |🍐 Pears | ,$4.15 | ,1 |🍋 Lemons | ,$0.99 | ,2 |", 
      'Make sure your 3 Column Table data: Item, Price and Quantity match expected output.'
      );
   })
   */