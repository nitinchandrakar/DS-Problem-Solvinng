class StackToQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  equeue(value) {
    if (this.first.length > 0) {
      for (let i = 0; i < this.first.length; i++) {
        this.last.push(this.first.pop());
      }
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    if (this.last.length > 0) {
      for (let i = 0; i < this.last.length; i++) {
        this.first.push(this.last.pop());
      }
    }
    this.first.pop();
    return this;
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const queue = new StackToQueue();
queue.equeue(1);
queue.equeue(2);
queue.equeue(3);
queue.equeue(4);
queue.equeue(5);
queue.equeue(6);

console.log(queue.peek())
