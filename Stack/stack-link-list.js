class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top
    }

    push(value){
        const newNode = new Node(value);
        if(this.length==0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
           const currentTop = this.top;
            this.top = newNode;
            this.top.next = currentTop;
        }

        this.length++;
    }

    pop(){
        if(!this.top){
            null;
        }

        if(this.top===this.bottom){
            this.bottom = null;
        }
        const currentPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop())