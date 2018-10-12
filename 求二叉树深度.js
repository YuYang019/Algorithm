// 求二叉树深度

function getDepth(phead) {
  if(!phead) return 0

  let left = getDepth(phead.left)
  let right = getDepth(phead.right)

  return left > right ? (left + 1) : (right + 1)
}
