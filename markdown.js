function sum(a, b) {
    return (a + b);
}
function difference(a, b) {
    return a - b;
}
function product(a, b) {
    return a * b;
}
function quotient(a, b) {
    return a / b;
}

// MARKDOWN FUNCTIONS
// 1). Summary / Detail
function summaryDetail(a, b) {
    return "<details><summary>" + a + "</summary>" + b + "</details>";
}

// 2). Description List
 function descriptionList(items) {
    var str = '<dl>'; // Create string to hold parts of the array and shape into markdown
      for(var item of items) {
        str += "<dt>" + item.title + "</dt><dd>" + item.description + "</dd>";
      }
      str += "</dl>";
      return str;
 };

 // 3). 3 Column Table
 // TO DO: items, price and qty need to be passed in as outside args
 /* TO DO: couple extra tests. What if:
        1. No rows in table result
        2. One array is empty
        3. Both arrays empty
        4. mismatch in headers v. rows (what if someone added a header or not enough cols / items)
 */

function threeColumnTable( names, prices, qty ) { // function takes 3 params, which are each arrays

      let col3 = names.reduce((acc, name, index) => { // this is a method that takes a value that can be an array (or nested array); https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        acc += `${name} | ${prices[index]} | ${qty[index]} |`;
        return acc;
      }, ' ');

      return `| Item | Price | Qty ||---|---|---| ${ col3 }`;
 };

// 10/26
/*
 function ThreeColumnTable(items, prices, qty) { // function takes 3 arrays. These are set up in markdown-test.js
    var str2 = '| Item | Price | Quantity |';
    str2 += '|---|---|---|'; 
      var i;
      for (i = 0; i < items.length; i++) { // loop through inner / nested array for values  
        // add to string
        str2 += items[[i]] + " |";
    }
      //return items[[1]];
      return str2;
 };
 */

 /*
function ThreeColumnTable(item, price, quantity) {
    var str2 = '| Item | Price | Qty |';
    str2 += '|---|---|---|'; 
    var items = [ // Create array. This is an array literal
        ["🍇 Grapes | " , "$2.99 | " , 3],
        ["🍐 Pears | " , "$4.15 | " , 1],
        ["🍋 Lemons | " , "$0.99 | " , 2]
    ]
    var i;
    for (i = 0; i < items.length; i++) {
        str2 += items[[i]] + " |"; // + "<br>" or \n
    }
    //return items[[1]];
    return str2;
};
*/

 // EXPORTS
// Make the following things (e.g., sum, summaryDetail, etc.) available to the outside world
// Note: these are functions; doesn't look like variables need this treatment
module.exports = {
    sum,
    difference,
    product,
    quotient,
    summaryDetail,
    descriptionList,
    threeColumnTable
}; 
