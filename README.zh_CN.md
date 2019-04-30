# egg-verify-code

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-verify-code.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-verify-code
[travis-image]: https://img.shields.io/travis/eggjs/egg-verify-code.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-verify-code
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-verify-code.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-verify-code?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-verify-code.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-verify-code
[snyk-image]: https://snyk.io/test/npm/egg-verify-code/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-verify-code
[download-image]: https://img.shields.io/npm/dm/egg-verify-code.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-verify-code

<!--
Description here.
-->

## 依赖说明

该插件依赖于node-canvas包实现

> npm install canvas, 但是这个包不用你安装，再npm install egg-verify-code 时会自动安装

### 依赖的 egg 版本

egg-verify-code 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.verifyCode = {
  enable: true,
  package: 'egg-verify-code',
};
```


## 使用场景

- 在项目中，登录时需要验证码，百度和谷歌之后，发现大家常用的是svg-captcha, 响应给前端的类型必须为image/xml+svg,并直接res了一张图片，而我想以base64的方式返回给前端，返回内容为json对象，显然svg-captcha无法迎合我的需求，因此有了这个小插件。

- 使用实例如下

```js
async generate() {
  const { app, ctx } = this;
  const verify = app.verifyCode.generate();
  ctx.session.code = verify.code;
  return verify.image
}
```

```js
// {app_root}/controller/verify.js

async verifyCode() {
  const { ctx, service } = this
  const image = await service.user.generate()
  ctx.body = {
    image: image
  }
}
```

```js
// {app_root}/router.js

module.exports = app => {
  const { controller, router } = app;
  router.get('/v1/api/verify', app.controller.verify.verifyCode);
}
```

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/pc1995/egg-verify-code/issues) 异步交流。

## License

[MIT](LICENSE)
