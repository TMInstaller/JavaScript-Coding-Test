// Greedy algorithms are used to solve optimization problems
// by making the locally optimal choice at each step with
// the hope of finding global optimum. Huffman coding is a
// lossless data compression algorithm that uses a greedy algorithm
// to construct a prefix code for a given set of symbols

function huffmanEncoding(data) {
  const freqCounter = {};
  for (let char of data) {
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }

  const priorityQueue = new PriorityQueue();
  for (let char in freqCounter) {
    priorityQueue.enqueue(new HuffmanNode(char, freqCounter[char]));
  }

  while (priorityQueue.size() > 1) {
    const leftNode = priorityQueue.dequeue();
    const rightNode = priorityQueue.dequeue();
    const combinedFreq = leftNode.freq + rightNode.freq;
    priorityQueue.enqueue(
      new HuffmanNode(null, combinedFreq, leftNode, rightNode)
    );
  }

  const huffmanCode = {};
  generateCode(priorityQueue.peek(), "", huffmanCode);

  let encodedData = "";
  for (let char of data) {
    encodedData += huffmanCode[char];
  }
  return encodedData;
}

class PriorityQueue{
  constructor(){
    this.queue = [];
  }
}

enqueue(node) {
  let added = false;
  for (let i = 0; i < this.queue.length; i++) {
    if (node.freq < this.queue[i].freq) {
      this.queue.splice(i, 0, node);
      added = true;
      break;
    }
  }
  if (!added) {
      this.queue.push(node);
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

  peek() {
    return this.queue[0];
  }
}