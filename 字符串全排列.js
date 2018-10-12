// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

// 把一个字符串看成两个部分，一个是第一个元素，剩余部分为另一个，然后将第一个分别与剩余部分的元素一一交换
// 剩余部分看成新字符串，也分成两个部分，如此递归
function print (str) {
  if (!str) return

  charSort(str, 0, str.length)
}

function charSort(str, start, end) {
  let temp
  let strArr = str.split('')

  if (start === end && str) {
    console.log(str)
  }

  for (let i = start; i < end; i++) {
    temp = strArr[start]
    strArr[start] = strArr[i]
    strArr[i] = temp
    
    charSort(strArr.join(''), start + 1, end)

    // 再换回来
    temp = strArr[start]
    strArr[start] = strArr[i]
    strArr[i] = temp
  }
}

console.log(print('abcd'))