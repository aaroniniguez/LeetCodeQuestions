//https://www.geeksforgeeks.org/merge-sort-for-linked-list/
class linkedList {
    consructor() {
        this.head = null;
    }
}
function node(nodeVal) {
    this.value = nodeVal;
    this.next = null;
}

var sortList = function(head) {
    if(head == null) {
        return null;
    }

    var len = 0;
    var p = head;
    //get last node
    while(p) {
        len++;
        p = p.next;
    }

    var newHead = sort(len);
    return newHead;

    function sort(len) {
        if(len === 1) {
            var temp = head;
            head = head.next;
            temp.next = null
        }
    }
}

