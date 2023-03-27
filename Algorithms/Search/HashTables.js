// A hash table is a data structure that maps keys to values
// using a hash function to compute an index into an array
// of buckets or slots, from which the desired value can be found.

class HashTable {
  constructor() {
    this.size = 10;
    this.keys = new Array(this.size);
    this.values = new Array(this.size);
  }

  put(key, data) {
    let index = this.hashFunction(key);
    while (this.keys[index] !== undefined) {
      if (this.keys[index] === key) {
        this.values[index] = data;
        return;
      }
      index++;
      index %= this.size;
    }
    this.keys[index] = key;
    this.values[index] = data;
  }

  get(key) {
    let index = this.hashFunction(key);
    while (this.keys[index] !== undefined) {
      if (this.keys[index] === key) {
        return this.values[index];
      }
      index++;
      index %= this.size;
    }
    return undefined;
  }

  hashFunction(key) {
    let sum = 0;
    for (i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum % this.size;
  }
}

const t = new HashTable();
t.put("apple", 10);
t.put("orange", 20);
t.put("banana", 30);
console.log(t.get("orange"));
