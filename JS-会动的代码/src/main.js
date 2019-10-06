let demo = document.querySelector('#demo');
let str = `
你好，我是一名前端程序员
我需要在页面上加点样式，
首先，加一个背景
body {
  color: red;
}
`;
let n = -1;
// str = str.replace(/\n/g, '<br>');
let str2 = '';
let step = () => {
  setTimeout(() => {
    if (n >= str.length - 1) {
      return;
    }
    n += 1;
    if (str[n] === '\n' && n !== 0) {
      str2 += '<br>'
    } else {
      str2 += str[n]
    }
    demo.innerHTML = str2;
    step();
  }, 100)
}
step();