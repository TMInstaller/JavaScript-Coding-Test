/**
 * 이진 트리의 지름을 계산하는 함수.
 *
 * @param {TreeNode} root - 이진 트리의 루트 노드.
 * @return {number} - 트리의 지름의 길이.
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0; // 트리의 지름을 저장할 변수

  // 깊이 우선 탐색 (DFS) 함수 실행
  dfs(root);

  // 계산된 지름 반환
  return diameter;

  // 주어진 노드에서 시작하는 깊이 우선 탐색 함수
  function dfs(node) {
    // 현재 노드가 null이면 길이 0 반환
    if (!node) return 0;

    // 왼쪽 서브트리의 깊이 계산
    const left = dfs(node.left);
    // 오른쪽 서브트리의 깊이 계산
    const right = dfs(node.right);

    // 현재 노드를 경유하는 경로의 길이 계산 (왼쪽 깊이 + 오른쪽 깊이)
    // 최대 지름 업데이트
    diameter = Math.max(diameter, left + right);

    // 현재 노드의 깊이 반환 (1 + 왼쪽과 오른쪽 깊이 중 더 큰 값)
    return 1 + Math.max(left, right);
  }
};
