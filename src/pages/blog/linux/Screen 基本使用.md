# Screen 基本使用 in Ubuntu

官网：https://www.gnu.org/software/screen/

## · 安装

```shell
sudo apt install screen
```

## · 在屏幕上保存会话

利用 SSH 远程连接服务器，运行程序需要保证在此期间窗口不能关闭并且连接不能断开，否则当前窗口所运行的任务就被杀死。这时候就可以使用 screen 命令来保持一个会话，即使断开连接也可以重新连接到这个会话。

### Getting in

|   命令 / 快捷键    |      描述      |
| :----------------: | :------------: |
| `screen -S <name>` |    创建会话    |
|    `screen -ls`    |  列出所有会话  |
|    `screen -x`     |   连接到会话   |
| `screen -r <name>` | 连接到指定会话 |

### Getting out

| 命令 / 快捷键 |          描述          |
| :-----------: | :--------------------: |
|  `Ctrl-a d`   |          分离          |
| `Ctrl-a D D`  | 分离并退出（快速退出） |
|    `exit`     |    退出 screen 会话    |

### 删除会话

```shell
kill id
```

### 清除无效会话

```shell
screen -wipe
```

## 更多操作

https://aperiodic.net/screen/quick_reference
