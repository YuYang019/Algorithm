// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

function ListNode (x) {
  this.val = x
  this.next = null
}

// 每次比较两链表的头节点大小，小的头节点推入新链表，继续比较
function merge (phead1, phead2) {
  if  (!phead1) {
    return phead2 ? phead2 : null
  } else if (!phead2) {
    return phead1
  }

  let cur1 = phead1
  let cur2 = phead2
  let mhead = new ListNode(-1)
  // 纪录合成后链表的头指针位置
  let result = mhead

  while (cur1 && cur2) {
    if (cur1.val <= cur2.val) {
      mhead.next = cur1
      cur1 = cur1.next
    } else {
      mhead.next = cur2
      cur2 = cur2.next
    }
    mhead = mhead.next
  }

  // 如果cur1还存在，说明cur2已经比较完了，不用比较了
  if (cur1) {
    mhead.next = cur1
  }

  if (cur2) {
    mhead.next = cur2
  }

  return result.next
}