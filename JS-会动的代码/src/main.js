let html = document.querySelector('#html');
let style = document.querySelector('#style');
let str = `
/* 你好，我是一名前端程序员
* 我需要在页面上加点样式，
* 首先，加一个好看的背景
* 和好看的文字颜色
*/
body {
  background: #21374b;
  color: white;
  font-size: 12px;
}
/*
* 接下来，在页面上画一个div
*/
#div1 {
 width: 200px;
 height: 200px;
 top: 20px;
 right: 20px;
 border: 1px solid red;
}
/*
* div 不太好玩呀
* 没关系，可以画一个八卦图
* 首先，把 div 变成一个圆
*/
#div1 {
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  border: none;
}
/*
* 八卦图
* 阴阳相接，一黑一白
*/
#div1 {
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
* 八卦太极搞起来
*/
#div1::before {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
}
#div1::after {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
}
/*
* 画龙点睛
* 画太极需要点圈啦
*/
#radius_01 {
  position:absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
}
#radius_02 {
  position:absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  z-index:2;
}
`;
let n = 0;
// str = str.replace(/\n/g, '<br>');
let str2 = '';
let step = () => {
  setTimeout(() => {
    if (n >= str.length - 1) {
      // 如果n超过最大的下标值，则不再继续
      return;
    }
    if (str[n] === '\n' && n !== 0) {
      // 当字符串中包含回车且不是第一个回车时就用换行标签代替
      str2 += '<br>'
    } else if (str[n] === ' ') {
      str2 += '&nbsp;'
    } else {
      str2 += str[n]
    }
    html.innerHTML = str2;
    style.innerHTML = str.substring(0, n + 1)
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    n += 1;
    step();
  }, 50)
}
step();