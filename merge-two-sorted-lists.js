//21. Merge Two Sorted Lists
//https://leetcode.com/problems/merge-two-sorted-lists/
//  Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)
var list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)
function addToEnd(tail, val) {
    tail.next = new ListNode(val)
    tail = tail.next;
}
var mergeTwoLists = function(l1, l2) {
    if(l1 === null && l2 === null)
        return null
    if(l1 === null)
        return l2
    if(l2 === null)
        return l1

    var headNode = null;
    if(l1.val <= l2.val) {
        headNode = new ListNode(l1.val);
        tailNode = headNode;
        l1 = l1.next;
    }
    else {
        headNode = new ListNode(l2.val);
        tailNode = headNode;
        l2 = l2.next;
    }
   while(l1 !== null && l2 !== null) {
    if(l1.val <= l2.val) {
        console.log(tailNode);
        addToEnd(tailNode, l1.val);
        console.log(tailNode);
        //tailNode.next = new ListNode(l1.val)
        //tailNode = tailNode.next;
        l1 = l1.next;
    }
    else {
        tailNode.next = new ListNode(l2.val)
        tailNode = tailNode.next;
        l2 = l2.next;
    }
   }
   if(l1)
        tailNode.next = l1
   if(l2)
        tailNode.next = l2
   return headNode;
};
mergeTwoLists(list1, list2);