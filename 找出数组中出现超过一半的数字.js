// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
// 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

// 思路，在遍历数组的时候保存两个值，一个数组中的数字，另一个是次数，如果下一个数字和前一个数字相同，次数加一
// 如果不同，次数减一。如果次数为0，保存下一个数字，次数重置为1
// 因为要找的数字超过数组长度一半，所以要找的数字最后设的次数肯定大于等于1
function FindNumber (arr) {
  if (!arr || !Array.isArray(arr)) {
    return 
  }

  let times = 0
  let number

  for (let i = 0; i < arr.length; i++) {
    if (times === 0) {
      number = arr[i]
      times = 1
    } else if (arr[i] === number) {
      times++
    } else {
      times--
    }
  }

  return times ? number : null
}