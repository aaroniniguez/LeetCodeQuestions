//https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 function ListNode(val) {
	this.val = val;
	this.next = null;
 }

 let newNode = new ListNode(1);
var removeNthFromEnd = function(head, n) {
	//basic sol: go to end and then fix pointer of deleted item
	let nodeArray = [head];
	while(head.next !== null) {
		head = head.next;
		nodeArray.push(head)
	}
	let index = nodeArray.length - n
	if(index > 0)
		nodeArray[index - 1].next = nodeArray[index+1] || null;
	nodeArray.splice(index, 1)
	if(nodeArray.length == 0)
		return null
	else
		return nodeArray[0]
};
removeNthFromEnd(newNode, 1)