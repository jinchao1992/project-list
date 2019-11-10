const createList = (value) => {
  return createNode(value)
}
// 添加节点
const appendList = (list, value) => {
  const node = createNode(value)
  let temp = list
  while (temp.next) {
    temp = temp.next
  }
  // 当 temp.next === null 时结束循环，代表没有下一级了
  temp.next = node
  return node
}
// 删除节点
const removeNode = (list, node) => {
  debugger;
  let temp = list
  let prevTemp = null
  if (list === node) {
    // 如果删除的节点跟当前节点一样
    list = node.next
    return;
  }
  while (temp !== node) {
    prevTemp = temp
    temp = temp.next
  }
  prevTemp.next = temp.next
  // if (list === node) {
  //   // 如果删除的是第1个节点
  //   list = node.next
  // } else {
  //   if (list.next === node) {
  //     // 如果删除的是第2个节点,则第1个节点.next = 第2个节点.next
  //     list.next = node.next
  //   } else {
  //     // 如果删除的是第3个节点，则第2个节点.next = 第3个节点.next
  //     if (list.next.next === node) {
  //       (list.next).next = node.next
  //     }
  //   }
  // }
}
// 遍历节点
const traveList = (list, fn) => {
  let temp = list
  while (temp !== null) {
    fn(temp)
    temp = temp.next
  }
}
// 修改节点数据
const setList = (list, index) => {
  let temp = list
  let n = 1
  while (temp !== null && n !== index) {
    temp = temp.next;
    n += 1
  }
  return temp
}

// 创建节点的公共方法
const createNode = (value) => {
  return {
    data: value,
    next: null
  }
}

const list = createList(10)
const node2 = appendList(list, 20)
const node3 = appendList(list, 30)
const node4 = appendList(list, 40)

// removeNode(list, node2)

// traveList(list, (node) => {
//   console.log(node.data)
// })

let setNode = setList(list, 2);

console.log(setNode)

// console.log('list')
// console.log(list)