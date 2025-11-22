const { reverseListRecurisve } = require('../reverse_list_recursive');

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Helper function to create linked list from array
function createList(arr) {
    if (arr.length === 0) return null;
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array for easy comparison
function listToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.value);
        current = current.next;
    }
    return arr;
}

describe('reverseListRecurisve', () => {
    test('reverses a list with multiple elements', () => {
        const head = createList([1, 2, 3]);
        const reversed = reverseListRecurisve(head);
        expect(listToArray(reversed)).toEqual([3, 2, 1]);
    });

    test('reverses a single element list', () => {
        const head = createList([1]);
        const reversed = reverseListRecurisve(head);
        expect(listToArray(reversed)).toEqual([1]);
    });

    test('reverses a two element list', () => {
        const head = createList([1, 2]);
        const reversed = reverseListRecurisve(head);
        expect(listToArray(reversed)).toEqual([2, 1]);
    });

    test('handles empty list (null)', () => {
        const reversed = reverseListRecurisve(null);
        expect(reversed).toBeNull();
    });

    test('reverses a longer list', () => {
        const head = createList([1, 2, 3, 4, 5]);
        const reversed = reverseListRecurisve(head);
        expect(listToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
    });

    test('returns new head correctly', () => {
        const head = createList([1, 2, 3]);
        const reversed = reverseListRecurisve(head);
        expect(reversed.value).toBe(3);
        expect(reversed.next.value).toBe(2);
        expect(reversed.next.next.value).toBe(1);
        expect(reversed.next.next.next).toBeNull();
    });

    test('handles list with duplicate values', () => {
        const head = createList([1, 2, 2, 1]);
        const reversed = reverseListRecurisve(head);
        expect(listToArray(reversed)).toEqual([1, 2, 2, 1]);
    });
});