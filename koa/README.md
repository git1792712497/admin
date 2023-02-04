### 2.2. 安装Node.js

我们安装软件使用工具：dnf

* **DNF**，全称**Dandified（时髦的、华丽的） Yum**；
* 是Yum的下一个版本，也被称之为Yum的替代品；
* 如果是centos7的版本，我记得是没有自带dnf的，需要通过yum进行安装（这个自行安装一下）；

检查dnf是否可用： 

```shell
dnf --help
```

如果我们希望安装一个软件包，可以进行如下的操作：

```shell
# 搜索软件包
dnf search nodejs

# 查看软件包信息: nodejs的版本是10.21.0
dnf info nodejs

# 安装nodejs
dnf install nodejs
```

如果发现不是你希望使用的版本：

* 使用更高的版本，比如最新的LTS或者Current版本；
* 这个时候我们可以使用之前讲过的一个工具：n；

```shell
# 安装n
npm install n -g

# 通过n安装最新的lts和current
n install lts
n install latest

# 通过n切换版本
n
```

如果发现切换之后终端没有反应，可以进行重启：

* 方式一：重新通过ssh建立连接；
* 方式二：重启ssh `service sshd restart`



### 2.3. 安装MySQL

#### 2.3.1. 安装MySQL

我们依然使用dnf来安装MySQL：

```shell
# 查找MySQL
dnf search mysql-server

# 查看MySQL，这里的版本是8.0.30
dnf info mysql-server

# 安装MySQL，这里加-y的意思是依赖的内容也安装
dnf install mysql-server -y
```

启动mysql-server：

```shell
# 开启MySQL后台服务
systemctl start mysqld

# 查看MySQL服务：active (running)表示启动成功
systemctl status mysqld

# 随着系统一起启动
systemctl enable mysqld
```





#### 2.3.2. 配置MySQL

我们之前在Mac或者Windows上安装MySQL时会有一些配置：

* 比如账号密码；
* 在centos中通过dnf安装之后，我们如何配置账号密码呢？

配置MySQL账号和密码：

```shell
mysql_secure_installation

# 接下来有一些选项，比如密码强度等等一些
# MySQL8开始通常设置密码强度较强，选择2
# 其他的选项可以自行选择
```

现在，我们就可以直接在服务器中操作MySQL了：

![直接连接MySQL](https://tva1.sinaimg.cn/large/0081Kckwgy1glbw3js9ytj30ga05zt97.jpg)

但是如果我们希望在自己的电脑上直接连接MySQL呢？

* 也就是和MySQL建立远程连接；
* 比如直接Navicat工具中连接MySQL；

这个时候必须要配置root可以远程连接：

```mysql
# 使用mysql数据库
use mysql;
# 查看user表中，连接权限，默认看到root是localhost
select host, user from user;
# 修改权限
update user set host = '%' where user = 'root';

# 配置生效
FLUSH PRIVILEGES;
```

但是呢，阿里云默认有在安全组中禁止掉3306端的连接的：

* 所以我们需要配置3306的安全组

![image-20201203114622702](https://tva1.sinaimg.cn/large/0081Kckwgy1glaitii7i8j316i0cm76i.jpg)



#### 2.3.3. 数据库迁移

我们需要将之前项目中（本地）MySQL的数据库迁移到服务器中的MySQL数据库中。

**第一步：在服务器MySQL中创建coderhub的数据库：**

* 可以通过命令，也可以通过Navicat直接创建



**第二步：在Navicat工具中本地MySQL直接导出数据库**

![Navicat导出](https://tva1.sinaimg.cn/large/0081Kckwgy1glbwjehnpyj30ci08w43h.jpg)



**第三步：在Navicat工具中服务器MySQL中执行MySQL**

![导入数据库](https://tva1.sinaimg.cn/large/0081Kckwgy1glbwky2r6mj30s50ek447.jpg)





## 三. 部署Node项目

### 3.1. 代码托管到Git仓库（选做）

在GitHub中创建仓库，并且将当前代码放到GitHub中

添加.gitignore文件时，忽略一些文件：

* 忽略uploads
* 忽略.env

这里不再给出详细的步骤，就是把代码托管到GitHub上。



### 3.2. 代码clone到服务器（选做）

服务器我们使用Git来clone代码：

* centos8服务器中默认是没有安装Git的；
* 我们可以通过dnf来安装；

```shell
dnf search git;
dnf info git;
# 当然你也可以直接安装（上面两个只是让大家看一下Git的详情）
dnf install git;
```



我们可以在根目录下创建一个自己的文件夹，比如why

```shell
cd /
mkdir why
cd why/
```



clone项目到why中：

```shell
git clone https://github.com/coderwhy/coderhub.git
```



### 3.3. VSCode中打开代码

如果我们希望在本地的VSCode中可以直接编辑远程的代码，可以使用一个VSCode的插件：remote-ssh

![remote-ssh](https://tva1.sinaimg.cn/large/0081Kckwgy1glbx5kyvgrj30e702tmxg.jpg)

连接远程服务器：

![remote-ssh](https://tva1.sinaimg.cn/large/0081Kckwgy1glbx8sutuoj30zl0bsgop.jpg)

查看远程的项目代码：

![远程的项目代码](https://tva1.sinaimg.cn/large/0081Kckwgy1glbxa0c7v0j31fi0td78v.jpg)

安装项目的依赖：

```shell
npm install
```

配置.env文件

```env
APP_HOST=http://8.134.60.235
APP_PORT=8001

MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=coderhub
MYSQL_USER=root
MYSQL_PASSWORD=Coderwhy888.
```



注意：加入8001端口到安全组中

![image-20201204170158787](https://tva1.sinaimg.cn/large/0081Kckwgy1glbxk7atduj315s0djtb8.jpg)



测试请求的结果：

![测试请求](https://tva1.sinaimg.cn/large/0081Kckwgy1glbxjmho9hj310p0nojw5.jpg)







