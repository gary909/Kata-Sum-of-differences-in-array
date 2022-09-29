function sumOfDifferences(arr) {
    if (arr.length <= 1) {
        return 0;
    } else {
        return Math.abs(Math.min(...arr) - Math.max(...arr));
    }
}

console.log(sumOfDifferences([1, 2, 10])); // 9
console.log(sumOfDifferences([-3, -2, -1])); // 2