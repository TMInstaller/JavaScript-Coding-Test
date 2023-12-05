/**
 * 연결 리스트의 주어진 범위를 역순으로 뒤집는 함수.
 *
 * @param {ListNode} head - 연결 리스트의 첫 번째 노드(헤드).
 * @param {number} left - 역순으로 뒤집을 구간의 시작 인덱스.
 * @param {number} right - 역순으로 뒤집을 구간의 종료 인덱스.
 * @return {ListNode} - 뒤집힌 구간을 포함하는 업데이트된 연결 리스트.
 */
var reverseBetween = function (head, left, right) {
  let start = head,
    cur = head; // 시작 노드와 현재 노드 초기화
  let i = 1;
  // 역순으로 뒤집을 구간의 시작 노드로 이동
  while (i < left) {
    start = cur;
    cur = cur.next;
    i++;
  }

  // 역순으로 뒤집기를 위한 변수 초기화
  let prev = null,
    tail = cur;
  // 지정된 구간을 역순으로 뒤집음
  while (i <= right) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    i++;
  }

  // 뒤집힌 부분을 원래 리스트와 연결
  start.next = prev;
  tail.next = cur;

  // 만약 뒤집기 시작이 첫 번째 노드라면 새로운 헤드는 prev, 아니면 기존 헤드 반환
  return left === 1 ? prev : head;
};

/**
 * 이 함수는 연결 리스트의 특정 부분을 역순으로 뒤집는 알고리즘을 구현합니다.
 * 연결 리스트를 순회하면서 left 위치에 도달할 때까지 진행합니다.
 * left부터 right까지의 노드를 역순으로 뒤집습니다.
 * 뒤집힌 부분을 원래 리스트에 다시 연결합니다.
 */
