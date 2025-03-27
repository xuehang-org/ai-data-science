---
title: NumPy 简介
---


# 2. NumPy 安装

NumPy 是 Python 中用于科学计算的核心库。在使用 NumPy 之前，需要先安装它。

## 2.1 使用 pip 安装（推荐）

`pip` 是 Python 的包管理工具，可以方便地安装、卸载和管理 Python 包。

### 步骤

1.  **确保已安装 Python**: 首先，你需要确保你的电脑上已经安装了 Python。可以在命令行中输入 `python --version` 或 `python3 --version` 来检查 Python 版本。

2.  **使用 pip 安装 NumPy**: 打开命令行终端（Windows 用户可以使用 cmd 或 PowerShell，macOS/Linux 用户可以使用 Terminal），然后输入以下命令：

    ```bash
    pip install numpy
    ```

    或者，如果你同时安装了 Python 2 和 Python 3，并且想为 Python 3 安装 NumPy，可以使用：

    ```bash
    pip3 install numpy
    ```

3.  **等待安装完成**: `pip` 会自动从 Python Package Index (PyPI) 下载 NumPy 并安装。安装完成后，会显示 "Successfully installed numpy..." 这样的信息。

### 2.1.1 示例

下面是一个安装 NumPy 的示例截图：

```
[你的用户名@你的电脑名 ~]$ pip install numpy
Collecting numpy
Downloading numpy-1.26.4-cp39-cp39-macosx_11_0_arm64.whl (14.0 MB)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 14.0/14.0 MB 4.9 MB/s eta 0:00:00
Installing collected packages: numpy
Successfully installed numpy-1.26.4
```

## 2.2 使用 Anaconda 安装

如果你使用的是 Anaconda，NumPy 通常已经预装好了。如果没有，你可以使用 conda 命令来安装。

### 2.2.1 步骤

1.  **打开 Anaconda Prompt**: 在 Windows 上，可以在开始菜单中找到 Anaconda Prompt。在 macOS/Linux 上，打开终端。

2.  **使用 conda 安装 NumPy**: 输入以下命令：

    ```bash
    conda install numpy
    ```

3.  **确认安装**: conda 会解决依赖关系并提示你确认安装。输入 `y` 并回车。

### 2.2.2 示例

下面是一个使用 conda 安装 NumPy 的示例：

```
(base) [你的用户名@你的电脑名 ~]$ conda install numpy
Collecting package metadata (repodata.json): done
Solving environment: done

## Package Plan ##

environment location: /Users/你的用户名/anaconda3

added / updated specs:
- numpy


The following packages will be downloaded:

    package                    |            build
    ---------------------------|-----------------
    numpy-1.21.5               |   py39h6c91c80_0         12.2 MB

The following packages will be UPDATED:

numpy                                         1.21.2-py39h6c91c80_0 --> 1.21.5-py39h6c91c80_0


Proceed ([y]/n)? y

Downloading and Extracting Packages
numpy-1.21.5         | 12.2 MB   | ############################################################################ | 100%
Preparing transaction: done
Verifying transaction: done
Executing transaction: done
```

## 2.3 验证安装

安装完成后，可以通过以下步骤验证 NumPy 是否成功安装：

1.  **打开 Python 解释器**: 在命令行中输入 `python` 或 `python3`。

2.  **导入 NumPy**: 输入 `import numpy as np`。如果没有报错，说明 NumPy 已经成功安装。

3.  **查看 NumPy 版本**: 可以使用 `np.__version__` 查看 NumPy 的版本。

### 2.3.1 示例

```python
>>> import numpy as np
>>> print(np.__version__)
1.26.4
```

## 2.4 解决安装问题

如果在安装过程中遇到问题，可以尝试以下方法：

*   **更新 pip**: 确保你的 pip 是最新版本，可以使用 `pip install --upgrade pip` 命令更新。
*   **使用国内镜像源**: 如果下载速度慢，可以尝试使用国内镜像源，例如：

    ```bash
    pip install -i https://pypi.tuna.tsinghua.edu.cn/simple numpy
    ```

    常用的国内镜像源还有：

    *   阿里云：`https://mirrors.aliyun.com/pypi/simple/`
    *   中国科技大学：`https://pypi.mirrors.ustc.edu.cn/simple/`
    *   豆瓣：`https://pypi.doubanio.com/simple/`

*   **检查 Python 环境变量**: 确保 Python 的安装目录和 Scripts 目录已经添加到环境变量中。

希望这篇文档能帮助你成功安装 NumPy！
