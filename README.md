# egg 视图扩展
plugin.js中配置
```
exports.renderx = {
  enable: true,
  package: 'egg-renderx'
};
```

# 渲染视图
```
await this.ctx.renderX(name, locals, options);
```

# 规则说明
以index的njk视图为例：

- 文件名
  - PC端：index.njk
  - 移动端：index.h5.njk

- 适配
  - PC访问：index.njk
  - 移动端访问：index.h5.njk

- 仅有一个index.njk时适配
  - PC访问：index.njk
  - 移动端访问：index.njk

- 仅有一个index.h5.njk时适配
  - PC访问：抛异常
  - 移动端访问：index.h5.njk

- 总结：无论是否需要适配移动端，都需要有一个index.njk
