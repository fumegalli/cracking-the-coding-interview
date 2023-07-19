const HashTable = require('./hash-table');

describe('Hash Table Tests', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  it('should add key-value pairs to the hash table', () => {
    hashTable.put('key1', 'value1');
    hashTable.put('key2', 'value2');

    expect(hashTable.size).toBe(2);
  });

  it('should retrieve values based on keys', () => {
    hashTable.put('key1', 'value1');
    hashTable.put('key2', 'value2');

    expect(hashTable.get('key1')).toEqual(['key1', 'value1']);
    expect(hashTable.get('key2')).toEqual(['key2', 'value2']);
  });

  it('should remove key-value pairs from the hash table', () => {
    hashTable.put('key1', 'value1');
    hashTable.put('key2', 'value2');

    hashTable.remove('key1');

    expect(hashTable.size).toBe(1);
    expect(hashTable.hasKey('key1')).toBe(false);
  });

  it('should return the correct size of the hash table', () => {
    hashTable.put('key1', 'value1');
    hashTable.put('key2', 'value2');

    expect(hashTable.size).toBe(2);

    hashTable.put('key3', 'value3');

    expect(hashTable.size).toBe(3);

    hashTable.remove('key2');

    expect(hashTable.size).toBe(2);
  });

  it('should check if the key exists in the hash table', () => {
    hashTable.put('key1', 'value1');
    hashTable.put('key2', 'value2');

    expect(hashTable.hasKey('key1')).toBe(true);
    expect(hashTable.hasKey('key3')).toBe(false);
  });

  it('should clear all entries from the hash table', () => {
    hashTable.put('key1', 'value1');
    hashTable.put('key2', 'value2');

    hashTable.clear();

    expect(hashTable.size).toBe(0);
    expect(hashTable.hasKey('key1')).toBe(false);
    expect(hashTable.hasKey('key2')).toBe(false);
  });

  it('should return undefined when trying to get a non-existing key', () => {
    hashTable.put('key1', 'value1');
    hashTable.put('key2', 'value2');

    expect(hashTable.get('key3')).toBeUndefined();
  });

  it('should not throw an error when trying to remove a non-existing key', () => {
    hashTable.put('key1', 'value1');
    hashTable.put('key2', 'value2');

    try {
      hashTable.remove('key3');
      throw new Error('Test fail: No error thrown');
    } catch(error) {
      expect(error.message).toEqual('Key not found');
      expect(hashTable.size).toBe(2);
    }
  });
});
