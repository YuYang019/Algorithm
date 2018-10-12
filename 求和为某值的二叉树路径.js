// 给定一个值，得到二叉树路径和为该值的路径

function Node (val, left, right) {
  this.val = val
  this.left = left
  this.right = right
}

let leaf1 = new Node(4, null, null)
let leaf2 = new Node(7, null, null)
let leftroot = new Node(5, leaf1, leaf2)
let rightroot = new Node(12, null, null)
let root = new Node(10, leftroot, rightroot)

function main (phead, k) {
  if (!phead) return

  let curSum = 0
  let path = []

  return findPath(phead, k, path, curSum)
}

function findPath (phead, k, path, curSum) {
  if (!phead) return

  path.push(phead.val)
  curSum += phead.val

  let isLeaf = !phead.left && !phead.right
  if (curSum === k && isLeaf) {
    console.log(path)
  }

  if (phead.left) findPath(phead.left, k, path, curSum)
  if (phead.right) findPath(phead.right, k, path, curSum)

  path.pop()
}

main(root, 22)