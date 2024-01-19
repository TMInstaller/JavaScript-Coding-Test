/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) return 0;

  return DFS(root, 0);
};

const DFS = (node, depth) => {
  if (!node) return depth;

  const leftDepth = DFS(node.left, depth + 1);
  const rightDepth = DFS(node.right, depth + 1);

  return Math.max(leftDepth, rightDepth);
};
