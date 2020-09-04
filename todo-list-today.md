# 基于 vue2.x | vue3 的项目基础架构搭建

说明: [x] 已完成 [ ] 未完成

#### 主要用到的库

- vue 全家桶 vue3 + vue-router + vuex + typescript
- http 请求:axios
- ui 库:ant-design-vue.
- 提交规范:git cz commitizen,版本更改历史: changelog
- 文档工具:typedoc
- 代码检查:eslint+eslint-typescript,格式化:prettier.
- 测试用例:mocha,ts-node

#### 代码基础架构说明

- <b>api</b> http 请求相关文件夹
- <b>assets</b> 静态资源文件,未经压缩的,会走 webpack 压缩流程
- <b>public</b> 静态资源文件,根目录,不会经过 webpack 压缩打包,存放已经处理好的第三方资源,会原样输出
- ...

#### 组件编写

- [x] 支持 tsx 方式编写页面,在.tsx 文件或者 class-component 里写 tsx.
- [x] 支持 class-component 写法.
- [x] 同时支持(.vue|.tsx.|.ts) 编写页面,defineComponent 以及 class-componnet 都支持智能提示.

#### 样式配置

> 均通过 webpack 实现.

- [x] 自动注入全局样式
- [x] 配置全局 less 变量
- [x] 支持自定义 UI 库的主题颜色

#### 网络请求

- [x] 基于 axios 封装脱离具体业务逻辑的网络请求,支持编写脱离浏览器环境的测试用例.(跟业务无关)
- [ ] 基于具体业务逻辑再次封装网络请求 (跟业务相关,此项需要依据具体后台应用接口编写)

#### 数据状态管理

- [x] 建立应用数据状态管理
- [x] 编写更加建议读取的方法,并完善 type
- [x] 支持多个模块,以及自动装载模块
- [ ] 支持持久化 (vue3 暂不支持)

#### UI 库

- [ ] 添加 ant-design-vue,支持按需加载
- [ ] 将 UI 库部分功能如 message 添加到根目录

#### 插件与常用工具函数

- [ ] 引用常用工具函数

#### 配置

- [ ] 配置 webpack,分离开发/测试/生产环境配置.
- [ ] 添加 webpack 常用插件,优化打包配置.
- [x] 根据环境配置 vue-cli 环境变量(环境相关)
- [x] 配置应用全局静态常量(业务相关)
- [x] 完成 tsconfig 相关配置
- [x] 增加编辑器配置

#### 开发工具

- [x] eslint 代码检查,配置 prettier 格式化工具,使检查规则和格式化规则一致
- [x] 新增提交规范 git cz commitizen,统一代码提交规范
- [x] 在提交规范的基础上,增加版本更改历史,自动生成 changelog
- [ ] 为没有 type 的库和变量添加 shims

#### 文档

- [ ] 使用 TYPEDOC 搭建项目文档应用 (typescript4 暂时有 bug)
- [x] 配置 http-server 启动文档应用

#### 测试用例

- [ ] 支持编写 js,ts 的测试用例
