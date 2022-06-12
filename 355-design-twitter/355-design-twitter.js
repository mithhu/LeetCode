
class Twitter {
  constructor() {
    this.count = 0;
    this.tweetMap = {};
    this.followMap = {};
  }
  
  postTweet(userId, tweetId) {
    if (!(userId in this.tweetMap)) {
      this.tweetMap[userId] = [];
    }
    this.tweetMap[userId].push([this.count, tweetId]);
    this.count++;
  }
  
  getNewsFeed(userId) {
    let res = [];
    let maxHeap = new MaxPriorityQueue({priority: (elem) => elem[0]});
    
    if (!(userId in this.followMap)) {
      this.followMap[userId] = new Set();
    }
      this.followMap[userId].add(userId); 
      for (let followeeId of this.followMap[userId]) {
        if (followeeId in this.tweetMap) {
          let idx = this.tweetMap[followeeId].length - 1;
          let [count, tweetId] = this.tweetMap[followeeId][idx];
          maxHeap.enqueue([count, tweetId, followeeId, idx - 1]);
        }
      }
    
      while (maxHeap.size() && res.length < 10) {
        let [count, tweetId, followeeId, idx] = maxHeap.dequeue().element;
        res.push(tweetId);
        if (idx >= 0) {
          let [count, tweetId] = this.tweetMap[followeeId][idx];
          maxHeap.enqueue([count, tweetId, followeeId, idx - 1]);
        }
      }
    
    return res;
    
  };
  
  follow(followerId, followeeId) {
    if (!(followerId in this.followMap)) {
      this.followMap[followerId] = new Set();
    }
    this.followMap[followerId].add(followeeId);
  }
  
  unfollow(followerId, followeeId) {
    if (followerId in this.followMap && this.followMap[followerId].has(followeeId)) {
      this.followMap[followerId].delete(followeeId);  
    }
  }    
};




/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */