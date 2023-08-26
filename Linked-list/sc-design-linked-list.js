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
    if (index == 0) {
      this.insertStart(data);
    } else if (index == this.length) {
      this.insertEnd(data);
    } else if (index < this.length) {
      let node = new Node(data);
      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }
      node.next = temp.next;
      temp.next = node;
      this.length = this.length + 1;
    }
  }

  insertStart(data) {
    let node = new Node(data);

    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length = this.length + 1;
  }

  insertEnd(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = node;
    }
    this.length = this.length + 1;
  }

  remove(index) {
    if (this.length - 1 == index) {
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
        if (temp.next != null) temp.next = temp.next.next;
      }
      this.length = this.length - 1;
    }
  }

  printList() {
    let list = "";
    let temp = this.head;
    while (temp != null) {
      let data = temp.data;
      if (temp.next == null) {
        list = list + data;
      } else {
        list = list + data + "->";
      }

      temp = temp.next;
    }

    return list;
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

    console.log(A[i]);
    console.log(linkedList.printList());
  }

  return linkedList.printList();
}

console.log(
  init([
    [1, 9, -1],
    [1, 4, -1],
    [2, 4, 2],
    [3, 1, -1],
    [1, 6, -1],
    [0, 15, -1],
    [0, 1, -1],
    [1, 5, -1],
    [3, 3, -1],
    [2, 16, 3],
    [0, 4, -1],
    [3, 4, -1],
    [3, 5, -1],
    [3, 1, -1],
    [1, 2, -1],
    [2, 16, 3],
    [0, 3, -1],
    [3, 4, -1],
    [0, 9, -1],
    [0, 2, -1],
    [2, 12, 7],
    [0, 12, -1],
    [0, 5, -1],
    [0, 6, -1],
    [3, 6, -1],
    [3, 1, -1],
    [2, 9, 0],
    [2, 7, 7],
    [0, 6, -1],
    [3, 11, -1],
    [3, 7, -1],
    [0, 15, -1],
    [3, 8, -1],
    [3, 6, -1],
    [2, 4, 8],
    [1, 8, -1],
    [1, 15, -1],
    [3, 12, -1],
    [2, 1, 1],
    [1, 15, -1],
    [3, 6, -1],
    [3, 7, -1],
    [0, 6, -1],
    [3, 1, -1],
    [2, 5, 11],
    [0, 1, -1],
    [1, 17, -1],
    [0, 4, -1],
    [0, 10, -1],
    [1, 5, -1],
    [1, 4, -1],
    [0, 18, -1],
    [3, 19, -1],
    [1, 3, -1],
    [3, 19, -1],
    [1, 20, -1],
    [2, 5, 15],
    [2, 4, 9],
    [1, 20, -1],
    [0, 16, -1],
    [3, 16, -1],
    [0, 13, -1],
    [1, 15, -1],
    [3, 21, -1],
    [2, 9, 8],
    [2, 7, 14],
    [2, 7, 5],
    [1, 2, -1],
    [1, 1, -1],
    [2, 19, 3],
    [1, 8, -1],
    [0, 9, -1],
    [3, 17, -1],
    [1, 14, -1],
    [0, 14, -1],
    [1, 20, -1],
    [1, 1, -1],
    [0, 13, -1],
    [2, 13, 33],
    [1, 1, -1],
    [2, 11, 29],
    [2, 4, 29],
    [2, 11, 31],
    [1, 12, -1],
    [2, 4, 23],
    [3, 38, -1],
    [1, 1, -1],
    [1, 16, -1],
    [3, 22, -1],
  ])
);

// console.log(
//   init([
//     [0, 13, -1],
//     [2, 10, 0],
//     [2, 7, 0],
//     [2, 4, 3],
//     [1, 20, -1],
//     [0, 4, -1],
//     [0, 15, -1],
//     [2, 9, 3],
//     [3, 5, -1],
//     [0, 11, -1],
//     [3, 1, -1],
//     [1, 20, -1],
//     [1, 8, -1],
//     [3, 5, -1],
//     [1, 14, -1],
//     [2, 4, 1],
//     [0, 9, -1],
//     [0, 13, -1],
//     [1, 5, -1],
//     [3, 8, -1],
//     [2, 5, 0],
//     [3, 7, -1],
//     [0, 14, -1],
//     [1, 19, -1],
//     [2, 3, 10],
//     [1, 3, -1],
//     [1, 18, -1],
//     [0, 13, -1],
//     [3, 16, -1],
//     [3, 0, -1],
//     [1, 4, -1],
//     [2, 1, 13],
//     [0, 5, -1],
//     [2, 17, 5],
//     [2, 17, 3],
//     [2, 7, 21],
//     [3, 15, -1],
//     [0, 15, -1],
//     [1, 19, -1],
//     [1, 4, -1],
//     [0, 7, -1],
//     [1, 4, -1],
//     [3, 5, -1],
//     [1, 11, -1],
//     [2, 15, 24],
//     [2, 17, 8],
//     [2, 15, 18],
//     [3, 2, -1],
//     [3, 17, -1],
//     [3, 21, -1],
//     [0, 15, -1],
//     [0, 13, -1],
//     [0, 11, -1],
//     [3, 7, -1],
//     [1, 16, -1],
//     [1, 4, -1],
//     [1, 7, -1],
//     [0, 20, -1],
//     [1, 11, -1],
//     [2, 1, 6],
//     [2, 8, 9],
//     [0, 3, -1],
//     [3, 25, -1],
//     [3, 9, -1],
//   ])
// );
