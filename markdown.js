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
    var items = {
        "images" : ".jpg, .gif, .png",
        "bar" : 789012,
        "baz" : 345678,
        "bat" : 901234
      }
      var str = '';
      for(var index in items) {
        return( index + " : " + items[index] + "<br />");
      }
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
