const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

// 1.创建一个粒子容器
let particles = [];

// 2.创建一个粒子构造函数
function Particle() {

}

// 3.给粒子构造函数添加一个绘制方法,
Particle.prototype.draw = function () {
}

// 4.给粒子构造函数添加一个更新方法
Particle.prototype.update = function () {
    // 判断粒子是否超出边界

    // 更新时偏移
    this.draw()
}

function init() {
    particles = [];
    for (let i = 0; i < 100; i++) {
    }
}


// 递归动画
function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
    }
}
init()
animate()

window.addEventListener('resize', () => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    init()
})