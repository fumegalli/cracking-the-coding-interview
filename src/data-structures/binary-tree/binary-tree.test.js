const BTree = require('./binary-tree');

describe('Binary Tree Tests', () => {
  let tree;

  beforeEach(() => {
    tree = new BTree();
  });

  describe('insert', () => {
    it('should insert the first node as the root', () => {
      tree.insert(5);

      expect(tree.root.value).toBe(5);
    });

    it('should insert smaller values to the left and greater to the right', () => {
      tree.insert(5);
      tree.insert(3);
      tree.insert(7);

      expect(tree.root.left.value).toBe(3);
      expect(tree.root.right.value).toBe(7);
    });

    it('should insert values correctly in a complex tree', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(3);
      tree.insert(7);
      tree.insert(12);
      tree.insert(18);
      tree.insert(20);

      expect(tree.root.value).toBe(10);
      expect(tree.root.left.value).toBe(5);
      expect(tree.root.right.value).toBe(15);
      expect(tree.root.left.left.value).toBe(3);
      expect(tree.root.left.right.value).toBe(7);
      expect(tree.root.right.left.value).toBe(12);
      expect(tree.root.right.right.value).toBe(18);
      expect(tree.root.right.right.right.value).toBe(20);
    });
  });

  describe('search', () => {
    it('should return true for a value present in the tree', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(3);
      tree.insert(7);
      tree.insert(12);
      tree.insert(18);
      tree.insert(20);

      expect(tree.search(7)).toBe(true);
      expect(tree.search(20)).toBe(true);
      expect(tree.search(15)).toBe(true);
    });

    it('should return false for a value not present in the tree', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);

      expect(tree.search(3)).toBe(false);
      expect(tree.search(20)).toBe(false);
      expect(tree.search(8)).toBe(false);
    });
  });

  describe('pre order traversal', () => {
    it('should return the correct pre-order traversal sequence', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(3);
      tree.insert(7);

      expect(tree.preOrderTraversal()).toEqual([10, 5, 3, 7, 15]);
    });
  });

  describe('in order traversal', () => {
    it('should return the correct in-order traversal sequence', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(3);
      tree.insert(7);

      expect(tree.inOrderTraversal()).toEqual([3, 5, 7, 10, 15]);
    });
  });

  describe('post order traversal', () => {
    it('should return the correct post-order traversal sequence', () => {
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(3);
      tree.insert(7);

      expect(tree.postOrderTraversal()).toEqual([3, 7, 5, 15, 10]);
    });
  });
});
