// 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 1,2,8,9
// 2,4,9,12
// 4,7,10,13
// 6,8,11,15

// 根据规律，从右上角开始，大于target，往下遍历，小于，往左遍历
function Find (array, target) {
  let rowCount = array.length - 1
  let i, j
  for (i = rowCount, j = 0; i >= 0 && j < array[i].length; ) {
    if (array[i][j] === target) {
      return true
    } else if (array[i][j] < target) {
      i--
      continue
    } else if (array[i][j] > target) {
      j++
      continue
    }
  }
}