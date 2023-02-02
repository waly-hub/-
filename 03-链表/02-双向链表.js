class DoubleNode {
    constructor(data) {
        this.data = data 
        this.next = null
        this.prev = null
    }
}

// 封装双向链表
class DoublyLinkListed {
    constructor() {
        this.head = null 
        this.tail = null
        this.length = 0
    }

    // 链表后端添加元素
    append(ele) {
        const newNode = new DoubleNode(ele)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        }else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length += 1
    }

    // 链表由后向前遍历打印
    forwordString() {
        let currentNode = this.tail
        let resultString = ''
        while(currentNode){
            resultString += currentNode.data + ' '
            currentNode = currentNode.prev
        }
        return resultString
    }

    // 链表由前向后遍历打印
    backwordString() {
        let currentNode = this.head
        let resultString = ''
        while(currentNode){
            resultString += currentNode.data + ' '
            currentNode = currentNode.next
        }
        return resultString
    }

    toString() {
        return this.backwordString()
    }

    // 在指定位置插入元素
    insert(position,ele) {
        const newNode = new DoubleNode(ele)
        // 边界判断
        if(position < 0 || position > this.length) return false

        // 链表原本没有数据
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        }else {
            // 判断插入位置
            // 1、在头部插入
            if(position === 0) {
                this.head.prev = newNode
                newNode.next = this.head
                this.head = newNode
            }else if (position === this.length) {
                // 尾部插入
                this.tail.next = newNode
                newNode.prev = this.tail
                this.tail = newNode
            }else {
                // 3、在中间插入
            // 由后往前插入
            if (position >= this.length / 2) {
                let index = this.length
                let currentNode = this.tail
                while(index-- > position){
                    currentNode = currentNode.prev
                }
                newNode.prev = currentNode
                newNode.next = currentNode.next
                currentNode.next.prev = newNode
                currentNode.next = newNode

            }else {
                // 由前往后
                let index = 0
                let currentNode= this.head
                while(index++ < position) {
                    currentNode = currentNode.next
                }
                newNode.next = currentNode
                newNode.prev = currentNode.prev
                currentNode.prev.next = newNode
                currentNode.prev = newNode
            }
            }
            
            
        }
        // 长度加一
        this.length += 1
        return true
    }
    // 删除指定位置元素
    removeAt(position) {
        // 边界判断
        if(position < 0 || position >=this.length) {
            return false
        }
        let currentNode = null
        if(position === 0) {
            // 删除头
            currentNode = this.head
            currentNode.next.prev = null
            this.head = currentNode.next
            currentNode.next = null
        }else if (position === this.length -1) {
            // 删除尾
            currentNode = this.tail
            currentNode.prev.next = null
            this.tail = currentNode.prev
            currentNode.prev = null
        }else {
            // 删除中间
            if(position >= this.length /2) {
                // 由后往前
                currentNode = this.tail
                let index = this.length
                while(index-- > position) {
                    currentNode = currentNode.prev
                }
                // 要被删除的元素
                let removeNode = currentNode.next
                currentNode.next = removeNode.next
                removeNode.next.prev = currentNode
                removeNode.next = null
                removeNode.prev = null

            }else {
                currentNode = this.head
                let index = 0
                while(index++ < position) {
                    currentNode = currentNode.next
                }
                // 要被删除的元素的上一个元素
                let prevNode = currentNode.prev
                prevNode.next = currentNode.next
                currentNode.next.prev = prevNode
                currentNode.next = null
                currentNode.prev = null
            }
        }
        this.length -= 1
        return true
    }

    // 删除链表尾部元素
    remove() {
        if (this.length < 1) return false
        return this.removeAt(this.length - 1)
    }

    // 获取指定位置的元素
    get(position) {
        // 边界判断
        if (position < 0 || position >= this.length){
            return null
        }else {
            if (position >= (this.length) / 2) {
                // 由后往前
                let currentNode = this.tail
                let index = this.length
                while(index-- > position) {
                    currentNode = currentNode.prev
                }
                return currentNode.next.data
            }else {
                // 由前往后
                let currentNode = this.head
                let index = 0
                while(index++ < position) {
                    currentNode = currentNode.next
                }
                return currentNode.data
            }
        }

    }

    // 返回链表中元素的位置
    indexOf(ele) {
        let result = -1
        let currentNode = this.head
        let index = 0
        while(currentNode) {
            if(currentNode.data === ele) {
                result = index
                break
            }else {
                currentNode = currentNode.next
                index++
            }
        }
        return result
    }

    // 返回链表长度
    size() {
        return this.length
    }

    // 判断链表是否为空
    isEmpty() {
        return this.length === 0
    }

}

const double = new DoublyLinkListed()
double.append(1)
double.append(2)
double.append(3)
double.insert(0,'aaa')
console.log(double.insert(1,'abc'));
console.log(double.insert(5,'ccc'));
console.log(double.removeAt(0));
console.log(double.removeAt(4));
console.log(double.removeAt(1));
console.log(double.removeAt(1));
console.log(double.removeAt(0));
console.log(double.forwordString());
console.log(double.backwordString());