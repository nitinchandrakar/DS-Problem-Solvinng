class Node{
    constructor(value){
       this.value = value;
       this.next = null;
    }
}
class SingleLinkList{
    constructor(value){
        this.head = {
            value: value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value)

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        this.newNode.next = this.head;
        this.head = this.newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        let currentIndex = 0;
        let currentNode = this.head;
        const newNode = new Node(value)
        while(currentIndex<this.length){
            if(currentIndex ==  index){
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                this.length++;
                return this;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
    }

    remove(index){
        let currentIndex = 0;
        let prevIndex = index-1;
        let currentNode = this.head;

        while(prevIndex<this.length){
            if(currentIndex ==  prevIndex){
                let removeNode = currentNode.next;
                currentNode.next = removeNode.next;
                removeNode = null;
                this.length--;
                return this;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
    }

    printList(){
        let currentNode = this.head;
        const arr = [];
        let currentIndex = 0;
        while(currentIndex<this.length){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
            currentIndex++;
        }
        return arr;
    }

    reverse(){
        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while(second){
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;

        return this.printList();

    }

    detectLoop(){
        let slow = this.head;
        let fast = this.head;

        while(slow && fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast){
                return true
            }
        }

        return false;
    }

}

const linkedList  = new SingleLinkList(1);
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)
linkedList.insert(1,10)
linkedList.remove(1);
console.log(linkedList.printList())

linkedList.reverse();
console.log(linkedList.printList())

console.log(linkedList.detectLoop())



