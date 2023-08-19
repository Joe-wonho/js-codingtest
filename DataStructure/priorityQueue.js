// 특정 최단거리 문제의 알고리즘으로 사용되고 다양한 알고리즘에 사용된다.
// 트리 자료구조를 활용해 구현한다.
// 일반적으로 OS 온라인 게임 매칭 등에서 활용
// 힙(heap)을 이용해 구현한다. 힙도 트리 자료구조로 구현

//우선순위 큐는 다양한 방법으로 구현할 수 있다.
/*
데이터 개수가 N 일때
리스트 자료형 : 삽입 O(1) 삭제 O(N)
힙(Heap) : 삽입 O(logN) 삭제 O(logN) // 트리 자료구조를 이용하면 빠름
*/

/* 이진트리 종류
포화이진트리: 리프노드를 제외한 모든 노드가 두 자식을 가진 트리
완전이진트리: 모든 노드가 왼쪽 자식부터 차근차근 채워진 트리
높이균형트리: 왼쪽과 오른쪽 자식 트리의 높이가 1이상 차이나지 않는 트리
*/

/* 힙 (완전이진트리를 보통 이용) - 왼쪽부터 차근차근 채워져야함
원소들 중 최대 or 최소 값을 빠르게 찾아내는 자료구조
최대힙 : 값이 큰 원소부터 추출 (루트노드가 최대값임)
최소힙 : 값이 작은 원소부터 추출 (루트노드가 최소값임)

힙은 삽입 삭제 수행시간이 O(logN)
단순한 N개의 데이터를 힙에 넣었다 모두 꺼내는 작업은 정렬과 동일 O(NlogN)
*/

import PriorityQueue from 'priorityqueuejs';

let queue = new PriorityQueue(function (a, b) {
  return a.cash - b.cash;
});

queue.enq({ cash: 250, name: 'Valentina' });
queue.enq({ cash: 300, name: 'Jano' });
queue.enq({ cash: 150, name: 'Fran' });
console.log(queue.size()); // 3
console.log(queue.peek()); // { cash: 300, name: 'Jano' }
console.log(queue.deq()); // { cash: 300, name: 'Jano' }
console.log(queue.size()); // 2
