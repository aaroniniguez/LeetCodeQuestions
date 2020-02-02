function ListNode(val) {
	this.val = val;
	this.next = null;
}
/**
* @param {ListNode} head
* @return {ListNode}
*/


let myarray = [1,2,3];
quickSort(myarray, 0, myarray.length-1);
function quickSort(arr, left, right) {
	var len = arr.length, 
	pivot, 
	partitionIndex;

	if(left < right) {
		pivot = right;
		partitionIndex = partition(arr, pivot, left, right);

		quickSort(arr, left, partitionIndex -1);
		quickSort(arr, partitionIndex+1, right);
	}
	return arr;
}

function partition(arr, pivot, left, right) {
	var pivotValue = arr[pivot],
	//partition index is where the next smallest value is going to be 
	partitionIndex = left;

	for(var i = left; i < right; i++) {
		if(arr[i] < pivotValue) {
			swap(arr, i , partitionIndex);
			partitionIndex++;
		}
	}
	swap(arr, right, partitionIndex);
	return partitionIndex;
}

function swap(arr, i, j){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
 }