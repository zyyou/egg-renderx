'use strict';

module.exports = app => {
  app.router.get('/:client', async function () {

    switch (this.params.client) {
      case 'ios':
        this.body = `isIOS:${this.isIOS}`;
        break;
      case 'android':
        this.body = `isAndroid:${this.isAndroid}`;
        break;
      case 'mobile':
        this.body = `isMobile:${this.isMobile}`;
        break;
      case 'weixin':
        this.body = `isWeixin:${this.isWeixin}`;
        break;
      default:
        this.body = {
          isIOS: this.isIOS,
          isAndroid: this.isAndroid,
          isMobile: this.isMobile
        };
        break;
    }
  });
};