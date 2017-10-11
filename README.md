# emall

> 基于 webpack2 + vue2 + vuex2 + vue-router2 + axios [启动模板](https://github.com/lkiarest/webpack/tree/cpdaily) 创建

仅提供模板工程及通用 lib 供 DIY，不做任何多余的事情(The Single Responsibility Principle)

### http
基于 axios 封装 http 请求 （utils/http），自行引入

### Vuex (optional)
自行引入 vuex/store

### polyfill
默认引入 utils/polyfills

### 多语言(optional)

1. 将多语言文件(cn.json , en.json ...) 放在src/config/i18n 目录下，编译工具会使用 vue-i18n 将多语言注入到app中。
1. 页面按照 vue-i8n 的[文档](https://github.com/kazupon/vue-i18n) 书写即可

### 常用配置
通用配置（如js lib，proxy）等参考 build.config.js

### index 模板
可自行定制 index 模板，参考 build/template

### 可在一个项目中发布多个独立应用或单个应用

1. src/pages 目录下包含多个应用(hello1, hello2)

    打包后会在dist中生成多个独立的app发布目录，使用app名称区分。

    ```
    // 开发模式
    npm run dev
    // 发布模式
    npm run build
    ./startup.bat #启动http server
    // 访问 http://localhost:3000/hello1/index.html
    // 访问 http://localhost:3000/hello2/index.html
    ```

1. src/pages 目录下包含单个应用(hello1)

    打包后会在dist中生成独立的发布目录，直接放在根目录下。
    ```
    // 开发模式
    npm run dev
    // 发布模式
    npm run build
    ./startup.bat #启动http server
    // 访问 http://localhost:3000/index.html
    ```
