/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = String(x).split('')
    console.log('1111',arr);
    while(arr[arr.length - 1] === 0) {
        arr.pop()
    }
    console.log('222',arr);
    let isFu = false
    if(arr[0] === '-') {
        arr.shift()
        isFu = true
    }
    arr = arr.reverse()
    console.log('333',arr);
    if (isFu) {
        arr.unshift('-')
    }
    return Math.abs(Number(arr.join(''))) > 2 ** 31 ? 0 : Number(arr.join(''))
};

console.log(reverse(1534236469));