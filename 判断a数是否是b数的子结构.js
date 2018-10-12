// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构

// 判断是不是子结构，就需要从根节点开始判断，递归对比左右节点
function hasSubTree (phead1, phead2) {
  if (!phead1 || !phead2) return

  if (isSubTree(phead1, phead2)) {
    return true
  } else {
    return hasSubTree(phead1.left, phead2) || hasSubTree(phead1.right, phead2)
  }

  function isSubTree (head1, head2) {
    // 如果head2为空，说明b子树已经遍历完了
    if (!head2) return true

    if (!head1) return false

    // 节点值相同，继续比较左右节点
    if (head1.val === head2.val) {
      return isSubTree(head1.left, head2.left) && isSubTree(head1.right, head2.right)
    } else {
      return false
    }
  }
}