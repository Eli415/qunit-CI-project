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

/*
function descriptionList([
    {
        title: "Images", 
        description: ".jpg, .gif, .png"
    },
    {
        title: "Styles", 
        description: ".css"
    },
    {
        title: "Scripts", 
        description: ".js"
    },
    {
        title: "Documents", 
        description: ".html"
    }
  ]);
*/

//var theList = []; // Create new array object
 function descriptionList() {
    var str = ''; // Create string to hold parts of the array and shape into markdown
    var items = { // Create (psuedo)associative array
        "images" : ".jpg, .gif, .png",
        "styles" : ".css", // index / name : value / element
        "scripts" : ".js",
        "documents" : ".html"
      }
      for(var index in items) {
        str += index + " : " + items[index] + "</dl>";
      }
      return str;
 };

// Make the following things (i.e., { sum, subtract } ) 
// available to the outside world
module.exports = {
    sum,
    difference,
    product,
    quotient,
    summaryDetail,
    descriptionList
}; 
