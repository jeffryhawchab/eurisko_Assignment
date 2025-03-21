function findMissingNumber(arr) {
    var n = arr.length + 1;
    var expectedSum = (n * (n + 1)) / 2;
    var actualSum = 0;
    for (var i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 4, 5, 6]));
