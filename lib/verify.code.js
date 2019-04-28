'use strict';
const { createCanvas } = require('canvas');

class EggVerifyCode {
  constructor() {
    this.codeText = '';
  }
  generateCode(config) {
    this.config = config;
    this.canvas = createCanvas(this.config.canvas.width, this.config.canvas.height);
    this.ctx = this.canvas.getContext('2d');
    this.ctx.font = this.config.font;
    const random = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
    const index = () => (Math.floor(Math.random() * 36));
    const y = (min = 18, max = 22) => {
      const range = max - min;
      const rand = Math.random();
      return min + Math.round(rand * range); // 四舍五入
    };
    this.drawText(random[index()], 5, y());
    this.drawText(random[index()], 25, y());
    this.drawText(random[index()], 45, y());
    this.drawText(random[index()], 68, y());
    this.drawLine();
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

  drawLine() {
    const ctx = this.ctx;
    const num = Math.floor(Math.random() * 2 + 3);
    // 随机画几条彩色线条
    for (let i = 0; i < num; i++) {
      const colorRandom = (Math.random() * 0xffffff << 0).toString(16);
      const color = '#' + colorRandom;
      const y1 = Math.random() * this.config.canvas.height;
      const y2 = Math.random() * this.config.canvas.height;
      // 画线
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.lineTo(0, y1);
      ctx.lineTo(this.config.canvas.width, y2);
      ctx.stroke();
    }
  }
}

module.exports = EggVerifyCode;
