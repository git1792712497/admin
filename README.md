## Content-Type的使用

request 的Content-Type
一般我们在开发的过程中需要注意客户端发送请求（Request）时的Content-Type设置，特别是使用ajax的时候，如果设置得不准确，很有可能导致请求失败。比如在spring中，如果接口使用了@RequestBody，spring强大的自动解析功能，会将请求实体的内容自动转换为Bean，但前提是请求的Content-Type必须设置为application/json，否正就会返回415错误。

415 错误是 Unsupported media type，即不支持的媒体类型。
如果是一个restful接口（json格式），一般将Content-Type设置为application/json; charset=UTF-8；
如果是文件上传，一般Content-Type设置为multipart/form-data
如果普通表单提交，一般Content-Type设置为application/x-www-form-urlencoded

## MVVM 

MVVM没有出现之前,我们认为数据就是视图上显示的内容,

获取数据得先获取视图 => DOM操作

MVVM出现我们不在关注视图,让我们关注数据,数据和视图分离,数据是一切核心,数据变化视图一定变化 => 数据驱动视图

Model 就是数据的核心

View 就是视图ui界面,html内容,一切数据都要在上面显示

ViewModel => 构建双向数据流的桥梁 ,视图表单内容改变修改数据,数据回流修改视图

##### MVVM实现原理

vue2 => Object.defineProperty里面的get和set方法 ,数据代理 + 数据劫持 + 发布订阅模式通知绑定依赖关系的数据

## vue2和vue3区别

vue2是面向对象,this-实例对象

vue3不在用this ,通过函数来声明,

代理方式变化vue2 => Object.defineProperty 和 vue3 => Proxy

## 学习express和koa区别

express设计初衷是完整强大的,koa是简洁和自由的,类似vue2 到vue3 移除eventBus ,执行异步的过程

洋葱模型 ,koa中间件从最外层如果调用next 会一层一层往下执行,执行到最内层又把数据往外传递返回
