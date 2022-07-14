# 河长办工作平台

## 管理

本项目通过 [Angular CLI](https://github.com/angular/angular-cli) 1.0.0 生成。

## 开发服务器

运行 `ng serve` 启动开发服务器. 通过浏览器打开 `http://localhost:4200/` 进行浏览。如果源文件发生变化，浏览器会自动进行刷新。

## 代码脚手架

通过运行命令行来 `ng generate component component-name` 来生成一个组件。还可以通过运行 `ng generate directive/pipe/service/class/module` 来生成各个对象。
具体用法如下：
```shell
$ ng g component components/[component-name]
$ ng g service services/[service-name]
```

## 构建

运行 `ng build` 来构建项目。构建完的结果会放在 `dist/` 目录中。用 `-prod` 参数来生成一个生产构建。
部署到外网地址 运行 `node --max-old-space-size=8196 ./node_modules/@angular/cli/bin/ng build -prod --environment=prodouter`  生成构建 外网地址 https://hzz.swj.sh.gov.cn  服务器：31.16.10.31、38两台服务器

npm run buildprod   
npm run buildOuternet
 

## 运行单元测试

运行 `ng test` 来通过 [Karma](https://karma-runner.github.io) 进行单元测试。

## 运行端到端测试

运行 `ng e2e` 来通过 [Protractor](http://www.protractortest.org/) 进行端到端的油荒。
在运行端到端测试之前，请确保已经通过 `ng serve` 运行了本应用。

## 帮助

为了获得更多帮助，可以通过运行 `ng help` 来进行查找。


