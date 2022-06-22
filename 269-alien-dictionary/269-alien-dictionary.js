/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  let adj = {};
  for (let w of words) {
    for (let c of w) {
      adj[c] = new Set()
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i];
    let w2 = words[i + 1];
    let minLen = Math.min(w1.length, w2.length);
    if (w1.length > w2.length && 
      w1.slice(0, minLen) === w2.slice(0, minLen)) {
      return "";
    }
    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        adj[w1[j]].add(w2[j]);
        break;
      } 
    }
  }

  let res = [];
  let visit = new Set();
  let cycle = new Set()

  function dfs(c) {
    if (cycle.has(c)) {
      return false;
    }
    if (visit.has(c)) {
      return true;
    }
    cycle.add(c);

    for (let nei of adj[c]) {
      if (!dfs(nei)) {
        return false;
      }
    }
    cycle.delete(c);
    visit.add(c);
    res.push(c);
    return true;
  }

  for (let c in adj) {
    if (!dfs(c)) {
      return "";
    }
  }

  return res.reverse().join("");
    
};

