// 封装栈的常用方法
class Stack {
    constructor() {
        this.items = []
    }
    // 入栈
    push(element) {
        this.items.push(element)
    }
    // 出栈
    pop(element) {
        return this.items.pop(element)
    }
    // 查询栈顶数据
    peek(){
        return this.items[this.items.length - 1]
    }
    // 判断栈是否为空
    isEmpty(){
        return this.items.length === 0
    }
    // 获取栈中元素个数
    size() {
        return this.items.length
    }
    // toString方法
    toString() {
        return this.items.join(' ')
    }
}
// const s1 = new Stack()
// s1.push(1)
// s1.push(2)
// s1.push(3)
// console.log(s1.pop());
// console.log(s1.peek());
// console.log(s1.size());
// console.log(s1.isEmpty());
// console.log(s1.toString());

// 十进制转二进制
function decToBin(n) {
    const s1 = new Stack()
    if (n < 0) {
        throw new Error('不能小于0') 
    } 
    else if (n === 0) s1.push(0)
    else {
        let tmp = n
        while(tmp > 0) {
            s1.push(tmp % 2)
            tmp = Math.floor(tmp / 2)
        }
    }
    // let arr = []
    // let size = s1.size()
    // for(let i = 0;i<size;i++) {
    //     arr.push(s1.pop())
    // }
    // return arr.join('')
    let bin = ''
    while(!s1.isEmpty()) {
        bin += s1.pop()
    }
    return bin
}
console.log(decToBin(30));