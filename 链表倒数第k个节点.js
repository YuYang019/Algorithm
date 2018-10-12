// 输入一个链表，输出该链表中倒数第k个结点。

function ListNode (x) {
  this.value = x
  this.next = null
}

// 思路：两个指针，第一个指针先走 k-1 步，然后两个指针一起走，第一个指针达到末尾，第二个指针就是倒数第k个
function Print (head, k) {
  if (!head || k < 0) return

  let i = head
  let j = head
  for (let i = 0; i < k; i++) {
    i = i.next
    if (!i) return
  }
  while(i.next) {
    i = i.next
    j = j.next
  }
  return j
}

