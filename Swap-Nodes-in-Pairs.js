//https://leetcode.com/problems/swap-nodes-in-pairs/
//Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
 }
/* */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let one = new ListNode(1)
one.next = new ListNode(2)
one.next.next = new ListNode(3)
var swapPairs = function(head) {
	//get last item in list
	if(head === null)
		return head
	let nodes = [head];
	while(head.next) {
		head = head.next;
		nodes.push(head)
	}
	//only one node
	if(nodes.length === 1)
		return head;
	//swaps and returns the new head
	function swap(firstNode, secondNode) {
		firstNode.next = secondNode.next
		secondNode.next = firstNode
		return secondNode
	}
	let startIndex;
	if(nodes.length % 2 === 0)
		startIndex = nodes.length -1;
	else
		startIndex = nodes.length - 2;
	//walk backwards, swapping as you go
	let newHead = null;
	for(let i = startIndex; i > -1; i= i-2) {
		if(newHead)
			nodes[i].next = newHead;
		newHead = swap(nodes[i-1], nodes[i]);
	}
	return newHead
};
var swapPairs = function(head) {
}
swapPairs(one)