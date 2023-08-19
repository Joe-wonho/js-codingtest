// 큐 FIFO 선입선출 구조

//JS에서 수행시간 관점에서 연결리스트를 사용하는게 배열보다 효율적이다
// Dictionary 자료형을 이용하여 큐를 구현하자!

class Queue {
  constructor() {
    this.items = {};
    this.headIdx = 0;
    this.tailIdx = 0;
  }
  enqueue(item) {
    this.items[this.tailIdx] = item;
    this.tailIdx++;
  }
  dequeue() {
    const item = this.items[this.headIdx];
    delete this.items[this.headIdx];
    this.headIdx++;
    return item;
  }
  peek() {
    return this.itmes[this.headIdx];
  }
  getLength() {
    return this.tailIdx - this.headIdx;
  }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();

while (queue.getLength() !== 0) {
  console.log(queue.dequeue());
}
