/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    
    // if(beginWord.length === 1) {
    //     return wordList[wordList.length - 1] === endWord ? wordList.length - 1 : 0
    // }
    
    //WordMap Pattern
    let patternToWordmap = {};
    for (let word of wordList) {
        if(word !== beginWord) {
        for (let i=0; i<word.length; i++) {
            const pattern = word.substring(0, i) + "*" + word.substring(i+1);
            addPatternToWord(pattern, word);
        }
        }
    }
    function addPatternToWord(pattern, word) {
        // if(patternToWordmap === null) {
        //     patternToWordmap = {}
        // }
        if(!patternToWordmap[pattern]) {
            patternToWordmap[pattern] = []
        }
        patternToWordmap[pattern].push(word)  
    }   
    
    function getNeighbors(word) {
        let wordArr = word.split("");
        let neighbors = [];
        
        for(let i=0; i<wordArr.length; i++) {
            let temp = wordArr[i];
            wordArr[i] = "*";
            let pattern = wordArr.join("");
            if(patternToWordmap[pattern]) {
                neighbors.push(...patternToWordmap[pattern])
            }
            wordArr[i] = temp;
        }
        return neighbors;
    }
    
    let q = [];
    let visitedWord = {};
    
    q.push(beginWord);
    visitedWord[beginWord] = 0 //step
    
    while(q.length) {
        let current = q.shift();
        if(current === endWord) {
            return visitedWord[current] + 1
        }
        
        let neighbors = getNeighbors(current);
        for (let neighbor of neighbors) {
            if(!visitedWord[neighbor]) {
                q.push(neighbor)
                visitedWord[neighbor] = visitedWord[current] + 1;
            }
        } 
        
    }
    return 0;
    
    

};