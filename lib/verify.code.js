'use strict';
const { createCanvas } = require('canvas');
const { randomColor, randomNum } = require('./utils')

class EggVerifyCode {
  constructor() {
    this.codeText = '';
  }
  generateCode(config) {
    this.config = config;
    const { width, height } = this.config.canvas;
    this.canvas = createCanvas(this.config.canvas.width, this.config.canvas.height);
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = randomColor(180,230);
    this.ctx.fillRect(0,0, width, height);
    this.ctx.font = this.config.font;
    const random = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
    const index = () => (Math.floor(Math.random() * 36));
    const y = (min = 18, max = 22) => {
      const range = max - min;
      const rand = Math.random();
      return min + Math.round(rand * range); // 四舍五入
    };

    this.drawLine();
    this.drawText(random[index()], 5, y());
    this.drawText(random[index()], 25, y());
    this.drawText(random[index()], 45, y());
    this.drawText(random[index()], 68, y());
    this.drawCirclePoint()
    return {
      code: this.codeText,
      image: this.canvas.toDataURL(),
    };
  }

  /**
   * 画文本
   * @param text 文本
   * @param x 水平偏移
   * @param y 垂直偏移
   */
  drawText(text, x, y = 22) {
    const ctx = this.ctx;
    ctx.save();
    this.codeText += text;
    ctx.fillText(text, x, y);
  }

  /**
   * 随机画几条彩色线条
   */
  drawLine() {
    const ctx = this.ctx;
    const { width, height } = this.config.canvas;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(randomNum(0, width), randomNum(0, height));
      ctx.lineTo(randomNum(0, width), randomNum(0, height));
      ctx.strokeStyle = randomColor(180, 230);
      ctx.closePath();
      ctx.stroke();
    }
  }

  /**
   * 画圆
   */
  drawCirclePoint() {
    const ctx = this.ctx;
    const { width, height } = this.config.canvas;
    for (let i = 0; i < 40; i++) {
      ctx.beginPath();
      ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = randomColor(150, 200);
      ctx.fill();
    }
  }
}

module.exports = EggVerifyCode;
