/**
 * 이진 탐색 트리에서 가장 빈번하게 등장하는 요소(최빈값)을 찾는 함수.
 *
 * @param {TreeNode} root - 이진 탐색 트리의 루트 노드.
 * @return {number[]} - 트리에서 가장 빈번하게 등장하는 요소들의 배열.
 */
var findMode = function (root) {
  // 각 숫자의 등장 횟수를 저장할 객체
  const counts = {};
  // 가장 많이 등장하는 요소의 등장 횟수
  let maxCount = 0;
  // 최빈값을 저장할 배열
  const modes = [];

  // 중위 순회(Inorder Traversal)를 위한 도우미 함수
  const inorder = function (node) {
    if (!node) {
      // 노드가 없으면 반환
      return;
    }

    inorder(node.left); // 왼쪽 서브트리 탐색

    // 현재 노드의 값의 등장 횟수 업데이트
    const count = (counts[node.val] || 0) + 1;
    counts[node.val] = count;

    // 현재 노드의 등장 횟수에 따라 최빈값 업데이트
    if (count > maxCount) {
      maxCount = count;
      modes.length = 0; // 이전 최빈값 배열 초기화
      modes.push(node.val); // 새로운 최빈값 추가
    } else if (count === maxCount) {
      modes.push(node.val); // 동일한 최빈값 추가
    }

    inorder(node.right); // 오른쪽 서브트리 탐색
  };

  // 루트 노드부터 중위 순회 시작
  inorder(root);

  // 최빈값 배열 반환
  return modes;
};
