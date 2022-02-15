// Filter method

// If you want to filter the data displayed to a user,
// you can use the filter method.
// The filter method is used to create a new array from an existing
// array that the filter method is called on.
//


// The filter method takes a function as an argument. This function receives each item in the array as an argument.
// If the function returns true, the item is added to the new array.

//example 1
 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('before: ', numbers)
const filterNumber = numbers.filter(filterNumbers) 
    function filterNumbers (number) {
        if (number > 5) {
            return true
        };
    }
console.log('after: ', filterNumber)

//example 2
const filterNumberstwo = [20, 40, 3, 56, 654, 323, 81, 32, 54, 76, 86, 42543, 54345, 654, 78654, 1];
//console.log('second example before: ', filteredNumberstwo);
function filteredNumberstwo(number) {
if(number % 2 === 0) {
    return true
    };
}
//console.log(' second examplefilterednumbers after: ', filteredNumberstwo);
