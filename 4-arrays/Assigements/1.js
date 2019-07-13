/*  Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 


Test Data
first([7, 9, 0, -2]) ; // returns 7 
first([],3); // returns []
first([7, 9, 0, -2],3); // returns [7, 9, 0] 
first([7, 9, 0, -2],6)); // returns [7, 9, 0, -2] 
first([7, 9, 0, -2],-3); returns [7,9,0,-2]
*/

function first(arr, n) {
    if(n > 0) {
        return arr.slice(0,n);
    } 
    else if(n < 0) {
        return arr;
    }
    else {
        return arr[0];
    }   
}

console.log(first([7, 9, 0, -2]));// returns 7 
console.log(first([],3));// returns []
console.log(first([7, 9, 0, -2],3)); // returns [7, 9, 0] 
console.log(first([7, 9, 0, -2],6));    // returns [7, 9, 0, -2] 
console.log(first([7, 9, 0, -2],-3));   //returns [7,9,0,-2]