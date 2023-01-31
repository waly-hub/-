/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = []
    const left = '({['
    const right = ')}]'
    const reLeft = /[\(\{\[]/
    const reRight = /[\)\]\}]/

    for (let i = 0;i<s.length;i++) {
        if (reLeft.test(s[i])) {
            arr.push(s[i])
        }else if (reRight.test(s[i])) {
            if (arr.length === 0) {
                return false
                
            }
            else if (s[i] === ')' && arr[arr.length - 1] !== '(') {
                return false
            }else if (s[i] === '}' && arr[arr.length - 1] !== '{') {
                return false
            }else if (s[i] === ']' && arr[arr.length - 1] !== '[') {
                return false
            }else {
                arr.pop()
            }

        }
    }
    return arr.length === 0
};

console.log(isValid("{[]}"));
