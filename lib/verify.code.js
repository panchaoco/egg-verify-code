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
    this.drawText(random[index()], 5, 18);
    this.drawText(random[index()], 25, 20);
    this.drawText(random[index()], 45, 22);
    this.drawText(random[index()], 68, 26);
    return {
      code: this.codeText,
      image: this.canvas.toDataURL()
    };
  }

  drawText(text, x, y = 22) {
    const ctx = this.ctx;
    ctx.save();
    this.codeText += text;
    ctx.fillText(text, x, y);
  }
}

module.exports = EggVerifyCode;
