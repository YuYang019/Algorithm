// 小q的歌单

// x首长度为a的歌，y首长度为b的歌，问组成总长度为k的歌单，有几种组成方法

// 设n首a，m首b
// an + bm === k
// 0 <= n <= x
// 0 <= m <= y

// 思路很简单，遍历所有情况。看是否有符合条件的
// 当a取n首，b取m首，如果这里存在和为k的话，符合条件，可能总数就为 c(a, n) * c(y, m)
// 每次符合，总数都相加
function main(k, a, x, b, y) {
  let c = init()
  let sum = 0

  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      if (a * i + b * j > k) break
      if (a * i + b * j === k) {
        sum += c[x][i] * c[y][j]
      }
    }
  }

  return sum
}


// 组合公式 c(n, m) = c(n - 1, m) + c(n - 1, m - 1)
function init() {
  let c = []

  for (let i = 0; i <= 100; i++) {
    c[i] = []
    for (let j = 0; j <= 100; j++) {
      if (i === 0) {
        // 注意这里，0个里面取n个，不能取，所以为0。而0个里面取0个为1
        c[i][j] = (j === 0) ? 1 : 0
      } else if (j === 0) {
        c[i][j] = 1
      } else {
        c[i][j] = (c[i - 1][j] + c[i - 1][j - 1]) % 1000000007
      }
    }
  }

  return c
}

console.log(main(5, 2, 3, 3, 3))