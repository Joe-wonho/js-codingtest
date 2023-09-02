class MaxHeap {
  constructor() {
    this.heap = [null]; // 0번 인덱스 =null
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parentIdx = Math.floor(curIdx / 2);
    //최대힙
    //부모의 우선순위가 더 낮거나 루트가 아닐때까지 반복한다.
    while (parentIdx !== 0 && this.heap[parentIdx] < value) {
      this.swap(parentIdx, curIdx);
      curIdx = parentIdx;
      parentIdx = Math.floor(curIdx / 2);
    }
  }
  pop() {
    let maxValue = this.heap[1];
    this.heap[1] = this.heap.pop(); // 가장 끝요소를 루트로 옮김

    let curIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    while (this.heap[curIdx] < this.heap[leftIdx] || this.heap[curIdx] < this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[rightIdx]) {
        this.swap(curIdx, rightIdx);
        curIdx = rightIdx;
      } else {
        this.swap(curIdx, leftIdx);
        curIdx = leftIdx;
      }
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return maxValue;
  }
}

const maxHeap = new MaxHeap();
maxHeap.push(45);
maxHeap.push(36);
maxHeap.push(54);
maxHeap.push(27);
maxHeap.push(63);
maxHeap.push(93);
maxHeap.push(100);
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.heap);
