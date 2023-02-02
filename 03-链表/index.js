class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    // 链表尾端添加数据
    append(ele) {
        const node = new LinkNode(ele)
        if (this.length === 0) {
            this.head = node
        }else {
            let currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next

            }
            currentNode.next = node
        }
        this.length += 1
    }

    // toString
    toString() {
        let result = ''
        let currentNode = this.head
        while(currentNode) {
            result += currentNode.data + ' '
            currentNode = currentNode.next
        }
        return result
    }

    // 链表插入数据
    insert(position,ele){
        // 边界判断
        if (position < 0 || position > this.length) return false
        // 当前节点
        let currentNode = this.head
        // 前一个节点
        let prevNode = null
        // 指针
        let index = 0
        // 要添加的数据
        const node = new LinkNode(ele)
        if (position === 0) {
            node.next = this.head
            this.head = node
        }else {
            while(index++ < position) {
                prevNode = currentNode
                currentNode = currentNode.next
            }
            prevNode.next = node
            node.next = currentNode
        }
        // 添加数据后长度需要加一
        this.length += 1
        return true
    }

    // 获取链表指定位置元素
    get(position) {
        // 边界判断
        if (position < 0 || position >= this.length) return null
        let currentNode = this.head
        let index = 0
        
        while(index++ < position) {
            currentNode = currentNode.next
        }
        return currentNode.data
    }

    // 删除链表指定位置元素
    removeAt(position) {
        // 边界判断
        if (position < 0 || position >= this.length) return false
        let index = 0
        let currentNode = this.head
        let prevNode = null
        if(position === 0) {
            currentNode = currentNode.next
            this.head = currentNode
        }else {
            while(index++ < position) {
                prevNode = currentNode
                currentNode = currentNode.next
            }
            prevNode.next = currentNode.next
        }
        this.length -= 1
        return true

    }

    // 删除链表最后一个元素
    remove() {
        if (this.length < 1) return false
        return this.removeAt(this.length -1)
    }

    // 判断链表中是否有ele，有则返回链表位置，无则返回-1
    indexOf(ele) {
        let result = -1
        let index = 0
        let currentNode = this.head
        while(index < this.length) {
            if(currentNode.data === ele) {
                result = index
                break
            }else {
                currentNode = currentNode.next
            }
            index++
        }
        return result
    }

    // 更新链表指定位置元素
    update(position,ele){
        if (position < 0 || position >= this.length) return false
        let index = 0
        let currentNode = this.head
        if (position === 0) {
            currentNode.data = ele
        }else {
            while(index++ < position) {
                currentNode = currentNode.next
            }
            currentNode.data = ele
        }
        return true
    }

    // 链表是否为空
    isEmpty() {
        return this.length === 0
    }

    // 链表长度
    size() {
        return this.length
    }
}

class LinkNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

const list = new LinkedList()
list.append('abc')
list.append('cba')
list.append('nba')
list.insert(3,'123')
console.log(list.remove());
console.log(list.toString());
console.log(list.indexOf('cba'));
console.log(list.update(2,'abb'));
console.log(list.toString());
