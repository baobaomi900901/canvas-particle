const canvas = document.querySelector('#canvas1');
// console.log(canvas);

const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

// 1.创建一个粒子容器
let particles = [];

// 2.创建一个粒子构造函数
function Particle(x, y, directionX, directionY, size, color) {
    this.x = x
    this.y = y
    this.directionX = directionX
    this.directionY = directionY
    this.size = size
    this.color = color
}

// 3.给粒子构造函数添加一个绘制方法
Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false); // 圆形粒子
    ctx.fillStyle = this.color;
    ctx.fill(); // 着色
}


for (let i = 0; i < 100; i++) {
    let size = Math.random() * 10;
    let x = Math.random()*(canvas.width - size*2) + size;
    let y = Math.random()*(canvas.height - size*2) + size;
    let directionX = Math.random() * 0.5 - 0.2;
    let directionY = Math.random() * 0.5 - 0.2;
    let color = '#fff'

    particles.push(new Particle(x,y,directionX,directionY,size,color))

    particles[i].draw()
}

// console.log('particles :>> ', particles);