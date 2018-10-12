// 最长不含重复子串的子字符串的长度

// 建立一个hash表，一个个读入字符，每读一个key为当前字符，value为字符位置
// 当发现该字符已存在时，说明有重复字符了
// 此时，当前字符位置 - 上一次字符位置 = 为重复字符之间的距离
// 这就出现了两种情况
// 1. 当距离大于当前子串最大长度，说明重复字符不在当前计算的子串里，无影响
// 2. 当距离小于等于当前子串最大长度，说明重复字符出现在当前子串里
function main (string) {
  const position = {}
  // 当前的最长长度
  let curLength = 0
  // 总的最长长度
  let maxLength = 0

  for (let i = 0; i < string.length; i++) {
    let preIndex = position[`${string[i]}-a`]
    console.log(string[i])
    // 如果没有preIndex，说明没有重复字母，长度+1
    // 或者，如果有，但是重复字母之间距离大于当前子串最长长度，无影响，长度＋1
    if (preIndex === undefined || i - preIndex > curLength) {
      curLength++
    } else {
      // 进入到这个逻辑，说明出现了重复字母，且前一个重复字母就在子串里，此时记录更新长度
      // 一个问题，为什么更新后，curLength不重置？
      // 举个例子，a r a，当a重复时，长度为 a r 的长度，curLength为2，那么在下次开始的时候，子串应该是从 r 开始算，即 a r a 中的 r a
      // 这是属于下一个子串的，所以下一个子串长度的计算要依赖于之前算的2，如果下一个字母是c, a r a c, 那么子串长度应该是计算 r a c 的长度
      // 所以要基于curLength++
      if (curLength > maxLength) {
        maxLength = curLength
      }
      // 此时子串长度就到i处，因为到i的时候已经有重复了，长度为 i - preIndex，即两次重复字母的距离
      curLength = i - preIndex
    }

    position[`${string[i]}-a`] = i
  }

  if (curLength > maxLength) maxLength = curLength

  return curLength
}

console.log(main('arabcacfr'))