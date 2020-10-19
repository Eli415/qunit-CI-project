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

// Markdown functions
// Summary / Detail
// TO DO: set up to take 2 args
function summaryDetail(a) {
    return "<details><summary>" + a + "</summary>My details content</details>";
}

// Summary / Detail - Function to call later will be like: createSummaryDetailsSection("My summary content", "My details content")
//function createSummaryDetailsSection(summary, details){
//    return "<details><summary>" + summary "</summary>" + details + "</details>";
//}

// Make the following things (i.e., { sum, subtract } ) 
// available to the outside world
module.exports = {
    sum,
    difference,
    product,
    quotient,
    summaryDetail
}; 
