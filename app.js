'use strict';

const EggVerifyCode = require('./lib/verify.code');

module.exports = app => {
  const eggVerifyCode = new EggVerifyCode();
  app.verifyCode = {
    generate(config) {
      if (!config) {
        const conf = require('./config/config.default');
        const { verifyCode } = conf;
        config = verifyCode;
      }
      return eggVerifyCode.generateCode();
    },
  };
};
