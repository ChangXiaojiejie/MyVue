# webpack的使用

## 使用步骤

- 1 创建一个文件夹：`webpack-basic`
- 2 通过 `npm init -y` 初始化一个package.json文件

- 3 安装webpack：`npm i -D webpack webpack-cli`
- 4 在 `package.json` 文件中的 `scripts` 配置项中，添加一个脚本命令

```json
build 表示构建、打包
webpack 入口文件路径 --output 出口文件路径

"scripts": {
  "build": "webpack ./src/js/main.js --output ./dist/bundle.js"
},
```

- 5 在终端中，通过 `npm run build` 来执行上面配置好的 build 命令
- 最终，打包好的内容就会放在 `dist/bundle.js` 目录中
