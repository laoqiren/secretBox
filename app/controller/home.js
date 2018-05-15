'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const locals = {
      topics: [
        {
          url: 'http://luoxia.me',
          title: '秘密一'
        },
        {
          url: 'http://luoxia.me',
          title: '秘密二'
        },
        {
          url: 'http://luoxia.me',
          title: '秘密三'
        }
      ]
    };
    await this.ctx.render('index.tpl',locals);
  }
}

module.exports = HomeController;
