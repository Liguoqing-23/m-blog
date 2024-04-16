# Hydro 项目结构

> [!note] 官方文档
>
> -   https://docs.hydro.ac/
> -   https://github.com/hydro-dev/Hydro

> [!tip]
> 本系列均粗浅分析，如有错误请指正。

## 项目结构

Hydro 用 Yarn Workspaces 实现 Monorepo。

```json
// package.json
{
    "workspaces": ["packages/*", "plugins/*", "modules/*"]
}
```

不过 `plugins` 和 `modules` 下都是空的。

`packages` 下包括：

```
packages
├── a11y                - 自动配置 uid 为 2 的用户为超管
├── blog                - 博客模块
├── center              - DataReport
├── elastic             - ElasticSearch 题目搜索
├── eslint-config       - eslint 配置
├── fps-importer        - FPS 格式题源导入
├── geoip               - IP 登陆地
├── hydrojudge          - 测评模块
├── hydrooj             - 后端
├── import-hoj          - HOJ 题源导入
├── import-qduoj        - QDUOJ 题源导入
├── login-with-github   - GitHub 登录
├── login-with-google   - Google 登录
├── migrate             - 从其他 OJ 升级
├── onlyoffice          - onlyoffice 在线编辑器，doc/docx
├── onsite-toolkit      - IP 自动登录
├── prom-client         - 服务监控，导出系统状态
├── recaptcha           - 注册时 reCAPTCHA 验证
├── register
├── sonic               - 题目搜索
├── ui-default          - 默认 UI
├── utils               - 工具函数
└── vjudge              - 远程评测
```

可以看到，`packages` 下的一个一个 package 都是官方提供的插件。Hydro 是插件化的架构，底层依赖 cordis，什么周期也由 cordis 管理，可以理解为插件作为一等公民贯穿项目始终，无论前后端都可以用插件自定义。

> [!note] 官网插件介绍
> https://docs.hydro.ac/plugins/

