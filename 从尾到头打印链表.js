// 输入一个链表，从尾到头打印链表每个节点的值。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 从头到尾推入值到数组中，然后倒序
function printList (head) {
  if (!head) {
    return
  } else {
    let arr = []
    let curr = head
    while(curr) {
      arr.push(curr.value)
      curr = curr.next
    }
    return arr.reverse
  }
}