# 在本地启动此项目

## Step 1: clone此仓库

```
https://github.com/hotdogc1017/nextui-vue.git
```
## Step 2: 配置你的vscode

> 由 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 驱动，感恩 [antfu](https://github.com/antfu)

安装 [VS Code ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 扩展

在你的`.vscode/settings.json`中添加以下选项：

```json
{
  // 禁用默认的格式化, 而使用eslint
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // 保存时自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // 在你的IDE中静默地遵循风格规则，但仍然自动修复它们
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // 为所有支持的语言启用 ESLint
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```

## Step 3: 将组件链接到本地

进入项目所在的路径

```bash
cd 项目所在目录的路径/nextui-vue
```

将`packages/nv-components`链接到根目录下的`node_modules`

```bash
pnpm link packages/nv-components
```

## Step 4: 安装依赖并启动

```bash
pnpm i && pnpm dev
```