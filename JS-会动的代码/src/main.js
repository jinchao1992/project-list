let demo = document.querySelector('#demo');
let str = `
你好，我是一名前端程序员
我需要在页面上加点样式，
首先，加一个背景
body {
  color: red;
}
`;
let n = 0;
str = str.replace(/\n/g, '<br>');
demo.innerHTML = str.substring(0, n);
// console.log(str.length)
let step = () => {
  setTimeout(() => {
    if (n >= str.length - 1) {
      return;
    }
    n += 1;
    demo.innerHTML = str.substring(0, n + 1);
    step();
  }, 100)
}
step();