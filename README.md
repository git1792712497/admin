# **服务器部署**
## docker
yum install -y docker
安装完成后，可以检测一下 Docker 是否安装成功，可以使用下面命令
yum list installed | grep docker
自动启动 Docker 的话
systemctl enable docker
配置镜像源创建或修改
/etc/docker/daemon.json 文件
其内容修改为，这里配置的网易的镜像加速站
{
"registry-mirrors": ["http://hub-mirror.c.163.com"]
}
配置完镜像源后
systemctl daemon-reload
重启 Docker方能生效
systemctl restart docker.service
## docker 安装mysql
sudo docker pull mysql
镜像拉取完成后，用该镜像创建mysql实例
sudo docker run -d -p 3306:3306 -v /usr/local/mysql/conf:/etc/mysql/conf.d -v /usr/local/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name  mysql mysql
创建成功后使用下面命令查看下创建好的mysql实例
docker ps -a
开放远程服务器端口链接数据库
## nginx
#安装
yum install nginx
修改配置文件
etc/nginx/nginx.conf
具备权限
user root;
注释(server下的)
root /usr/share/nginx/html;
配置访问路径
location / {
root /root/dist/;
index index.html;
}
多个
location /music {
alias /music/;
index index.html;
}
#启动
systemctl start nginx
#开机重启
systemctl enable nginx
#重启(改了nginx配置)
systemctl restart nginx

### 3.4. pm2启动node程序
* PM2是一个Node的进程管理器；
* 我们可以使用它来管理Node的后台进程；
* 这样在关闭终端时，Node进程会继续执行，那么服务器就可以继续为前端提供服务了；
安装pm2：
```shell
npm install pm2 -g
```
pm2常用的命令：
```shell
# 命名进程
pm2 start ./src/main.js --name koa
# 显示所有进程状态
pm2 list               
# 停止指定的进程
pm2 stop 0       
# 停止所有进程
pm2 stop all           
# 重启所有进程
pm2 restart all      
# 重启指定的进程
pm2 restart 0          
# 杀死指定的进程
pm2 delete 0           
# 杀死全部进程
pm2 delete all   
#后台运行pm2，启动4个app.js，实现负载均衡
pm2 start app.js -i 4 
```

















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

## cookie

浏览器发送网络请求时自动携带上cookie

为了辨别用户身份存在客户端

内存cookie(没有设置过期时间) 和硬盘cookie(有设置过期时间 )
