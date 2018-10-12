function quickSort(arr) {
  return qSort(arr, 0, arr.length - 1)
}

function qSort (arr, left, right) {
  if (left > right) return
  
  // 基准值
  let pivot = arr[left]
  // 左指针
  let i = left
  // 右指针
  let j = right

  while (i <= j) {
    // 左指针不断右移，直到找到比基准值大的
    while (arr[i] < pivot) {
      i++
    }

    // 右指针不断左移，直到找到比基准值小的
    while (arr[j] > pivot) {
      j--
    }

    if (i <= j) {
      // 交换元素
      let temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp

      // 继续走一位
      i++
      j--
    }
  }

  if (left < j) qSort(arr, left, j)
  if (right > i) qSort(arr, i, right)

}

let arr = [1, 1, 27, 3, 5]
quickSort(arr)

console.log(arr.toString())
