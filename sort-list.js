 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function getListLength(head, nodes) {
	let length = 0;
	currentNode = head;
	while(currentNode !== null) {
		length += 1;
		nodes.push(currentNode);
		currentNode = currentNode.next;
	}
	return length;
}

function merge(array1, array2) {
	let newArray = [];
	while(array2.length || array1.length) {
		if(array2.length == 0 && array1.length) {
			newArray = [...newArray, ...array1]
			return newArray;
		}
		if(array1.length == 0 && array2.length) {
			newArray = [...newArray, ...array2]
			return newArray
		}
		if(array1[0].val <= array2[0].val)
			newArray.push(array1.shift());
		else 
			newArray.push(array2.shift());	
	}
	return newArray;
}


function sort(nodes) {
	if(nodes.length === 1)
		return nodes;
	//now split linked list in two
	let leftHalf = nodes.slice(0, parseInt(nodes.length/2));
	let sortedLeftHalf = sort(leftHalf)
	let rightHalf = nodes.slice(parseInt(nodes.length/2));
	let sortedRightHalf = sort(rightHalf);
	//now merge...
	let sorted = merge(sortedLeftHalf, sortedRightHalf);
	return sorted;

}
var sortList = function(node) {
	if(node === null)
		return node 
	let nodes = []
	getListLength(node, nodes);
	nodes = sort(nodes)
	for(let i =0; i < nodes.length;i ++ ) {
		if(nodes[i+1] === undefined)
			nodes[i].next = null;
		else 
			nodes[i].next = nodes[i+1];
	}
	return nodes[0];
};

//let node1 = new ListNode(4);
//let node2 = new ListNode(3);
//node1.next = node2
//let node3 = new ListNode(5);
//node1.next.next = node3
//let node4 = new ListNode(2);
//node1.next.next.next = node4
//sortList(node1);