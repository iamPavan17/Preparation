// circular rotation on an array.
// Test case:
    // a = [1,2,3]
    // rotate = 4;
    // 1 --- a = [2,3,1] = max is at index 1 
    // 2 --- a = [3,1,2] = 0
    // 3 --- a = [1,2,3] = 2
    // 4 --- a = [2,3,1] = 1

    // o/p: [1,0,2,1]

var arr = [1,2,3];
var rotate = 4;
// var rotateArr = [];

function maxElementArray(arr) {
    let max = arr[arr.length-1];
    let index = (arr.length -1);
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
            index = i;
        }
    }
    return index;
}

function getMaxIndex(arr, rotate) {
    let maxIndex = [];
    for(let i = 0; i < rotate; i++) {
        let ele = arr.splice(0, 1);
        arr.push(ele[0]);
        maxIndex.push(maxElementArray(arr));   
    }
   console.log(maxIndex);
}

getMaxIndex(arr, rotate)