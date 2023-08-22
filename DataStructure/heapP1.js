/*

Ch10-3. 힙_문제풀이
배상 비용 최소화 문제풀이
https://programmers.co.kr/learn/courses/13213/lessons/91086

문제 유형 파악하기
문제 설명 중 핵심 부분은 역시 배상 비용을 계산하는 부분입니다. 
배상 비용은 각 요소를 제곱하게 되므로 최대한 각 요소를 골고루 처리하는 것이 가장 배상 비용을 
최소화 할 수 있는 방법입니다.
그러기 위해서는 매 루프마다 가장 큰 작업을 찾아서 처리해야 합니다. 
이때 가장 큰 작업을 찾기 위한 방법은 3가지가 있습니다.

1. 매 루프마다 Math.max 함수를 호출한다. - 매 루프마다 O(n) 시간복잡도
2. 매 루프마다 정렬한다. - O(n log n)이 소요
3. Heap을 이용한다. - O(log n)

!! 사실 매번 큰 값 혹은 작은 값을 알아야 한다면 무조건 Heap을 사용하는 것이 좋습니다.!!
*/
// 최대힙 구현 - 가장 큰 값을 알기 위해서 최대 힙 구현
class MaxHeap {
  constructor() {
    this.heap = [null]; // 0번째 인덱스에는 항상 null을 주자
  }

  heapPush(value) {
    this.heap.push(value); // 끝노드에 새로운 노드 추가
    let currentIndex = this.heap.length - 1; // 마지막 인덱스
    let parentIndex = Math.floor(currentIndex / 2); // 각 노드의 부모인덱스

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      // index 0은 null이면 안되고
      const temp = this.heap[parentIndex]; // value 교환
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;
      currentIndex = parentIndex; // index 교환
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  heapPop() {
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop(); // 맨끝노드의 값을 맨앞에 넣고 맨끝노드 삭제됨

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (this.heap[currentIndex] < this.heap[leftIndex] || this.heap[currentIndex] < this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

// solution 함수 구현
function solution(no, works) {
  // 모든 작업의 합보다 no가 크면 배상 비용을 낼 필요가 없다.
  if (works.reduce((a, b) => a + b) <= no) {
    return 0;
  }

  // max heap 구성
  const heap = new MaxHeap();
  for (const work of works) {
    heap.heapPush(work);
  }

  // no만큼 루프 돌면서 가장 큰 값을 빼서 처리 후 다시 push
  for (let i = 0; i < no; i++) {
    heap.heapPush(heap.heapPop() - 1);
  }

  // 남은 요소에 제곱한 값들의 합을 구한 후 반환
  return heap.heap.reduce((a, b) => a + b * b);
}
