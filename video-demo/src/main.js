const oVideWrap = document.querySelector('#videWrap');
const eleVideo = document.querySelector('video');
const promise = eleVideo.play();
const aItemContainer = document.querySelectorAll('.item-container');
const items = aItemContainer[1].querySelectorAll('.item');
const btnPlay = document.querySelector('.btn-play')
let x, y
items[0].querySelector('.itemImg').onload = function () {
  x = (this.offsetWidth / document.documentElement.clientWidth).toFixed(6);
  y = (this.offsetHeight / document.documentElement.clientHeight).toFixed(4);
}

oVideWrap.addEventListener('touchend', () => {
  // clearTimeout(timer)
  // window.location.href = 'https://baidu.com'
})

eleVideo.addEventListener('canplaythrough', () => {
  console.log('视频加载完成')
});

// 检测是否在自动播放
if (promise !== undefined) {
  promise.then(() => {
    // Auto-play started
    videoAnimate(true);
  }).catch((error) => {
    // Auto-play was prevented
    // Show a UI element to let the user manually start playback
    console.log('没自动播放')
    videoAnimate(false);
  });
}

function videoAnimate(bFlag) {
  if (!bFlag) {
    console.log('如果不是自动播放')
    btnPlay.style.opacity = '1'
    btnPlay.addEventListener('touchend', () => {
      document.querySelector('video').play();
      btnPlay.style.opacity = '0'
      setPosition()
    })
  } else {
    console.log('如果是自动播放')
    setPosition();
  }
}

function setPosition() {
  const timer = setTimeout(() => {
    oVideWrap.style.transform = `scale(${x},${y}) translate3d(-20px, 0, 0)`
    oVideWrap.style.position = 'absolute';
    document.body.style.overflow = "auto"
  }, 4500)
}