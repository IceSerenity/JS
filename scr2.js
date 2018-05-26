function useLibFn() {
    libFn();
}
useLibFn();

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
console.log(nnn);