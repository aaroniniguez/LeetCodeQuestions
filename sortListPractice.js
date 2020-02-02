
//use quick sort


function partition(arr, pivot, left) {
	let pivotVal = arr[pivot];
	let partitionIndex = left;
	//what is left...
	for(let i = left; i < pivot; i ++) {
		if(arr[i] < pivotVal) {
			swap(arr, i, partitionIndex);	
			partitionIndex++
		}
	}
	swap(arr, pivot, partitionIndex);
	return partitionIndex;
}
function sort(arr, left, right) {
	let pivot, partitionIndex;
	if(left < right) {
		pivot = right;
		let partitionIndex = partition(arr, pivot, left)
		sort(arr, left, partitionIndex-1);
		sort(arr, partitionIndex+1, right);

	}
	return arr;
}
function quickSort(arr) {
	sort(arr, 0, arr.length -1);
	console.log(arr);
} 
quickSort([1,2,34,23,1])

function swap(arr, i, j){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
 }