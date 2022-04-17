## 1.初始化项目使用 webpack 管理并安装依赖

初始化

```
yarn init
```

安装依赖

```
yarn

```

## 2.安装 tailwindcss

npm install -D tailwindcss
npx tailwindcss init

## 3.配置 tailwindcss.config.js

## 4.导出 tailwindcss

src/input.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 5.添加 watch 脚本

npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
