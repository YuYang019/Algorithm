// 该美团笔试题，就是01背包的变种
// 从原来的两种情况，拿和不拿
// 改成3种情况，拿，拿一部分，不拿
// 对应判断一下即可

// 注意i - 1的处理

const arr = [
  [20, 20, 100, 60],
  [50, 30, 80, 55],
  [100, 60, 110, 88],
  [5, 3, 10, 6]
]

// pi ai, qi bi

// dp[i][j] 表示第i题，背包容量为j时的最大价值
// i对应行，j对应列
function main (n, arr) {
  const dp = []

  // i 第i道题，第0行全填充0，整体下移，防止 i - 1 < 0
  for (let i = 0; i <= n; i++) {
    dp[i] = []

    let pi, ai, qi, bi

    if (i > 0) {
      pi = arr[i - 1][0] // 部分所需时间
      ai = arr[i - 1][1] // 部分分数

      qi = arr[i - 1][2] // 全部时间
      bi = arr[i - 1][3] // 全部分数
    }

    // j 背包容量
    for (let j = 0; j <= 120; j++) {
      // 第0行无意义，为了防止 i - 1 < 0 的情况
      if (i === 0) {
        dp[i][j] = 0
        continue
      }

      if (j === 0) {
        // 容量为0时
        dp[i][j] = 0
      } else if (j < pi) {
        // 如果容量小于部分做完所需时间
        dp[i][j] = dp[i - 1][j]
      } else if (j > pi && j < qi) {
        // 大于部分，小于全做
        // 对于第i道题，有2种情况
        // 1. 不做，dp[i][j] = dp[i-1][j]
        // 2. 部分做，dp[i][j] = dp[i-1][j - pi] + ai
        let condition1 = dp[i - 1][j]
        let condition2 = dp[i - 1][j - pi] + ai
        dp[i][j] = Math.max(condition1, condition2)
      } else {
        // 大于部分，小于全做
        // 对于第i道题，有2种情况
        // 1. 不做，dp[i][j] = dp[i-1][j]
        // 2. 部分做，dp[i][j] = dp[i-1][j - pi] + ai
        // 3. 全做，dp[i][j] = dp[i-1][j - qi] + bi
        let condition1 = dp[i - 1][j] || 0
        let condition2 = dp[i - 1][j - pi] + ai
        let condition3 = dp[i - 1][j - qi] + bi
        dp[i][j] = Math.max(condition1, condition2, condition3)
      }
    }
  }

  return dp[n][120]
}

console.log(main(4, arr))