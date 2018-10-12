// 定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数

function Stack() {
  this.stack = []
  this.top = 0
}

Stack.prototype.push = function(node) {
  this.stack[this.top] = node
  this.top++
}

Stack.prototype.pop = function() {
  this.top--
  let result = this.stack[this.top]
  this.stack.length = this.top

  return result
}

Stack.prototype.length = function() {
  return this.top
}

let a = new Stack()
a.push(1)
a.push(2)
a.push(3)
console.log(a.pop())
console.log(a.stack)