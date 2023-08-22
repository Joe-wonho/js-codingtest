// 배열로 최대힙 구현 - 그냥 외우자
class MaxHeap {
  constructor() {
    this.heap = [null]; //0번 인덱스는 null로 비워두자
  }
  push(value) {
    this.heap.push(value);
    let curIndex = this.heap.length - 1; // 1
    let parentIndex = Math.floor(curIndex / 2); // 0

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[curIndex] = temp;

      curIndex = parentIndex;
      parentIndex = Math.floor(curIndex / 2);
    }
  }

  pop() {
    let returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let curIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (this.heap[curIndex] < this.heap[leftIndex] || this.heap[curIndex] < this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[curIndex];
        this.heap[curIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        curIndex = rightIndex;
      } else {
        const temp = this.heap[curIndex];
        this.heap[curIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        curIndex = leftIndex;
      }
      leftIndex = curIndex * 2;
      rightIndex = curIndex * 2 + 1;
    }
    return returnValue;
  }
}

const maxHeap = new MaxHeap();
maxHeap.push(45);
maxHeap.push(36);
maxHeap.push(54);
maxHeap.push(27);
maxHeap.push(63);
console.log(maxHeap.heap);

const array = [];
array.push(maxHeap.pop());
array.push(maxHeap.pop());
array.push(maxHeap.pop());
array.push(maxHeap.pop());
array.push(maxHeap.pop());
console.log(array);
