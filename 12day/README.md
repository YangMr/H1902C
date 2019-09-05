# ant design

## 如果要使用ant design？

1. 创建项目
    
    create-react-app  项目名称
    
2. 进入项目目录

    cd 项目名称
    
3. 启动项目

    npm start
    
4. 在控制台暂停项目

    ctrl + c
    
5. 安装antd-mobile

    cnpm install antd-mobile --save  
   
6. 进行配置

- 入口页面 (html 或 模板) 相关设置：
- 引入 FastClick 并且设置 html meta (更多参考 #576)
- 引入 Promise 的 fallback 支持 (部分安卓手机不支持 Promise)

    <!DOCTYPE html>
    <html>
    <head>
      <!-- set `maximum-scale` for some compatibility issues -->
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
      <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
      <script>
        if ('addEventListener' in document) {
          document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
          }, false);
        }
        if(!window.Promise) {
          document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
        }
      </script>
    </head>
    <body></body>
    </html>
    
- 在index.js内引入antd-mobile.css文件
- 按需加载自己想要的组件

7. 组件的使用


    