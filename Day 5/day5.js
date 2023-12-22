// Day 5
// Arrays, Array Methods (push, pop, map, filter), and Iteration

// Task: Create an array of numbers. Use the `map()` method to double each number, and then use the `filter()` method to keep only the even numbers.
// Finally, use a loop to print the resulting array.

let numbers = [4, 5, 6, 7, 8, 9];
let doubleNumbers = numbers.map(function(double){
    return double * double;
});
let evenNumbers = doubleNumbers.filter(function(even){
    return even % 2 === 0;
});
evenNumbers.forEach(function(evenNumber){
    console.log(evenNumber);
});

// ouput: 16
          36
          64

          