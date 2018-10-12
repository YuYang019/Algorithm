// 在一个矩阵中，0表示墙，1表示路，2表示起始位置，3表示终止位置。路径上可能有门，大写字母表示门，小写字母表示门的钥匙，字母从a开始，不多于10个
// 求最短路径

// 这道题和普通的迷宫不同之处，在于多了一个钥匙和门的状态，如果没有钥匙，门就不能开，这条路就不能走。那么如何储存钥匙和门的状态呢？
// 看了大神的解法，用二进制来储存这个状态
// 举个例子：遇到 c, 我们用0到23表示a到z，那么 c 表示 2，那么这个状态key = key | (1 << 2)
// 这是什么意思，1 << 2 表示 0001 左移 2 位，得到 0100，这个结果就表示，从右到左，索引2处有一个钥匙了，且这个钥匙的字母是 'c'，因为每个字母的位置唯一，c对应的索引位置就是2
// 然后，我们再把原key和这个结果按位或起来，这是为什么？因为它可能储存了多把钥匙，为了不丢失之前储存的信息，就按位或起来
// 比如，原来已经存了a钥匙了 原key = 0001，现在又要存c ，那么就是 key = 0001 | 0100 = 0101，可以看到，这个时候key就存了两把钥匙了

// 那么对于门呢怎么判断有没有钥匙，其实就是利用按位与的特性，当对应位置为1的时候，结果为1，有0，则为0
// 举个例子：我现在存了 a,c 的钥匙，key = 0101，遇到了门A, A对应的 key = 1 << 0 = 0001
// 然后将 0101 & 0001 按位与，得到 0001，结果不为0，说明这个门可以过
// 如果遇到门B，B对应的 key = 1 << 1 = 0010，0101 & 0010 ＝ 0，结果为0，说明门b没有钥匙
// 所以只需要判断结果是否为0即可
let arr = [
  [0, 2, 1, 1, 1],
  [0, 1, 'a', 0, 'A'],
  [0, 1, 0, 0, 3],
  [0, 1, 0, 0, 1],
  [0, 1, 1, 1, 1]
]

function Node(x, y, step, key) {
  this.x = x
  this.y = y
  this.step = step
  // 钥匙状态存在每个节点上
  this.key = key
}

function main(arr) {
  let m = arr.length // 高
  let n = arr[0].length // 宽

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 找到起始点
      if (arr[i][j] === 2) {
        return bfs(arr, i, j, m, n)
      }
    }
  }
}

function bfs (arr, i, j, m, n) {
  let queue = []
  let dx = [0, 1, -1, 0]
  let dy = [1, 0, 0, -1]
  
  // 三维数组，记录x, y坐标，钥匙状态为key的点是否被访问过
  let dp = []
  for (let i = 0; i < m; i++) {
    dp[i] = []
    for (let j = 0; j < n; j++) {
      dp[i][j] = []
    }
  }

  queue.push(new Node(i, j, 0, 0))

  while (queue.length) {
    let node = queue.shift()

    if (arr[node.x][node.y] === 3) {
      return node.step
    }

    for (let i = 0; i < 4; i++) {
      let nextX = node.x + dx[i]
      let nextY = node.y + dy[i]

      // 过界且遇到墙
      if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m || arr[nextX][nextY] === 0) {
        continue
      }

      let key = node.key
      
      if (/[a-z]/.test(arr[nextX][nextY])) {
        // 如果遇到钥匙，捡钥匙
        key = key | (1 << (arr[nextX][nextY].charCodeAt() - 'a'.charCodeAt()))
        console.log(key)
      }
      
      if (
        // 如果遇到门，但是没有钥匙，跳过
        /[A-Z]/.test(arr[nextX][nextY]) &&
        (key & (1 << (arr[nextX][nextY].charCodeAt() - 'A'.charCodeAt()))) === 0
      ) {
        continue
      }
      
      if (!dp[nextX][nextY][key]){
        dp[nextX][nextY][key] = 1
        queue.push(new Node(nextX, nextY, node.step + 1, key))
      }
    }
  }
}

console.log(main(arr))