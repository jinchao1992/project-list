// 获取元素
const screen = document.querySelector('#screen')
const btnCreateNumber = document.querySelector('#create-number')
const btnCallNumber = document.querySelector('#call-number')
const btnClear = document.querySelector('#clear')
const nowNumber = document.querySelector('#now-number')
const queueNumber = document.querySelector('#queue')

// 初始取号值
let n = 0;

// 队列叫号值
let queue = []

btnCreateNumber.addEventListener('click', () => {
  n += 1
  queue.push.call(queue, n)
  nowNumber.innerText = n
  queueNumber.innerText = JSON.stringify(queue)
})

btnCallNumber.addEventListener('click', () => {
  if (queue.length === 0) {
    alert('您当前的业务已经处理完毕，可以休息啦')
    return;
  }
  const m = queue.shift.call(queue)
  screen.innerText = `请${m}号上前办理`
  queueNumber.innerText = JSON.stringify(queue)
})

// 清空
btnClear.addEventListener('click', () => {
  n = 0;
  nowNumber.innerText = n
  screen.innerText = ''
  queueNumber.innerText = '[]'
  queue = []
})
