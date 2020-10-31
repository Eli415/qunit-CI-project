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

   // To test: each of these will be returned as an array: Items[], Prices[], Quantity[]

   QUnit.test('3 Column Table', assert => {

      // breakdown into 3 arrays
      // TO DO: pass headers to function from here. i.e., ["Item", "Price", "Qty"]
      var names = ['🍇 Grapes', '🍐 Pears', '🍋 Lemons']; // item names into an array
      var prices = ['$2.99', '$4.15', '$0.99']; // prices into an array
      var quantities = ['3', '1', '2']; // prices into an array

      var allTheThings = [ names, prices, quantities ]; // put all other arrays into this one
 
       // write our test & print markdown string
      assert.equal(ThreeColumnTable( names, prices, quantities ), // note: 2 params getting passed in
      "| Item | Price | Qty ||---|---|---|🍇 Grapes | ,$2.99 | ,3 |🍐 Pears | ,$4.15 | ,1 |🍋 Lemons | ,$0.99 | ,2 |", 
      'Make sure your 3 Column Table data: Item, Price and Quantity match expected output.'
      );
  

   })

// 10/27
 /*
   QUnit.test('3 Column Table', assert => {
      // write our test & print markdown string
      var headers = ["Item", "Price", "Qty"]; // this in 1 dimensional / list; break up into steps, get col and go down the rows...
      var values = [ // this is 2 dimensional / a table
         ["🍇 Grapes", "$2.99", 3], // commas are between values (when coming after ], they sep the arrays)
         ["🍐 Pears", "$4.15", 1],
         ["🍋 Lemons", "$0.99", 2],
         ["🍍 Pineapples" , "$4.89" , 6]
       ];
      assert.equal(ThreeColumnTable( headers, values ), // note: 2 params getting passed in
      "| Item | Price | Qty ||---|---|---|🍇 Grapes | ,$2.99 | ,3 |🍐 Pears | ,$4.15 | ,1 |🍋 Lemons | ,$0.99 | ,2 |", 
      'Make sure your 3 Column Table data: Item, Price and Quantity match expected output.'
      );
   })
   */

   /*
   QUnit.test('3 Column Table', assert => {
      // write our test & print markdown string
      assert.equal(ThreeColumnTable('My Item', 'My Price', 'My Quantity'),
      "| Item | Price | Qty ||---|---|---|🍇 Grapes | ,$2.99 | ,3 |🍐 Pears | ,$4.15 | ,1 |🍋 Lemons | ,$0.99 | ,2 |", 
      'Make sure your 3 Column Table data: Item, Price and Quantity match expected output.'
      );
   })
   */