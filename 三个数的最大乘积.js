// 求一个数组里，三个数乘积的最大值

// 这是一道动态规划题，第一次见，不用数组做，没想到
// 使用动态规划需要满足什么条件，最核心就是大的情况能由小的情况层层推出
// 这道题，三个数乘积的最大值max3
// 1. 如果第三个数是正数，那么 max3 = Math.max(max3, max2 * x)
// 2. 如果第三个数是负数，那么 max3 = Math.max(max3, min2 * x)
// 这时转化为求 max2, min2
// 而max2, min2 又是由 max1, min1 求得
// 这就满足了动态规划的条件
function main(arr) {
  let min1, max1, min2, max2, min3, max3
  
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i]

    if (i === 0) {
      max1 = arr[i]
      min1 = arr[i]
    } else if (i === 1) {
      max2 = (x > 0 ? max1 : min1) * x
      min2 = (x > 0 ? min1 : max1) * x

      max1 = Math.max(max1, x)
      min1 = Math.min(min1, x)
    } else if (i === 2) {
      max3 = (x > 0 ? max2 : min2) * x
      min3 = (x > 0 ? min2 : max2) * x

      max2 = Math.max(max2, (x > 0 ? max1 : min1) * x)
      min2 = Math.min(min2, (x > 0 ? min1 : max1) * x)

      max1 = Math.max(max1, x)
      min1 = Math.min(min1, x)
    } else {
      max3 = Math.max(max3, (x > 0 ? max2 : min2) * x)
      min3 = Math.min(min3, (x > 0 ? min2 : max2) * x)

      max2 = Math.max(max2, (x > 0 ? max1 : min1) * x)
      min2 = Math.min(min2, (x > 0 ? min1 : max1) * x)

      max1 = Math.max(max1, x)
      min1 = Math.min(min1, x)
    }
  }

  console.log(max3)
}

main([1,2,3,-1,-5])