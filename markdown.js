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
function summaryDetail(a, b) {
    return "<details><summary>" + a + "</summary>" + b + "</details>";
}
// Summary / Detail
function summaryDetail(a, b) {
    return "<details><summary>" + a + "</summary>" + b + "</details>";
}

// Make the following things (i.e., { sum, subtract } ) 
// available to the outside world
module.exports = {
    sum,
    difference,
    product,
    quotient,
    summaryDetail
}; 
