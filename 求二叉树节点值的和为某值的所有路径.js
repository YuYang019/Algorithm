// 输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。

// 先序遍历
function findPath (root, expectNumber) {
  const temp = []
  const result = []

  dfs(root, 0)

  function dfs (root, sum) {
    if (!root) return

    sum += root.val
    temp.push(root.val)

    if (sum === expectNumber && !root.left && !root.right) {
      result.push(temp.slice())
    }

    if (root.left) {
      dfs(root.left, sum)
    }

    if (root.right) {
      dfs(root.right, sum)
    }

    temp.pop()

    return
  }

  return result
}