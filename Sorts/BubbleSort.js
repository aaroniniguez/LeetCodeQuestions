function  swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function BubbleSort(sortThis) {
    var i =0; 
    var swapped = false;
    do {
        //reached end of array
        if(i+1 >= sortThis.length) {
            //ifswapped is true restart else return
            if(swapped){
                i = -1;
                swapped = false;
            }
            else
                return sortThis;
        }
        if(sortThis[i] < sortThis[i+1]) {
            swap(sortThis, i, i+1);
            swapped = true;
        }
        i ++;
    }
    while (true)
 }
var assert = require('assert');
assert.deepEqual([3,2], BubbleSort([2,3]));
assert.deepEqual([], BubbleSort([]));
assert.deepEqual([5,4,3,2,1], BubbleSort([1,2,3,5,4]));
assert.deepEqual([2], BubbleSort([2]));
assert.deepEqual([-1], BubbleSort([-1]));