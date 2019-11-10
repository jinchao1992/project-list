// 创建根节点树
const createTree = (value) => {
  return {
    data: value,
    children: null,
    parent: null
  }
}
// 增加子级
const addChild = (node, value) => {
  const newNode = {
    data: value,
    children: null,
    parent: node
  }
  node.children = node.children || []
  node.children.push(newNode)
  return newNode
}
// 遍历节点值
const trave = (tree, fn) => {
  fn(tree)
  if (!tree.children) {
    return
  }
  for (let i = 0; i < tree.children.length; i++) {
    trave(tree.children[i], fn)
  }
}

const tree = createTree(10)
const node2 = addChild(tree, 20)
addChild(tree, 30)
addChild(tree, 40)
addChild(node2, 2001)
addChild(node2, 2002)
addChild(node2, 2003)
addChild(node2, 2004)
console.log(tree)

// trave(tree, (node) => {
//   // console.log(node.data)
//   console.log(node.data)
// })