//https://leetcode.com/problems/linked-list-cycle/
function listNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function(head) {
    if(head === null)
        return false;
    var node1 = head;
    var node2 = head.next;
    while(node1 !== null && node2 !== null) {
        if(node1.val == node2.val)
            return true;
        else {
            node1 = node1.next;
            node2 = node2.next;
            if(node2 !== null)
                node2 = node2.next;
        }
    }
    return false;
}