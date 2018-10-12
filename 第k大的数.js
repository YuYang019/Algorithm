// 找出数组第k大的数

// 思路其实就是快排，不过不用两边同时递归，每次判断k和基准index的大小，如果k大，说明k在基准值右边，在右边找
function findK (arr, k, left, right) {
  if (!arr.length) return

  // 获得第每次分区后，基准值的index，此时左边的比基准值小，右边的比基准值大
  let index = partition(arr, left, right)

  if (index === k - 1) {
    return arr[index]
  } else if (index < k - 1) {
    findK(arr, k, index + 1, right)
  } else if (index > k - 1) {
    findK(arr, k, left, index - 1)
  }
}

function partition (arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)]
  let i = left
  let j = right

  while (i < j) {
    while (arr[i] < pivot) {
      i++
    }

    while (arr[j] > pivot) {
      j--
    }

    if (i <= j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp

      i++
      j--
    }
  }

  return i
}