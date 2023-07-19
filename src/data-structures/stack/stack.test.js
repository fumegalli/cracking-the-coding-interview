const Stack = require('./stack');

describe('Stack Tests', () => {
  describe('push', () => {
    it('should push a new item to the stack', () => {
      const stack = new Stack();
    
      const length = stack.push(4);
    
      expect(length).toEqual(1);
      expect(stack.items[0]).toEqual(4);
    });
  });

  describe('pop', () => {
    it('should throw error when pop an empty stack', () => {
      const stack = new Stack();
    
      try {
        stack.pop();
        throw new Error('Test fail: No error thrown');
      } catch(error) {
        expect(error.message).toEqual('Stack is empty');
      }
    });
    
    it('should pop the last element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
    
      const removedElement = stack.pop();
    
      expect(removedElement).toEqual(2);
      expect(stack.items.length).toEqual(1);
      expect(stack.items[0]).toEqual(1);
    });
  });

  describe('peek', () => {
    it('should return null when stack is empty', () => {
      const stack = new Stack();

      const topItem = stack.peek();

      expect(topItem).toBeNull();
    });

    it('should return the top element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);

      const topItem = stack.peek();

      expect(stack.items.length).toEqual(2);
      expect(topItem).toEqual(2);
    });
  });
});


