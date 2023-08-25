// Definition for singly-linked list.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(data, index) {
    if (index < this.length) {
      let node = new Node(data);
      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }

      node.next = temp.next;
      temp.next = node;
      this.length = this.length + 1;
    } else if (index == 0) {
      this.insertStart(data);
    } else if (index == this.length) {
      this.insertEnd(data);
    }
  }

  insertStart(data) {
    let node = new Node(data);

    if (this.tail == null) {
      this.tail = this.head;
    }
    node.next = this.head;
    this.head = node;
    this.length = this.length + 1;
  }

  insertEnd(data) {
    let node = new Node(data);
    if (this.tail != null) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = this.head;
    }
    this.length = this.length + 1;
  }

  remove(index) {
    if ((this.length-1 == index )) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else if (index < this.length) {
      let temp = this.head;
      if (index == 0) {
        temp = temp.next;
        this.head = temp;
      } else {
        for (let i = 0; i < index - 1; i++) {
          temp = temp.next;
        }
        temp.next = temp.next.next;
      }
      this.length = this.length - 1;
    }
  }
}

function init(A) {
  let linkedList = new LinkedList();
  for (let i = 0; i < A.length; i++) {
    if (A[i][0] == 0) {
      linkedList.insertStart(A[i][1]);
    } else if (A[i][0] == 1) {
      linkedList.insertEnd(A[i][1]);
    } else if (A[i][0] == 2) {
      linkedList.insert(A[i][1], A[i][2]);
    } else if (A[i][0] == 3) {
      linkedList.remove(A[i][1]);
    }
  }

  return linkedList.head;
}

console.log(
  init([
    [0, 1, -1],
    [0, 2, -1],
    [0, 3, -1],
    [0, 3, -1],
    [0, 4, -1],
    [1, 6, -1],
    [2, 10, 1],
    // [0, 4, -1],
    [3, 0, -1],
    [3, 2, -1],
  ])
);
