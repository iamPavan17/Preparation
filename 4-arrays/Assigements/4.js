/*
Write a JavaScript function to find the unique elements from two arrays. 

Test Data :
1. difference([1, 2, 3], [100, 2, 1, 10]);
return ["1", "2", "3", "10", "100"]

2. difference([1, 2, 3], [100, 2, 1, 10]); 
return ["1", "2", "3", "10", "100"]
*/

function difference(arr1, arr2) {
    var arr = arr1.concat(arr2);
    // console.log(arr)
    for(var i = 0; i < arr.length; i++) {
        var ele = arr[i];
        for(j = i+1; j < arr.length; j++) {
            if(ele == arr[j]) {
                arr.splice(j, 1)
            }
        }
    }
    return arr;
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));    //return ["1", "2", "3", "10", "100"]