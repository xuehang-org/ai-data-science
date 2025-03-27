---
title: Matplotlib Pyplot
---

# 2. Matplotlib Pyplot

Matplotlib 是 Python 中最流行的绘图库之一。它提供了一种类似于 MATLAB 的绘图方式，使你能够轻松地创建各种静态、动态和交互式图表。`pyplot` 是 Matplotlib 的一个模块，它提供了一组函数，使 Matplotlib 的使用方式更接近 MATLAB。

## 2.1 Pyplot 简介

`pyplot` 模块是 Matplotlib 的核心。它提供了一种简单的状态机接口，用于构建和定制图表。你可以使用 `pyplot` 创建折线图、散点图、柱状图、饼图等各种类型的图表。

**导入 `pyplot` 模块**

```python
import matplotlib.pyplot as plt
```

通常，我们将 `matplotlib.pyplot` 导入为 `plt`，这是一个约定俗成的做法，可以简化代码。

## 2.2 第一个 Pyplot 图表

让我们从一个简单的例子开始，创建一个简单的折线图。

```python
import matplotlib.pyplot as plt

# 数据
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# 创建图表
plt.plot(x, y)

# 添加标题和标签
plt.title("Simple Line Plot")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

# 显示图表
plt.show()
```

这段代码会生成一个简单的折线图，其中 x 轴是 `[1, 2, 3, 4, 5]`，y 轴是 `[2, 4, 6, 8, 10]`。

![](/4.png)
*Fig.4*

## 2.3 图表的组成部分

一个典型的 Matplotlib 图表包含以下几个主要组成部分：

*   **Figure (图):** 整个图表，可以包含多个子图 (Axes)。
*   **Axes (轴域):** 实际绘制图表的区域。一个 Figure 可以包含多个 Axes。
*   **Axis (轴):**  X 轴和 Y 轴，定义了数据的范围。
*   **Title (标题):**  图表的标题。
*   **Labels (标签):**  轴的标签。
*   **Legend (图例):**  解释图中元素的含义。

## 2.4 常用 Pyplot 函数

以下是一些常用的 `pyplot` 函数：

*   `plt.plot()`:  绘制折线图或散点图。
*   `plt.scatter()`: 绘制散点图。
*   `plt.bar()`: 绘制柱状图。
*   `plt.hist()`: 绘制直方图。
*   `plt.pie()`: 绘制饼图。
*   `plt.title()`:  设置图表标题。
*   `plt.xlabel()`: 设置 X 轴标签。
*   `plt.ylabel()`: 设置 Y 轴标签。
*   `plt.legend()`:  显示图例。
*   `plt.show()`:  显示图表。
*   `plt.savefig()`: 将图表保存到文件。
*   `plt.figure()`: 创建一个新的 Figure。
*   `plt.subplot()`: 在 Figure 中创建子图。

## 2.5 绘制不同类型的图表

### 2.5.1 折线图

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 1, 3, 5]

plt.plot(x, y, marker='o', linestyle='-', color='blue', label='Line 1')  # 添加 marker 和 label
plt.title("Line Plot with Markers")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.legend()  # 显示图例
plt.show()
```

![](/5.png)
*Fig.5*

### 2.5.2 散点图

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 1, 3, 5]

plt.scatter(x, y, color='red', marker='x', label='Data Points')  # 添加 marker 和 label
plt.title("Scatter Plot")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.legend()  # 显示图例
plt.show()
```

![](/6.png)
*Fig.6*


### 2.5.3 柱状图

```python
import matplotlib.pyplot as plt

categories = ['A', 'B', 'C', 'D']
values = [25, 10, 15, 20]

plt.bar(categories, values, color='green', label='Values')  # 添加 label
plt.title("Bar Chart")
plt.xlabel("Categories")
plt.ylabel("Values")
plt.legend()  # 显示图例
plt.show()
```

![](/7.png)
*Fig.7*

### 2.5.4 直方图

