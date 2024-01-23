/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
const distanceK = (root, target, k) => {
  // add parent pointers to tree
  const addParents = (node, parent = null) => {
    if (!node) return;
    node.parent = parent;
    addParents(node.left, node);
    addParents(node.right, node);
  };
  // find all vals k distance from target
  const getDist = (node, dist = 0) => {
    // is null node or too far from node
    if (!node || dist > k) return;
    // is aleady visited
    if (node.val === -1) return;

    // correct distance away from target, save
    if (dist === k) res.push(node.val);

    // mark node as visited
    node.val = -1;

    // explore all directions from target
    getDist(node.left, dist + 1);
    getDist(node.right, dist + 1);
    getDist(node.parent, dist + 1);
  };

  addParents(root);
  const res = [];
  const visited = new Set();
  getDist(target);
  // return all nodes k distance from target
  return res;
};
