/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function (logs) {
  const digLogs = [];
  const letLogs = [];
  
  for (let log of logs) {
    let data = log.split(" ")[1];
    
    if (!isNaN(data)) {
      digLogs.push(log);
    } else {
      letLogs.push(log)
    }
  }  
  
  letLogs.sort((a, b) => {
    const contentA = a.slice(a.indexOf(" ") + 1);
    const contentB = b.slice(b.indexOf(" ") + 1);
    return contentA === contentB ? a.localeCompare(b) : contentA.localeCompare(contentB);
  })
  
  return [...letLogs, ...digLogs]
}
