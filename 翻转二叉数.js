// 操作给定的二叉树，将其变换为源二叉树的镜像。即翻转二叉树

function Mirror (root) {
  if (!root) return
  if (!root.left && !root.right) return

  let temp = root.left
  root.left = root.right
  root.right = temp

  if (root.left) Mirror(root.left)
  if (root.right) Mirror(root.right)
}