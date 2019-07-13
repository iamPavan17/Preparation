/*   Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
Sample array : clearArray([NaN, 0, 15, false, -22, '',undefined, 47, null])
Expected result : [15, -22, 47] */

function clearArray(arr) {
    var arr1 = [];
    for(i = 0; i < arr.length; i++) {
        if(arr[i]){
            var ele = arr.splice(i, 1);
            arr1.push(ele[0])       
        }
    }
    return arr1;
}

console.log(clearArray([NaN, 0, 15, false, -22, '',undefined, 47, null]));