const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

// 1.创建一个粒子容器
let particles = [];

// 2.创建一个粒子构造函数
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // 3.给粒子构造函数添加一个绘制方法,
    draw() {
        ctx.beginPath();
    }

    // 4.给粒子构造函数添加一个更新方法
    update() {
        // 重绘粒子
        this.draw()
    }
}

function init() {
    // 创建粒子
    particles = [];
    // 粒子数量
    let numberOfParticles = 100;
    for (let i = 0; i < numberOfParticles; i++) {
    }
}


// 递归动画
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        // particles[i].update();
    }
}
init()
animate()

window.addEventListener('resize', () => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    init()
})