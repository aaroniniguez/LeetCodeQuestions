// Definition for a Node.
function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};
/**
 * @param {Node} node
 * @return {Node}
 */

 //dictionary with node index being the node number
var cloneNode = function(node, copyNodes) {
	//if it already exists, dont need to create it...
	if(copyNodes[node.val]) {
		return copyNodes[node.val];
	}
	else
		copyNodes[node.val] = new Node(node.val);
	//copy neighbors
	let neighbors = node.neighbors;
	let clonedNeighbors = []
	neighbors.forEach((neighborNode) => {
		clonedNeighbors.push(cloneNode(neighborNode, copyNodes));
	});
	//save copy
	copyNodes[node.val].neighbors = clonedNeighbors;
	return copyNodes[node.val];
}
var cloneGraph = function(node) {
	if(node === null)
		return node
	let copyNodes = []; 
	let copyNode = cloneNode(node, copyNodes);
	return copyNode;
};
//let node3 = new Node(3)
//let node5 = new Node(5)
//let node1 = new Node(1, [node3, node5]);

//cloneGraph(node1)