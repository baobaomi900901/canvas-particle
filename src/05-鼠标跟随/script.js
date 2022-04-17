const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

// 1.创建一个粒子容器
let particles = [];

const mouse = {
    x: null,
    y: null,
    radius: 60 // 鼠标影响范围
}

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    // console.log(mouse);
})

// 颜色
const colors = [
    'blue',
    // 'rgba(255,255,255,0.3)',
    // 'rgba(173,216,320,0.8)',
    // 'rgba(211,211,211,0.8)',
];

// 粒子尺寸最大最小
const maxSize = 40;
const minSize = 0;


// 2.创建一个粒子构造函数
function Particle(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;

}

// 3.给粒子构造函数添加一个绘制方法,
Particle.prototype.draw = function () {
    // ctx.beginPath(); // 开启一个路劲
    // ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false); // 圆
    // ctx.fillStyle = this.color; // 填充颜色
    // ctx.fill(); // 着色

    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    // ctx.fillStyle = 'blue';
    // ctx.fill();


    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    // ctx.fillStyle = this.color;
    // ctx.storkeStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.stroke(); // 描边
    ctx.fill();

}

// 4.给粒子构造函数添加一个更新方法
Particle.prototype.update = function () {

    //    鼠标坐标 - 粒子大小 < 鼠标影响预设区域 
    // && 鼠标坐标 - 粒子大小 > - 鼠标影响预设区域, 则执行放大动画
    if (mouse.x - this.x < mouse.radius &&
        mouse.x - this.x > -mouse.radius &&
        mouse.y - this.y < mouse.radius &&
        mouse.y - this.y > -mouse.radius) {
        if (this.size < maxSize) {
            this.size += 1;
        }
    } else if (this.size > minSize) {
        this.size -= 1;
    }

    // 随机偏移
    this.x += this.directionX;
    this.y += this.directionY;

    if (mouse.x === null || mouse.y === null) {
        this.size = 0;
    }

    this.draw()
}

// 初始化粒子
function init() {
    particles = [];
    for (let i = 0; i < 1000; i++) {
        let size = 1;
        // 分布在 屏幕上
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * .2) - .1;
        let directionY = (Math.random() * .2) - .1;
        let color = colors[Math.floor(Math.random() * colors.length)];

        particles.push(new Particle(x, y, directionX, directionY, size, color));
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

window.addEventListener('mouseout', () => {
    mouse.x = undefined
    mouse.y = undefined
})

// setInterval(() => {
//     mouse.x = undefined
//     mouse.y = undefined
// }, 1000);