/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

class DSU {
  constructor(n) {
    this.parents = Array(n).fill().map((_, i) => i);
    this.ranks = Array(n).fill(1);
  }
  
  find(e) {
    let p = this.parents[e];
    while (p !== this.parents[p]) {
      this.parents[p] = this.parents[this.parents[p]];
      p = this.parents[p];
    }
    return p;
  }

  union(n1, n2) {
    let p1 = this.find(n1);
    let p2 = this.find(n2);
    
    if (p1 === p2) {
      return false;
    }
    
    if (this.ranks[p1] > this.ranks[p2]) {
      this.parents[p2] = p1;
      this.ranks[p1] += this.ranks[p2];
    } else {
      this.parents[p1] = p2;
      this.ranks[p2] += this.ranks[p1];
    }
    return true;
  }
}
var accountsMerge = function(accounts) {
  let n = accounts.length;
  let dsu = new DSU(n);
  let emailToIdx = {};
  
  for (let i = 0; i < accounts.length; i++) {
    let emails = accounts[i].slice(1);
    for (let email of emails) {
      if (!(email in emailToIdx)) {
        emailToIdx[email] = i;
      } else {
        dsu.union(i, emailToIdx[email]);
      }
    }
  }
  
  //idx to unique email
  let uniqueEmails = {};
  
  for (let email in emailToIdx) {
    if (!(uniqueEmails[dsu.find(emailToIdx[email])])) {
      uniqueEmails[dsu.find(emailToIdx[email])] = new Set();
    }
    uniqueEmails[dsu.find(emailToIdx[email])].add(email);
  }
  
  let res = [];
  
  for (let idx in uniqueEmails) {
    let emails = [...uniqueEmails[idx]].sort();
    res.push([accounts[idx][0], ...emails]);
  }
  return res;
};