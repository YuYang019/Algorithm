// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下矩阵：
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16 
// 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

// 横i竖j
function print (matrix) {
  if (!matrix || !matrix.length) return

  const cols = matrix.length
  const rows = matrix[0].length
  const result = []
  // 圈数为 最短的边 / 2，再向上取整
  const circle = Math.ceil(Math.min(rows, cols) / 2)

  for (let i = 0; i < circle; i++) {
    printByCircle(matrix, rows, cols, i)
  }

  // start 为起始行，起始列
  function printByCircle(matrix, rows, cols, start) {
    let endX = cols - 1 - start
    let endY = rows - 1 - start
    
    // 从左到右
    for (let k = start; k < endX; k++) {
      console.log(matrix[k][start])
    }

    // 从上到下，且需要起始行小于最终行
    if (start < endY) {
      for (let k = start + 1; k <= endY; k++) {
        console.log(matrix[endY][k])
      }
    }

    // 从右到左，需要起始行小于最终行，且起始列小于最终列
    if (start < endY && start < endX) {
      for (let k = endX - 1; k >= start; k--) {
        console.log(matrix[k][start])
      }
    }

    // 从下到上，起始列小于最终列，终止行至少比起始行大2，至少要3行
    if (start < endX && start < endY - 1) {
      for (let k = endY - 1; k >= start + 1; k--) {
        console.log(matrix[start][k])
      }
    }
  }
}