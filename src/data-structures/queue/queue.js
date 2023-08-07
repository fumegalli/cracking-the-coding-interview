class Queue {
  items = [];

  enqueue(newItem) {
    this.items = [ ...this.items, newItem ];
    return this.items.length;
  }

  dequeue() {
    if (this.items.length === 0) throw new Error('Queue is empty');
    const newItems = [];
    for (let i = 1; i < this.items.length; i++) {
      newItems.push(this.items[i]);
    }
    const removedElement = this.items[0];
    this.items = newItems;
    return removedElement;
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = Queue;
