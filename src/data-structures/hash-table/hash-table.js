class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  put(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this._hash(key);
    const itemToRemove = this.table[index];
    if (!itemToRemove) throw new Error('Key not found');
    delete this.table[index];
    this.size--;
  }

  hasKey(key) {
    const index = this._hash(key);
    return !!this.table[index];
  }

  clear() {
    this.table = [];
    this.size = 0;
  }
}

module.exports = HashTable;
