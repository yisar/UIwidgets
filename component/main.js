export default function() {
  const container = document.querySelector('.container')
  const slider = document.querySelector('.slider')
  let dots = [].slice.call(document.querySelectorAll('.dots span'))
  let currentIndex = 0
  let len = 3
  let isAnimate = false
  let timer
  // 无限滚动
  function animate(offset) {
    if (offset == 0) {
      return
    }
    isAnimate = true
    const time = 500 //位移总时间
    const interval = 10 //间隔时间
    const speed = offset / (time / interval) //每次位移量

    let newOffset = parseInt(slider.style.left) + offset

    function go() {
      if (
        (speed < 0 && parseInt(slider.style.left) > newOffset) ||
        (speed > 0 && parseInt(slider.style.left) < newOffset)
      ) {
        slider.style.left = parseInt(slider.style.left) + speed + 'px'
        if (slider.style.left > -440) {
          slider.style.left = -1760 + 'px'
        }
        if (slider.style.left < -1760) {
          slider.style.left = -440 + 'px'
        }
        setTimeout(go, interval)
      } else {
        slider.style.left = newOffset + 'px'
        if (newOffset > -440) {
          slider.style.left = -440 * len + 'px'
        }
        if (newOffset < -440 * len) {
          slider.style.left = '-440px'
        }
        isAnimate = false
      }
    }
    go()
  }

  // 自动播放
  function play() {
    timer = setInterval(() => {
      animate(-440)
      currentIndex++
      if (currentIndex == 3) {
        currentIndex = 0
      }
      showDot()
    }, 3000)
  }

  // 停止播放
  function stop() {
    clearInterval(timer)
  }

  // 圆点高亮
  function showDot() {
    dots.forEach(item => {
      if (item.className == 'active') {
        item.className = ''
      }
    })
    dots[currentIndex].className = 'active'
  }
  // 圆点点击事件
  function dotClick() {
    dots.forEach((item, index) => {
      item.onclick = () => {
        let offset = -440 * (index - currentIndex)
        currentIndex = index
        animate(offset)
        showDot()
      }
    })
  }
  container.onmouseover = stop
  container.onmouseout = play
  play()
  dotClick()
}
