/*
    Reverse a singly linked list using recursion.
    Example:
    Input: 1 -> 2 -> 3 -> null
    Output: 3 -> 2 -> 1 -> null
*/

var reverseListRecurisve = function(head){
	
	if(head == null || head.next == null){
		return head;
	}
	
	let rev_list = reverseListRecurisve(head.next);
	head.next.next = head;
	head.next = null;

	return rev_list;
}

exports.reverseListRecurisve = reverseListRecurisve;