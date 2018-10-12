// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。
// 假设输入的数组的任意两个数字都互不相同。(测试用例用的是 false/true, 不是题目中的 'Yes'/'No')

// 搜索二叉树，左子树 小于 根 小于 右子树，判断是不是，即判断这个性质是否满足
// 后序遍历，最后一个值为根节点

function adjuestSquence(squence, start, end) {
  const root = squence[end]

  let i = start
  // 找到左子树的位置
  for (; i < end; i++) {
    if (squence[i] > root) {
      break
    }
  }

  // 找到右子树
  let j = i
  for (; j < end; j++) {
    // 如果右子树有小于根的，不符合条件
    if (squence[j] < root) {
      return false
    }
  }

  let left = true
  if (i > 0) {
    left = adjuestSquence(squence, start, i - 1)
  }

  let right = true
  if (j < length - 1) {
    right = adjuestSquence(squence, i, end - 1)
  }

  return left && right
}

function verify (squence) {
  if (!squence ) return

  const length = squence.length

  return adjuestSquence(squence, 0, length - 1)
}