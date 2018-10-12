// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
// 假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4，5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

function isPopOrder (pushV, popV) {
  if (!pushV || !popV) return

  const temp = []
  const length = pushV.length
  let popIndex = 0

  for (let i = 0; i < length; i++) {
    // 不断往临时数组里压栈
    temp.push(pushV[i])
    // 如果栈顶元素和弹出序列的第一个相等，临时栈栈顶弹出，弹出序列＋1，说明这个序列元素已经比较过了
    while (temp.length && temp[temp.length - 1] === popV[popIndex]) {
      temp.pop()
      popIndex++
    }
  }

  // 如果temp没有元素了，说明符合顺序
  return temp.length === 0
}