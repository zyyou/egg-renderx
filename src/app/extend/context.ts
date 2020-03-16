import { Context } from "egg";

export default {
  /**
   * 渲染视图
   * @param this Context
   * @param name 视图名
   * @param locals 向视图传递的数据
   * @param options view options, you can use `options.viewEngine` to specify view engine
   */
  async renderX(this: Context, name: string, locals?: any, options?: any) {
    if (!this.isMobile) {
      name = name.replace(".h5", "");
    }
    return await this.render(name, locals, options);
  }
};
