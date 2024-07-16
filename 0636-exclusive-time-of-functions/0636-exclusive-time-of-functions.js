/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const execTimes = Array(n).fill(0);
    let prevStartTime = 0;
    let stack = [];
    
    for (let log of logs) {
        const [id, type, timestamp] = log.split(":");
        const timeStamp = parseInt(timestamp);
        if (type === "start") {
            if (stack.length > 0) {
                execTimes[stack[stack.length - 1]] += timeStamp - prevStartTime;
            }
            stack.push(parseInt(id));
            prevStartTime = parseInt(timeStamp);
        } else {
            execTimes[stack.pop()] += timeStamp - prevStartTime + 1; 
            prevStartTime = timeStamp + 1;
        }
    }
    
    return execTimes;
    
};