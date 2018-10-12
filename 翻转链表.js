// 输入一个链表，反转链表后，输出链表的所有元素。

// 思路，三个指针，分别指向前一个节点，当前节点，下一个节点
// 1. 纪录下一个节点，不至于丢失 
// 2. 当前节点的next指向前一个节点，改变方向
// 3. 前一个节点移位，指向当前节点
// 4. 当前节点移位，指向下一个节点 
function reverseList (head) {
  let nextHead, preHead, reversedHead

  if (!head) return

  while (head !== null) {
    nextHead = head.next
    if (nextHead === null) {
      reversedHead = head
    }
    head.next = preHead
    preHead = head
    head = nextHead
  }

  return reversedHead
} 