// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。层次遍历

function traverseTree (head) {
  const temp = []
  const result = []
  temp.push(head)
  while (temp.length) {
    const node = temp.shift()
    result.push(node.val)
    if (node.left) temp.push(node.left)
    if (node.right) temp.push(node.right)
  }

  return result
}