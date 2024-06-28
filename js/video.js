const shell = document.querySelector(".shell")
const video = document.querySelector(".video")
// 获取shell和video
shell.addEventListener('mouseenter',function(e){// 定义鼠标移入
    this.x = e.clientX
    // x为鼠标移入时所处的位置，取消过渡效果
    video.style.transition = 'none'
})
shell.addEventListener('mousemove',function(e){// 定义鼠标移动
    this._x=e.clientX
    const disx = this._x - this.x
    // 鼠标在video中移动的距离
    const move = 36 - disx / -20
    // 算出偏移量
    video.style.transform = `translate(${move}px,-8px)`
})
shell.addEventListener('mouseleave',function(e){// 定义鼠标移除
    video.style.transition = .3 + 's'
    // 鼠标移除时添加过渡时间和重置video的偏移量
    video.style.transform = 'translate(36px,-8px)'
})
