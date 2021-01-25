# 项目基础代码架构说明

- 如果对你有帮助的话，欢迎star
- demo 演示地址:[https://ibwei.github.io/vue3-ts-base/](https://ibwei.github.io/vue3-ts-base/)  
#### 包管理工具

- 建议使用 yarn,也是 vue-cli4.0+ 默认工具
  
#### 主要用到的库

- vue 全家桶 vue3 + vue-router + vuex + typescript
- http 请求:axios
- ui 库:ant-design-vue.
- 提交规范:git cz commitizen
- 版本更改历史: changelog
- 文档工具:typedoc
- 代码检查:eslint+eslint-typescript,格式化:prettier.提交之前检查与修复：lint-staged
- 测试用例:mocha,ts-node
- webpack 插件:style-resources-loader（全局 less）webpack-bundle-analyzer（包分析工具） splitChunks（代码分离）

#### 代码基础架构说明

```
|-- 根目录
    |-- dist 项目 build 之后的文件夹
    |-- docs 文档生成的根目录位置
    |-- public 项目静态资源，不经过 webpack，以及默认的模版，适合存放第三方压缩好的资源
    |-- src 主要的开发目录
    | |-- @types 项目共用的 type
    | |-- App.vue 页面渲染根节点
    | |-- main.ts 入口文件
    | |-- shims-vue.d.ts vue 文件类型的 type
    | |-- api http 请求相关
    | | |-- apiList.ts api 接口列表
    | | |-- axios.ts 业务请求封装
    | | |-- editor.ts 其他业务封装
    | | |-- user.ts api 请求模块
    | |-- assets 存放静态资源，这个文件夹下的文件会走 webpack 压缩流程
    | |-- components
    | | |-- index.ts 自动注册脚本
    | | |-- global 自动注册的全局组件
    | | |-- ...其他非全局注册的模块
    | |-- config 全局静态配置，不可更改项
    | |-- layout 页面页面骨架
    | |-- plugins 存放第三方插件
    | | |-- index.ts 插件挂载入口
    | |-- router 路由
    | | |-- index.ts 路由入口
    | |-- store vuex
    | | |-- modules 多个模块
    | | |-- index.ts 自动装载模块
    | | |-- app app 模块
    | |-- styles 全局样式，一句 ui 库主题样式
    | | |-- \_variables.less
    | | |-- test.less
    | |-- utils 常用函数以及其他有用工具
    | | |-- common.ts
    | |-- views 页面级组件
    | |-- Home.vue 正常页面
    | |-- test 组件测试页面
    | |-- Test.vue
    |-- tests 测试用例
    |-- api api 模块
    |-- unit 单元测试
    |-- .czrc 提交规范选项设置
    |-- .editorconfig vscode 编辑器 设置
    |-- .env.development 开发环境配置
    |-- .env.preview 测试环境配置
    |-- .env.production 生产环境配置
    |-- .eslintignore eslint 要忽略的文件夹
    |-- .eslintrc.js eslint 规则配置
    |-- .gitattributes github 语言选项设置
    |-- .gitignore git 忽略的文件
    |-- .gitlab-ci.yml gitlab CI/CD 配置
    |-- .prettierrc.js 格式化插件配置
    |-- CHANGELOG.md 版本更改说明
    |-- Dockerfile 如果需要容器部署
    |-- README.md 项目说明
    |-- babel.config.js babel 设置
    |-- global.d.ts 全局的 type
    |-- package.json npm 配置
    |-- tsconfig.json typescript 配置
    |-- typedoc.json 文档配置文件
    |-- vue.config.js vue-cli 脚手架配置文件
```

#### 组件编写

- [x] 支持 tsx 方式编写页面,在.tsx 文件或者 class-component 里写 tsx.
- [x] 支持 class-component 写法.
- [x] 同时支持(.vue|.tsx.|.ts) 编写页面,defineComponent 以及 class-componnet 都支持智能提示.

#### 样式配置

> 均通过在 vue-cli 中配置 webpack 实现.

- [x] 自动注入全局样式
- [x] 配置全局 less 变量
- [x] 支持自定义 UI 库的主题颜色

#### 网络请求

- [x] 基于 axios 封装脱离具体业务逻辑的网络请求,支持编写脱离浏览器环境的测试用例.(跟业务无关)
- [x] 基于具体业务逻辑再次封装网络请求 (跟业务相关,此项需要依据具体后台应用接口编写)

#### 数据状态管理

- [x] 建立应用数据状态管理
- [x] 编写更加简易读取的mutation方法,并完善 type 【新增】
- [x] 支持多个模块,以及自动装载模块
- [x] 支持持久化

#### UI 库

- [x] 添加 ant-design-vue,支持组件按需加载
- [x] 将 UI 库部分功能如 message 添加到每个组件实例

#### 插件与常用工具函数

- [x] 引用常用工具函数
- [x] 常用 hook 

#### 配置

- [x] 配置 webpack,分离开发/测试/生产环境配置.
- [x] 添加 webpack 常用插件,优化打包配置.
- [x] 根据环境配置 vue-cli 环境变量(环境相关)
- [x] 配置应用全局静态常量(业务相关)
- [x] 完成 tsconfig 相关配置
- [x] 增加编辑器配置

#### 开发工具

- [x] eslint 代码检查,配置 prettier 格式化工具,使检查规则和格式化规则一致
- [x] 新增提交规范 git cz commitizen,统一代码提交规范
- [x] 为没有 type 的库和变量添加 shims

#### CI/CD

- [x] 配置自动构建/持续集成配置文件(与部署相关,需结合到具体项目部署情况)

#### 文档

- [x] 使用 TYPEDOC 搭建项目文档应用
- [x] 在提交规范的基础上,增加版本更改历史,自动生成 changelog
- [x] 配置 http-server 启动文档应用

#### 测试用例

- [x] 支持编写 js,ts 的测试用例

## 安装依赖

```
yarn install
npm install
```

### 开发模式

```
yarn serve
npm run serve
```

### 生产环境

```
yarn build
npm run build
```

### 测试用例

- api 模块开发环境下单元测试

```
npm run test-dev:api
```

- api 模块常规单元测试

```
npm run test:api
```

- 查看打包结果分析
  
``` 
npm run analysis
```
### 更多问题

如果有问题，请提 issue 说明 => [传送门](https://github.com/ibwei/vue3-base).
