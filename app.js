function sumOfDifferences(arr) {
    if (arr.length <= 1) {
        return 0;
    } else {
        // let myArr = arr;
        // myArr.sort(function (b, a) {
        //     return a - b;
        // });
        // let sumA = myArr[0] - myArr[1];
        // let sumB = myArr[1] - myArr[2];
        // return sumA + sumB;
        return Math.abs(Math.min(...arr) - Math.max(...arr));
    }
}

console.log(sumOfDifferences([1, 2, 10])); // 9
console.log(sumOfDifferences([-3, -2, -1])); // 2