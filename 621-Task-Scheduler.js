//https://leetcode.com/problems/task-scheduler/
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

 function createTaskObj(tasks) {
    var newObj = {};
    tasks.forEach((val, i) => {
        if(!newObj[val])
            newObj[val] = 1;
        else 
            newObj[val] += 1;
    });
    return newObj;
 }
var leastInterval = function(tasks, n) {
    var output = 0;
   var nLeft = {};
   var taskObj = createTaskObj(tasks);
    while(Object.keys(taskObj).length) {
        let distinctTasks = Object.keys(taskObj);
        for(var i =0 ; i < distinctTasks.length;i ++) {
            let currentTask = distinctTasks[i];
            console.log("\n"+currentTask)
            //get keys
            let nLeftTasks = Object.keys(nLeft);
            let temp = 1;
            if(nLeft[currentTask] > 0)
                temp = temp + nLeft[currentTask];
            for(var j = 0; j < nLeftTasks.length; j ++) {
                let currentKeysN = nLeftTasks[j];
                if(currentKeysN == currentTask && nLeft[currentKeysN] > 0) {
                    output += nLeft[currentKeysN];
                    nLeft[currentKeysN] = 0;
                }
                else {
					nLeft[currentKeysN] -= temp;
                }
                console.log(nLeft);
            }
			nLeft[currentTask] = n;
            console.log(nLeft);
            output += 1;
            taskObj[currentTask]--;
            if(taskObj[currentTask] == 0) {
                delete taskObj[distinctTasks[i]]
                //console.log(newObj);
            }
        }

    }
    console.log(output);
    console.log(taskObj);
    return output;
};
var tasks = ["A","A","A","B","B","B"];
var n = 2;
var tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"]
var n = 2
leastInterval(tasks, n);