```python
import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(1000)  # 生成 1000 个随机数

plt.hist(data, bins=30, color='purple', alpha=0.7, label='Frequency')  # 设置 bins 和透明度
plt.title("Histogram")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.legend()  # 显示图例
plt.show()
```

![](/8.png)
*Fig.8*


### 2.5.5 饼图

```python
import matplotlib.pyplot as plt

labels = ['A', 'B', 'C', 'D']
sizes = [25, 30, 20, 25]
colors = ['yellow', 'orange', 'lightcoral', 'lightskyblue']
explode = (0, 0.1, 0, 0)  # 将 B 部分突出显示

plt.pie(sizes, explode=explode, labels=labels, colors=colors, autopct='%1.1f%%', shadow=True, startangle=90)
plt.title("Pie Chart")
plt.axis('equal')  # 使饼图为正圆形
plt.legend()  # 显示图例
plt.show()
```

![](/9.png)
*Fig.9*


## 2.6 自定义图表

Matplotlib 提供了丰富的选项来定制图表的外观。你可以修改颜色、线型、标记、字体、轴的范围等。

### 2.6.1 颜色、线型和标记

在 `plt.plot()` 函数中，可以使用 `color`、`linestyle` 和 `marker` 参数来修改线条的颜色、线型和标记。

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 1, 3, 5]

plt.plot(x, y, color='green', linestyle='--', marker='o')  # 绿色虚线，圆形标记
plt.title("Customized Line Plot")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.show()
```

![](/10.png)
*Fig.10*

### 2.6.2 轴的范围

可以使用 `plt.xlim()` 和 `plt.ylim()` 函数来设置 X 轴和 Y 轴的范围。

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 1, 3, 5]

plt.plot(x, y)
plt.xlim(0, 6)  # 设置 X 轴范围
plt.ylim(0, 7)  # 设置 Y 轴范围
plt.title("Line Plot with Custom Axis Limits")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.show()
```

![](/11.png)
*Fig.11*

### 2.6.3 添加文本注释

可以使用 `plt.text()` 函数在图表中添加文本注释。

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 1, 3, 5]

plt.plot(x, y)
plt.text(2, 4, "Important Point", fontsize=12, color='red')  # 添加文本注释
plt.title("Line Plot with Text Annotation")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.show()
```

![](/12.png)
*Fig.12*

## 2.7 子图

一个 Figure 可以包含多个 Axes，可以使用 `plt.subplot()` 函数来创建子图。

```python
import matplotlib.pyplot as plt

# 创建一个 2x2 的子图布局
plt.subplot(2, 2, 1)  # 第一个子图
plt.plot([1, 2, 3], [4, 5, 6])
plt.title("Subplot 1")

plt.subplot(2, 2, 2)  # 第二个子图
plt.scatter([1, 2, 3], [4, 5, 6])
plt.title("Subplot 2")

plt.subplot(2, 2, 3)  # 第三个子图
plt.bar([1, 2, 3], [4, 5, 6])
plt.title("Subplot 3")

plt.subplot(2, 2, 4)  # 第四个子图
plt.pie([1, 2, 3])
plt.title("Subplot 4")

plt.tight_layout()  # 自动调整子图的布局，避免重叠
plt.show()
```

![](/13.png)
*Fig.13*

## 2.8 保存图表

可以使用 `plt.savefig()` 函数将图表保存到文件。

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 1, 3, 5]

plt.plot(x, y)
plt.title("Line Plot")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

plt.savefig("line_plot.png")  # 将图表保存为 PNG 文件
```
![](/14.png)
*Fig.14*

这段代码会将图表保存为名为 `line_plot.png` 的 PNG 文件。Matplotlib 支持多种文件格式，包括 PNG, JPG, PDF, SVG 等。


## 2.9 总结

`pyplot` 模块是 Matplotlib 的核心，提供了一种简单而强大的方式来创建各种类型的图表。通过学习 `pyplot`，你可以轻松地可视化数据，并创建出美观而有用的图表。希望这篇教程能够帮助你入门 Matplotlib Pyplot。
