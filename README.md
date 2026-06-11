# vue3-ts-base

Vue 3 + TypeScript 基础项目模板，内置路由、Vuex 状态管理、Ant Design Vue、国际化、Axios 请求封装、Less 主题、单元测试、提交规范和 CI。

## Maintenance Status

本仓库从 2026-06 起恢复维护，当前目标是把这个早期 Vue 3 + TypeScript starter 重新整理成可稳定安装、验证和二次开发的开源模板。旧迁移公告中提到的社区仓库作为历史参考保留；本仓库继续作为 `ibwei/vue3-ts-base` 的主维护入口。

- Demo: [https://ibwei.github.io/vue3-ts-base/](https://ibwei.github.io/vue3-ts-base/)
- Issues: [https://github.com/ibwei/vue3-ts-base/issues](https://github.com/ibwei/vue3-ts-base/issues)
- License: MIT

## Features

- Vue 3 + TypeScript + Vue Router + Vuex
- Ant Design Vue 组件接入和主题配置
- `vue-composable` 国际化示例
- Axios 请求实例、请求/响应拦截器和业务 API 分层
- 自动装载路由模块、Vuex modules 和插件入口
- Less 全局变量、Normalize、图标字体和资源目录约定
- Mocha + Chai + Vue Test Utils 单元测试
- ESLint、Prettier、Commitlint、Commitizen、Husky、lint-staged
- GitHub Actions 执行 lint、test、build，并在 `master` 推送后部署 demo

## Requirements

- Node.js >= 18
- npm >= 10

项目仍保留 Vue CLI 4 兼容层。为了兼容 Webpack 4 在现代 Node.js 下的 OpenSSL 行为，构建和测试脚本已经内置 `NODE_OPTIONS=--openssl-legacy-provider`。

## Quick Start

```bash
npm ci
npm run serve
```

生产构建：

```bash
npm run build
```

完整验证：

```bash
npm run validate
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run serve` | 启动本地开发服务 |
| `npm run build` | 生成生产构建 |
| `npm run lint` | 本地 lint，可自动修复 |
| `npm run lint:ci` | CI 使用的只检查 lint |
| `npm run test:unit` | 执行单元测试 |
| `npm run test:api` | 执行 API/规则相关测试 |
| `npm run validate` | 依次执行 lint、unit test、build |
| `npm run analysis` | 构建并开启 bundle analyzer |
| `npm run docs` | 生成 TypeDoc 文档并启动文档服务 |
| `npm run changelog` | 生成 changelog |
| `npm run commit` | 使用 Commitizen 生成规范提交信息 |

## Project Structure

```text
.
|-- public/                 # 静态资源和 HTML 模板
|-- src/
|   |-- @types/             # 项目共享类型
|   |-- api/                # Axios 实例和业务 API 模块
|   |-- assets/             # Webpack 处理的图片、字体等资源
|   |-- components/         # 通用组件和全局组件
|   |-- config/             # 应用静态配置
|   |-- i18n/               # 国际化配置和语言包
|   |-- layout/             # 页面骨架
|   |-- plugins/            # 第三方插件挂载入口
|   |-- router/             # 路由和路由模块
|   |-- store/              # Vuex store、modules 和工具方法
|   |-- styles/             # 全局样式、Less 变量和主题
|   |-- utils/              # 通用工具函数和 hooks
|   |-- views/              # 页面级组件
|   |-- App.vue
|   `-- main.ts
|-- tests/
|   |-- api/                # API/规则相关测试
|   `-- unit/               # 组件和工具单元测试
|-- .github/                # CI、issue 模板和 PR 模板
|-- CONTRIBUTING.md
|-- SECURITY.md
|-- vue.config.js
|-- tsconfig.json
`-- package.json
```

## Development Notes

- 当前版本优先解决可安装、可测试、可贡献的问题。
- 依赖大升级、Vue CLI 到 Vite 的迁移、Ant Design Vue 主版本升级应拆成单独 PR。
- 新增通用能力时，请同步补测试或文档说明。
- PR 前请运行 `npm run validate`。

## Roadmap

- 处理历史 issue 和 open PR，标记可复现问题。
- 增加更多基础组件和工具函数测试。
- 清理 demo 页面中的临时代码和无业务意义的 console 输出。
- 评估 Vue CLI 4 到 Vite 的迁移路径。
- 发布新的 `v0.2.x` 维护版本。

## Contributing

请查看 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## Security

安全问题请查看 [SECURITY.md](./SECURITY.md)。
