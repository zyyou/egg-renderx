'use strict';

const assert = require('assert');
const mm = require('egg-mock');

describe('test/useragent.test.js', () => {
  let app;

  before(() => {
    app = mm.app({
      baseDir: 'test-app',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('检查是否移动端 get /mobile', () => {
    return app.httpRequest()
      .get('/mobile')
      .set('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1')
      .expect(200)
      .expect('isMobile:true');
  });

  it('检查是否iOS端 get /ios', () => {
    return app.httpRequest()
      .get('/ios')
      .set('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1')
      .expect(200)
      .expect('isIOS:true');
  });

  it('检查是否Android端 get /android', () => {
    return app.httpRequest()
      .get('/android')
      .set('user-agent', 'Mozilla/5.0 (Linux; U; Android 8.1.0; zh-cn; BLA-AL00 Build/HUAWEIBLA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/8.9 Mobile Safari/537.36')
      .expect(200)
      .expect('isAndroid:true');
  });

  it('检查是否微信端 get /weixin', () => {
    return app.httpRequest()
      .get('/weixin')
      .set('user-agent', 'Mozilla/5.0 (Linux; U; Android 8.1.0; MicroMessenger zh-cn; BLA-AL00 Build/HUAWEIBLA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/8.9 Mobile Safari/537.36')
      .expect(200)
      .expect('isWeixin:true');
  });
});