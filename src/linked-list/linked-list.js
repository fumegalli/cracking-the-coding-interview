class LLNode {
  next;
  data;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head;

  constructor() {
    this.head = null;
  }

  append(newNode) {
    if (!this.head) {
      this.head = newNode;
      return newNode;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return newNode;
  }

  insert(newNode, index) {
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        for (let i = 0; i < index - 1; i += 1) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
  }

  delete(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i += 1) {
        current = current.next;
      }
      const deletedNode = current.next;
      current.next = deletedNode.next;
    }
  }

  log() {
    let current = this.head;
    let log = 'Head: ';
    while (current !== null) {
      log += `${current.data} -> `;
      current = current.next;
    }
    log += 'null';
    console.log(log);
  }
}

module.exports = { LLNode, LinkedList };
