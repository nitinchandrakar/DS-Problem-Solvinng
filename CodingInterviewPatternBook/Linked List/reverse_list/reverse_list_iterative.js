/*
Reverse a singly linked list iteratively.

Example:
Input: 1 -> 2 -> 3 -> null
Output: 3 -> 2 -> 1 -> null
*/

var reverseListIterative = function(head){
	let prev_node = null;
	let curr_node = head;

	while(curr_node){
		let next_node = curr_node.next;
		curr_node.next = prev_node;
		prev_node = curr_node
		curr_node = next_node
	}

	return prev_node;
}


exports.reverseListIterative = reverseListIterative;      