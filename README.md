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

## Install

```bash
$ npm i egg-verify-code --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.verifyCode = {
  enable: true,
  package: 'egg-verify-code',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.verifyCode = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/pc1995/egg-verify-code/issues).

## License

[MIT](LICENSE)
