var levelOrder = function(root) {
    //iterate over node 
    var queue = [root];
    var result = [];
    while(queue.length) {
        if(root.left !== null) {
            queue.push(root.left);
        }
        if(root.right !== null) {
            queue.push(root.right);
        }
        var node = queue.shift();
        result.push(node.val);
    }
    return result;
}