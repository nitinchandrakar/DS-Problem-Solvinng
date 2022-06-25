class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    equeue(value){
        const newNode = new Node(value);
        if(this.length==0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;

        return this;

    }

    dequeue(){
        if(this.length==0){
            return null;
        }

        if(this.first === this.last){
            this.last = null;
        }

        this.first = this.first.next;

        this.length--;
        return this;
    }

    lookup(){

    }
}

const queue = new Queue();
queue.equeue(1);
queue.equeue(2);
queue.equeue(3);

console.log(queue.equeue(4))
console.log(queue.peek())

console.log(queue.dequeue())
console.log(queue.peek())