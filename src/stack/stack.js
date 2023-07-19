class Stack {
  items = [];

  push(newItem) {
    this.items = [ ...this.items, newItem ];
    return this.items.length;
  }

  pop() {
    if (this.items.length === 0) throw new Error('Stack is empty');
    const newLength = this.items.length - 1;
    const newItems = [];
    for (let i = 0; i < newLength; i++) {
      newItems.push(this.items[i]);
    }
    const removedElement = this.items[newLength];
    this.items = newItems;
    return removedElement;
  }

  peek() {
    if (this.items.length === 0) return null;
    return this.items[this.items.length - 1];
  }
}

module.exports = Stack;
