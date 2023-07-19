const Queue = require('./queue');

describe('Queue Tests', () => {
 describe('enqueue', () => {
  it('should add an item to the end of the queue', () => {
    const queue = new Queue();
    const item1 = 1;

    const length = queue.enqueue(item1);

    expect(length).toEqual(1);
    expect(queue.items[0]).toEqual(item1);
  });
 });

 describe('dequeue', () => {
  it('should throw error when queue is empty', () => {
    const queue = new Queue();
  
    try {
      queue.dequeue();
      throw new Error('Test fail: No error thrown');
    } catch(error) {
      expect(error.message).toEqual('Queue is empty');
    }
  });

  it('should dequeue the first element inserted in the queue', () => {
    const queue = new Queue();
    const item1 = 1;
    const item2 = 2;
    queue.enqueue(item1);
    queue.enqueue(item2);

    const removedElement = queue.dequeue();

    expect(removedElement).toEqual(item1);
    expect(queue.items.length).toEqual(1);
    expect(queue.items[0]).toEqual(item2);
  });
 });

 describe('peek', () => {
  it('should return the first element of the queue', () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(30);
    queue.enqueue(20);

    const firstItem = queue.peek();

    expect(firstItem).toEqual(10);
  });
 });
});