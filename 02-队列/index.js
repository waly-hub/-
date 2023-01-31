// 队列封装
class Queue {
    constructor() {
        this.items = []
    }
    // 将元素添加进入队列
    enqueue(element) {
        this.items.push(element)
    }
    // 将元素从队列中移除
    dequeue() {
        return this.items.shift()
    }
    // 返回队列是否为空
    isEmpty() {
        return this.items.length === 0
    }
    // 返回队列首个元素
    front() {
        return this.items[0]
    }
    // 返回队列元素个数
    size() {
        return this.items.length
    }
    // toString
    toString() {
        return this.items.join(' ')
    }
}

// 封装优先级队列
class PriorityQueue {
    constructor() {
        this.items = []
    }
    // 将元素添加进入队列
    enqueue(priority,element) {
        const priEle = new PriorityElement(priority,element)
        if(this.items.length === 0) {
            this.items.push(priEle)
            return
        }
        for (let i =0;i<this.items.length;i++) {
            if (priEle.priority > this.items[i].priority) {
                continue
            }else {
                this.items.splice(i,0,priEle)
                return
            }

        }
        this.items.push(priEle)
    }
    toString() {
        let ele = ''
        this.items.forEach(item => {
            ele += `${item.priority}-${item.element} `
        })
        return ele
    }
}
class PriorityElement {
    constructor(priority,element) {
        this.priority = priority
        this.element = element
    }
}

const q1 = new PriorityQueue()
q1.enqueue(10,'abc')
q1.enqueue(12,'aac')
q1.enqueue(9,'c')
q1.enqueue(11,'qqq')
q1.enqueue(5,'xxqqq')
q1.enqueue(7,'ssqqq')
console.log(q1.toString());