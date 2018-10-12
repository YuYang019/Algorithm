// 大数相乘

// 第一种方式就是模拟普通的乘法运算。缺点是很麻烦，要依此进位
// 第二种方式是在第一种基础上改进一下，计算时不进位，每位乘法不进位，直到最后相加完后，再处理进位

/**
 *         9  8
   ×       2  1
   -------------
          (9)(8)  <---- 第1趟: 98×1的每一位结果 
      (18)(16)     <---- 第2趟: 98×2的每一位结果 
   -------------
     (18)(25)(8)  <---- 这里就是相对位的和，还没有累加进位 
 */

function main(num1, num2) {
  let result = []

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      console.log(num1[i], num2[j])
      result[i + j + 1] = (result[i + j + 1] ? result[i + j + 1] : 0) + num1[i] * num2[j]
    }
  }

  console.log(result)

  for (let k = result.length - 1; k >= 0; k--) {
    if (result[k] >= 10 && k >= 1) {
      result[k - 1] = (result[k - 1] ? result[k - 1] : 0) + Math.floor(result[k] / 10)
      result[k] = result[k] % 10
    }
  }

  // 过滤为空的值
  return result.filter(item => (item || item === 0)).join('')
}

console.log(main('98', '21'))