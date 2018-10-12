// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。


function TreeNode (x) {
  this.value = x
  this.left = null
  this.right = null
}
 

function reConstructBinaryTree (pre, mid) {
  if (pre.length === 0 || mid.length === 0) return
  // 根节点值所在index，也是左右子树分隔点
  let index = mid.indexOf(pre[0])
  // 左子树中序遍历序列
  let left = mid.slice(0, index)
  // 右子树中序遍历序列
  let right = mid.slice(index + 1)
  // 根节点
  let node = new TreeNode(pre[0])
  // pre.slice(1, index + 1)为左子树前序遍历序列
  node.left = reConstructBinaryTree(pre.slice(1, index + 1), left)
  node.right = reConstructBinaryTree(pre.slice(index + 1), right)
  return node
}