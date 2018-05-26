document.addEventListener('DOMContentLoaded',function () {

function arrMin (arr) {
    var max = 10e15;
    for (var i = 0; i < arr.length; i ++){
        if (max > arr[i].length) {
            max = arr[i].length;
        }
    }
    return max;
}


var arr = [
    [1,2,3,4,5],
    [1,2,3,4],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6,7,8],
    [5,6,7],
    [1,2,3,4,5,6,6,6,7],
    [1,2,3,4,5,6,7,4,5,6,7]
];
var nnn = arrMin(arr);
for ( var i = 0; i <arr.length; i++) {
    document.write(arr[i].)
}





});
