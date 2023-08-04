const { LLNode, LinkedList } = require('./linked-list');

describe('Linked List Tests', () => {
  it('should create a node', () => {
    const node = new LLNode(10);
  
    expect(node.data).toEqual(10);
    expect(node.next).toBeNull();
  });

  it('should create an empty linked list', () => {
    const linkedList = new LinkedList();
  
    expect(linkedList.head).toBeNull();
  });

  describe('append', () => {
    it('should append a node to an empty linked list', () => {
      const node = new LLNode(10);
      const linkedList = new LinkedList();
    
      linkedList.append(node);
    
      expect(linkedList.head).toEqual(node);
      expect(node.next).toBeNull();
    });
    
    it('should append a node to a non-empty linked list', () => {
      const node1 = new LLNode(10);
      const newNode = new LLNode(20);
      const linkedList = new LinkedList();
      linkedList.append(node1);
    
      linkedList.append(newNode);
    
      expect(linkedList.head).toEqual(node1);
      expect(node1.next).toEqual(newNode);
      expect(newNode.next).toBeNull();
    });
  });

  describe('insert', () => {
    it('should insert node in first index', () => {
      const node1 = new LLNode(10);
      const node2 = new LLNode(20);
      const linkedList = new LinkedList();
      linkedList.append(node1);
      linkedList.append(node2);
      const newHead = new LLNode(30);
    
      linkedList.insert(newHead, 0);
    
      expect(linkedList.head).toEqual(newHead);
      expect(newHead.next).toEqual(node1);
      expect(node1.next).toEqual(node2);
    });
    
    it('should insert node in any position greater than 0', () => {
      const node1 = new LLNode(10);
      const node2 = new LLNode(20);
      const linkedList = new LinkedList();
      linkedList.append(node1);
      linkedList.append(node2);
      const newNode = new LLNode(30);
    
      linkedList.insert(newNode, 1);
    
      expect(linkedList.head).toEqual(node1);
      expect(node1.next).toEqual(newNode);
      expect(newNode.next).toEqual(node2);
      expect(node2.next).toBeNull();
    });
  });

  describe('delete', () => {
    it('should delete the head node', () => {
      const node1 = new LLNode(10);
      const node2 = new LLNode(20);
      const linkedList = new LinkedList();
      linkedList.append(node1);
      linkedList.append(node2);
    
      linkedList.delete(0);
    
      expect(linkedList.head).toEqual(node2);
    });
    
    it('should delete the node of a given index greater than 0', () => {
      const node1 = new LLNode(10);
      const node2 = new LLNode(20);
      const node3 = new LLNode(30);
      const linkedList = new LinkedList();
      linkedList.append(node1);
      linkedList.append(node2);
      linkedList.append(node3);
    
      linkedList.delete(1);
    
      expect(linkedList.head).toEqual(node1);
      expect(node1.next).toEqual(node3);
      expect(node3.next).toBeNull();
    });
  });
});
