//Follows this tutorial here: 
//https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3

class Node{
    constructor(data, next = null) {
        this.data = data, 
        this.next = next
        this.stupid = "andrew";
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

LinkedList.prototype.insertAtBeginning = function(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
}
LinkedList.prototype.insertAtEnd = function(data) {
    let newNode = new Node(data);
    if(this.head === null) {
        this.head = newNode;
        return this.head;
    }
    let tail = this.head;
    while(tail.next !== null) {
        tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
}
LinkedList.prototype.getAt = function(index) {
    let counter = 0;
    let node = this.head;
    while(node) {
        if(counter == index) {
            return node;
        }
        counter++;
        node = node.next;
    }
    return null;
}
LinkedList.prototype.insertAt = function(data, index) {
    if(!this.head) {
        this.head = new Node(data);
        return;
    }
    if(index === 0) {
        this.head = new Node(data, this.head);
        return;
    }
    const previous = this.getAt(index - 1);
    let newNode = new Node(data);
    newNode.next = previous.next
    previous.next = newNode;
    return this.head;
}

let list = new LinkedList();