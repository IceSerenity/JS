function libFn() {
    console.log('libFn');
}

function arrMin (arr) {
    var max = 10e15;
    for (var i = 0; i < arr.length; i ++){
        if (max > arr[i].length) {
            max = arr[i].length;
        }
    }
    return max;
}