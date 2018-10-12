// 分巧克力，一块饼干有n块巧克力，巧克力上有的有坚果，有的没坚果，有用1表示，没有用0表示
// 现在想切分这个饼干，使得切分的饼干每块只能有一个坚果，问有几种切法
// 第一行输入巧克力数
// 第二行输入一排巧克力含坚果情况

// 4
// 1 0 1 1
// 输出：2

// 这个解法，是真没想到，老想着用什么递归，动态规划解，死都想不出。唉，看到别人几行代码就解出来了，感觉自己是真的菜，手里有了锤子，看什么都是钉子，脑子转不过弯，我靠

// 简单来说，对于连续的1来说，其实只有一种切法，就是每个1之间都切1刀，因为要保证每块只有1个坚果
// 可能出现多种情况的，只有1之间出现了0，那么对于对于10001这样，切法的情况其实就是在 000 中间这串序列里，选一个位置切，一共4个位置，即0序列的长度＋1
// 如果有多个0序列，即 10011000011 这样，其实就是 00序列，和0000序列，可能情况的乘积，总共为 3 * 5 = 15
// 如果两边都出现0呢，00100100，其实是没有影响的，可以把它去掉，变成1001，因为切的时候，为了保证每块有一个坚果，只能从1和1之间切

// 所以其实这题，就是找0的序列，然后每个序列情况相乘就得到了，唉

var readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var curLine = 0
var result = 1
var n = 0

rl.on('line', function(line) {
  if (curLine === 0) {
    n = parseInt(line.trim())
  } else {
    let input = line.trim().split(' ')
    main(input)
    rl.close()
  }
  curLine++
})

function main(input) {
  // 去除两边的0
  let temp = input.join('').replace(/(^0+)|(0+$)/g, '')
  // 得到连续的0的数组
  let arr = temp.match(/(0+)/g)

  if (arr === null) {
    console.log(1)
    return
  }

  arr.forEach(item => {
    result *= item.length + 1
  })

  console.log(result)
}

