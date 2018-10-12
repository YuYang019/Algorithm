// 斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。n<=39

// a, b两个指针，初始指向f(0), f(1), 随后不断往后移一位
function Find(n) {
  let a = 1
  let b = 1
  let temp

  if (n > 39 || n < 0) return

  for (let i = 2; i <= n; i++) {
    temp = a + b
    a = b
    b = temp
  }

  return b
}

console.log(Find(1), Find(2), Find(5))
