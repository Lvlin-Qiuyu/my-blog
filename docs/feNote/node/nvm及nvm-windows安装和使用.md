# nvm 及 nvm-windows 的安装使用

node 的迭代速度很快，所以目前有很多 node 版本共存着。

![](https://mmbiz.qpic.cn/mmbiz_jpg/HBbQo3CygpeajPPrr4bKQ9fUY9WRpm7icRExPUYQqejficibRiavzcSwpW7Wrg4JiaFc46xaEPErqontTFmtLyFuGjQ/0?wx_fmt=jpeg)

有很多的包，都需要在特定版本的 node 环境下才能正常运行。LvLin 在使用 gitbook-cli 的时候，就发现它无法在 v16 版本的 node 环境中运行。

那遇到 node 环境不匹配时该怎么办？解决办法很简单，多装几个就好了（光想想就让人难受）。

为了方便处理多个 node 版本切换的问题，业界涌现了一众 node 版本管理工具：nvm、nvs、n。本文主要介绍 nvm 和 nvm-windows 的安装及使用。

## [nvm](https://github.com/nvm-sh/nvm)

node 版本管理工具，支持 mac 和 linux 系统，windows 系统使用 nvm-windows 进行替代。

> 由于 LvLin 使用的 windows 系统，所以这里仅做介绍，不做演示，具体使用可参考 nvm-windows。

### 安装

通过 shell 脚本进行安装：

```shell
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

安装好后，确认配置文件 `~/.bashrc` 是否存在以下片段，如果没有则手动加上：

```shell
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

执行 source 命令，使系统环境变量生效：

```shell
$ source ~/.bashrc
```

完成 nvm 的安装，查看版本号：

```shell
$ nvm --version
```

更多安装方法参考[官方仓库](https://github.com/nvm-sh/nvm#installing-and-updating)。

### 使用

列出当前 nvm 可以安装的 node 版本：

```shell
$ nvm ls-remote
```

安装具体的版本：

```shell
$ nvm install 14.18.0
$ nvm install 8
```

列出已安装的 node 版本：

```shell
$ nvm ls
```

切换 node 版本：

```shell
$ nvm use 8
```

当我们在 14 版本的 node 上安装了一些全局包，切换到 8 版本的 node 后，这些包需要重新安装才能使用。

这时候可以通过 `nvm reinstall-packages` 指令，一键安装全局包。

```shell
$ nvm use 14.18.0
$ nvm reinstall-packages 8
```

这样，就在 v8 版本的 node 中也装上了跟 v14 版本 node 环境同样的全局包了。



## [nvm-windows](https://github.com/coreybutler/nvm-windows)

nvm 不支持 windows 系统，所以我们使用 nvm-windows 进行替代。

### 安装

到 [nvm-windows 仓库](https://github.com/coreybutler/nvm-windows/releases) 下载安装包，解压安装即可。

如果无法下载，可以关注 LvLin 的公众号【玩点前端】，发送【nvm】获取网盘资源进行下载。

安装完毕，以管理员身份打开 `PowerShell`，输入 `nvm version` 查看是否安装成功。

```shell
> nvm version
1.1.8
```

### 使用

`nvm list available`：列出可安装的 node 版本，可以缩写为 `nvm ls available`。

![](https://mmbiz.qpic.cn/mmbiz_jpg/HBbQo3CygpeajPPrr4bKQ9fUY9WRpm7iceYUu2RGASctcQic7bfhEzfWs3sL8zg6qdCWbgKHCiaw9vC2Wru1yZp9g/0?wx_fmt=jpeg)

`nvm install`：安装指定版本的 node。安装 `v16.12.0`和`v14.18.0`版本的 node 如下图所示：

![](https://mmbiz.qpic.cn/mmbiz_jpg/HBbQo3CygpeajPPrr4bKQ9fUY9WRpm7icfPo7mFsHBwyhBy2YdiacwvrRCoR7jvicd6doyibicl0SOcHaLppS9vCMUg/0?wx_fmt=jpeg)

`nvm list`：查看当前已安装的 node 版本，可以缩写为 `nvm ls`。

```shell
> nvm list

    16.12.0
    14.18.0
```

`nvm use <version>`：使用指定版本的 node 环境。

通过 `nvm list` 或 `nvm current` 可以查看当前使用的 node 版本。

![](https://mmbiz.qpic.cn/mmbiz_jpg/HBbQo3CygpeajPPrr4bKQ9fUY9WRpm7icDkCfeiacxboGkwwbiamelDZSzla7fzaAicNa2EPZOvb3ZxiaH4onfYIq5A/0?wx_fmt=jpeg)

`nvm uninstall <version>`：卸载指定版本的 node。

```shell
> nvm uninstall 14.18.0
Uninstalling node v14.18.0... done
```

`nvm node_mirror [url]`：切换 node 镜像源，`nvm npm_mirror [url]`：切换 npm 镜像源。

```shell
> nvm node_mirror https://npm.taobao.org/mirrors/node/
> nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

更多命令可以通过 `nvm` 进行查看。

![](https://mmbiz.qpic.cn/mmbiz_jpg/HBbQo3CygpeajPPrr4bKQ9fUY9WRpm7icZGGauqQrUQ00Y88wU2HVTQLfpTb1XQMPFqQ7Ly65Q1icYWSgaKTyOhQ/0?wx_fmt=jpeg)

### 异常

1.  出现 `exit status 1`，通常是由于权限不够，需要使用管理员身份运行 `PowerShell`。
    
    > **nvm-windows runs in an Admin shell**. You'll need to start `powershell` or Command Prompt as Administrator to use nvm-windows
    
2.  `npm` 安装包时异常，尝试切换成淘宝镜像源。

    方式1：`nvm npm_mirror https://npm.taobao.org/mirrors/npm/`

    方式2：找到安装 `nvm` 的文件夹下的 `settings.txt` 文件，新增镜像源配置：

    ```diff
    root: C:\nvm
    path: C:\nodejs
    + node_mirror: http://npm.taobao.org/mirrors/node/
    + npm_mirror: https://npm.taobao.org/mirrors/npm/
    ```

