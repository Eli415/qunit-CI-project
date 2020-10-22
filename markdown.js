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
// Summary / Detail
function summaryDetail(a, b) {
    return "<details><summary>" + a + "</summary>" + b + "</details>";
}

// Description List
 function descriptionList() {
    var str = '<dl>'; // Create string to hold parts of the array and shape into markdown
    var items = { // Create array. This is an array object, and it is (psuedo) associative.
        "images" : ".jpg, .gif, .png", // index / name / key : value / element
        "styles" : ".css", 
        "scripts" : ".js",
        "documents" : ".html"
      }
      for(var index in items) {
        str += "<dt>" + index + "</dt><dd>" + items[index] + "</dd>";
      }
      str += "</dl>";
      return str;
 };

 // 3 Column Table
 // TO DO: Add new lines
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

 // EXPORTS
// Make the following things (e.g., sum, summaryDetail, etc.) available to the outside world
module.exports = {
    sum,
    difference,
    product,
    quotient,
    summaryDetail,
    descriptionList,
    ThreeColumnTable
}; 
