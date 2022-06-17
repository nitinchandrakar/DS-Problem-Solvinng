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
        const newNode = {
            value: value,
            next : null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
}

const linkedList  = new SingleLinkList(1);
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)

console.log(linkedList)



