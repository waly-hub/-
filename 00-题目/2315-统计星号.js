/**
 * 给你一个字符串 s ，每 两个 连续竖线 '|' 为 一对 。换言之，第一个和第二个 '|' 为一对，第三个和第四个 '|' 为一对，以此类推。

请你返回 不在 竖线对之间，s 中 '*' 的数目。

注意，每个竖线 '|' 都会 恰好 属于一个对。
 */

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    // 判断是否有*
    if(s.indexOf('*') === -1) return 0
    // 标志是否在竖线之间
    let isInLine = false
    const arr = []
    for (let i = 0;i<s.length;i++) {
        // 左边竖线
        if (s[i] === '|' && !isInLine) {
            isInLine = true
        }else if (s[i] === '|' && isInLine) {
            // 右边竖线
            isInLine = false
        } else {
            // 判断中间内容
            if (!isInLine) {
                arr.push(s[i])
            }
        }
    }
    let num = 0
    for(let i =0;i<arr.length;i++) {
        if (arr[i] === '*') {
            num += 1
        }
    }
    return num
};