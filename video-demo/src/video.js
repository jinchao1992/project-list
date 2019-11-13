const chimeeVideo = new ChimeeMobilePlayer({
  wrapper: '#videWrap',  // video dom容器
  src: 'https://www.runoob.com/try/demo_source/movie.mp4',
  autoplay: true,
  controls: false,
  playsInline: true,
  preload: 'auto',
  x5VideoPlayerFullscreen: true,
  x5VideoOrientation: 'landscape|portrait',
  xWebkitAirplay: true,
  muted: true,
  // removeInnerPlugins: ['chimeeMobiControlbar', 'chimeeState'] // 需要移除的插件
});

const oVideWrap = document.querySelector('#videWrap');
const aItemContainer = document.querySelectorAll('.item-container');
const items = aItemContainer[1].querySelectorAll('.item');
const btnPlay = document.querySelector('.btn-play')
let x, y
items[0].querySelector('.itemImg').onload = function () {
  x = (this.offsetWidth / document.documentElement.clientWidth).toFixed(6);
  y = (this.offsetHeight / document.documentElement.clientHeight).toFixed(4);
}


setPosition()

function setPosition() {
  const timer = setTimeout(() => {
    oVideWrap.style.transform = `scale(${x},${y}) translate3d(-20px, 0, 0)`
    oVideWrap.style.position = 'absolute';
    document.body.style.overflow = "auto"
  }, 4500)
}
