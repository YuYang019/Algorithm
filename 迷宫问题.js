// 迷宫问题，给定起始终止坐标，默认是左上角和右下角，在一个01矩阵里，1表示墙，0表示路径，求起点到终点的最短路径

// 迷宫问题可以抽象成连通图的遍历，数组相当于一个方形的连通图，一般方式是广度优先遍历
// 广度优先遍历就是利用队列，先推入根节点，再取出，推入根的子节点，再依次取出根的子节点，推入子子节点，因为是队列，所以总是遍历完先推入的一层父节点，再遍历子节点

// 数组可以看成一个连通图，来遍历它，起点为根节点，上下左右符合条件的数为子节点，遍历到终点时，即为最短路径

let arr = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 0, 0, 0, 0]
]

function main(arr) {
  let m = arr.length // 高
  let n = arr[0].length // 宽
  // 对应上下左右四个移动时，坐标的改变
  let dx = [0, 1, -1, 0]
  let dy = [1, 0, 0, -1]

  let queue = []

  // 记录某个坐标节点是否遍历过，遍历过置1
  let dp = []
  for (let i = 0; i < m; i++) {
    dp[i] = []
    for (let j = 0; j < n; j++) {
      dp[i][j] = 0
    }
  }
  
  // 推入起始点
  dp[0][0] = 1
  queue.push(new Node(0, 0, 0))

  while (queue.length > 0) {
    // 取出第一个
    let node = queue.shift()

    // 依次判断四个方向
    for (let i = 0; i < 4; i++) {
      // 每个方向的坐标
      let x = node.x + dx[i]
      let y = node.y + dy[i]

      // console.log(x, y)
      
      // 过界或者遇到墙
      if (x < 0 || y < 0 || x >= n || y >= m || arr[x][y] === 1 || dp[x][y] === 1) continue;

      else if (x === n - 1 && y === m - 1) return node.step + 1 // 达到终点，注意索引是长度减一

      else {
        dp[x][y] = 1
        queue.push(new Node(x, y, node.step + 1))
      }
    }
  }

  console.log(queue)
}

function Node(x, y, step) {
  this.x = x
  this.y = y
  // 达到当前坐标的时候，走过的路径，记录在每个节点上，也可建一个arr[m][n]，将值赋在上面
  this.step = step
}

console.log(main(arr))