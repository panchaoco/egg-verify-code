'use strict';

const mock = require('egg-mock');

describe('test/verify-code.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/verify-code-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, verifyCode')
      .expect(200);
  });
});
