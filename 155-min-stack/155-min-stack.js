class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    this.stack.push(val);
    this.minStack.push(Math.min(val, this.minStack.length ? this.minStack.at(-1) : Infinity));
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack.length ? this.stack.at(-1) : null;
  }

  getMin() {
    return this.minStack.length ? this.minStack.at(-1) : null;
  }
} 
