// 数组中子数组的最大和

function main (arr) {
  let maxSum = 0
  let curSum = 0

  for (let i = 0; i < arr.length; i++) {
    // 为什么小于0直接赋值？因为如果前几个数组和为负数的时候，下一个数，分两种情况
    // 1. 如果是负数，加起来更小。所以直接赋值从下一个开始
    // 2. 如果是正数，加起来也不会比它本身大，所以也是直接赋值从它开始
    if (curSum <= 0) {
      curSum = arr[i]
    } else {
      curSum += arr[i]
    }

    if (curSum > maxSum) {
      maxSum = curSum
    }
  }

  console.log(maxSum)
}

main([1,-2,3,10,-4,7,2,-5])