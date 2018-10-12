let arr = [
  ['y', 'x', 'x', 'b'],
  ['x', 'y', 'g', 'x'],
  ['x', 'b', 'y', 'y'],
  ['b', 'x', 'x', 'y'],
]

// 画家小Q
function main (arr) {
  let m = arr[0].length
  let n = arr.length
  let count = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 'b') {
        traverse_B(i, j)
        count++
      } else if (arr[i][j] === 'y') {
        traverse_Y(i, j)
        count++
      } else if (arr[i][j] === 'g') {
        traverse_B(i, j)
        count++
        traverse_Y(i, j)
        count++
      }
    }
  }

  function traverse_B (i, j) {
    if ((i >= 0 && i < n) && (j >= 0 && j < m) && (arr[i][j] === 'b' || arr[i][j] === 'g')) {
      if (arr[i][j] === 'b') {
        arr[i][j] = 'x'
      } else if (arr[i][j] === 'g') {
        arr[i][j] = 'y'
      }
      traverse_B(i + 1, j - 1)
      traverse_B(i - 1, j + 1)
    }
    return
  }
  
  function traverse_Y (i, j) {
    if ((i >= 0 && i < n) && (j >= 0 && j < m) && (arr[i][j] === 'y' || arr[i][j] === 'g')) {
      if (arr[i][j] === 'y') {
        arr[i][j] = 'x'
      } else if (arr[i][j] === 'g') {
        arr[i][j] = 'b'
      }
      traverse_Y(i + 1, j + 1)
      traverse_Y(i - 1, j - 1)
    }
    return
  }

  return count
}

console.log(main(arr))
