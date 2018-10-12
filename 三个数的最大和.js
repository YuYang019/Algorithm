// 求数组里，三个数和的最大值，注意三个数不是连续的

// 方法一， 排序，取后三个的和
// 方法二，动态规划，思路和33题一样
// 区别在于，不需要判断当前x的正负，为什么？因为乘积存在最小值乘负数变成最大的情况，而加法直接加就完事了
function main(arr) {
  let max1, max2, max3
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i]

    if (i === 0) {
      max1 = x
    } else if (i === 1) {
      max2 = max1 + x
      max1 = Math.max(max1, x)
    } else if (i === 2) {
      max3 = max2 + x
      max2 = max1 + x
      max1 = Math.max(max1, x)
    } else {
      max3 = Math.max(max3, max2 + x)
      max2 = Math.max(max2, max1 + x)
      max1 = Math.max(max1, x)
    }
  }

  console.log(max3)
}

main([1,2,3,-4,-1,6])