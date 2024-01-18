class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);

    if (
      !this.minStack.length ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }
  /**
   * @return {void}
   */
  pop() {
    if (this.stack.length) {
      const popped = this.stack.pop();

      if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
    }
  }
  /**
   * @return {number}
   */
  top(top) {
    return this.stack.length ? this.stack[this.stack.length - 1] : undefined;
  }
  /**
   * @return {number}
   */
  getMin(element) {
    return this.minStack.length
      ? this.minStack[this.minStack.length - 1]
      : undefined;
  }
}

/**
 * Your Minstack object will be instantiated and called as such:
 * let obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * const param_3 = obj.top();
 * const param_4 = obj.getMin();
 */
