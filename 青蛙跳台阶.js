// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法

// 这就是斐波那契数列的应用
// 假设n级台阶，那么第一步就有两种情况，跳一步，跟跳两步
// 情况一：跳一步，那么接下去的就是f(n-1)
// 情况二：跳两步，那么接下去的就是f(n-2)
// f(n) = f(n - 1) + f(n - 2)
function Find (n) {
  if (n < 0) return
  if (n === 1) return 1
  if (n === 2) return 2

  let temp
  let a = 1 // 只有一个台阶时，1种跳法
  let b = 2 // 2个台阶时，2种跳法
  // 2个以上，由a，b导出
  for (let i = 3; i <= n; i++) {
    temp = a + b
    a = b
    b = temp
  }
  return temp
}