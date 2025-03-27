---
title: Matplotlib 简介
---

# 1. Matplotlib 简介

Matplotlib 是 Python 中最流行的绘图库之一。它可以让你创建各种静态、动态、交互式的可视化图表。无论你是数据分析师、科学家还是工程师，Matplotlib 都是你不可或缺的工具。

## 1.2 为什么选择 Matplotlib？

*   **简单易用:** Matplotlib 提供了简单直观的接口，让你快速上手。
*   **高度定制:** 它可以让你精细地控制图表的每一个细节。
*   **多种输出格式:**  支持多种输出格式，包括 PNG, JPG, PDF, SVG 等。
*   **与 NumPy 和 Pandas 集成:**  Matplotlib 与 NumPy 和 Pandas 无缝集成，方便你直接使用数据进行绘图。
*   **广泛的应用:**  被广泛应用于学术界、工业界等各个领域。

## 1.3 Matplotlib 的基本组成部分

在使用 Matplotlib 绘图时，你需要了解以下几个基本概念：

*   **Figure (画布):**  整个图表的最顶层容器。你可以把它想象成一张大的画布，可以在上面绘制多个子图。
*   **Axes (坐标系/子图):**  实际绘制图形的区域。一个 Figure 可以包含多个 Axes，每个 Axes 都有自己的坐标轴 (Axis)。
*   **Axis (坐标轴):**  定义了坐标系的刻度和范围。
*   **Artist (艺术家):**  所有你在图表上看到的东西都是 Artist 对象，例如 Line2D (线条), Text (文本), Rectangle (矩形) 等。

用一个比喻来解释：

*   **Figure:**  一幅画的画框
*   **Axes:**  画框里实际作画的区域
*   **Axis:**  Axes 里的坐标轴
*   **Artist:**  画在 Axes 上的各种元素，比如线条、文字、图形

## 1.4 Matplotlib 的两种绘图方式

Matplotlib 主要有两种绘图方式：

1.  **pyplot 模块 (显式绘图):**  通过 `matplotlib.pyplot` 模块提供的函数来创建和管理 Figure 和 Axes。这种方式更接近 MATLAB 的绘图风格，适合快速绘图和脚本编写。
2.  **面向对象方式 (隐式绘图):**  通过显式地创建 Figure 和 Axes 对象，然后调用对象的方法进行绘图。这种方式更加灵活，适合创建复杂的图表和自定义绘图。

## 1.5 快速上手：第一个 Matplotlib 图表

让我们从一个简单的例子开始，使用 `pyplot` 模块绘制一条直线：

```python
import matplotlib.pyplot as plt

# 数据
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# 绘制折线图
plt.plot(x, y)

# 添加标题和标签
plt.title("Simple Line Plot")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

# 显示图表
plt.show()
```

这段代码会生成一个简单的折线图，横坐标是 `x`，纵坐标是 `y`。

![](/1.png)
*Fig.1*

**代码解释：**

1.  `import matplotlib.pyplot as plt`: 导入 `pyplot` 模块，并将其重命名为 `plt`，方便后续使用。
2.  `x = [1, 2, 3, 4, 5]` 和 `y = [2, 4, 6, 8, 10]`: 定义了 x 和 y 坐标的数据。
3.  `plt.plot(x, y)`:  使用 `plot` 函数绘制折线图。
4.  `plt.title("Simple Line Plot")`:  设置图表的标题。
5.  `plt.xlabel("X-axis")`:  设置 x 轴的标签。
6.  `plt.ylabel("Y-axis")`:  设置 y 轴的标签。
7.  `plt.show()`:  显示图表。

## 1.6 更多示例

### 1.6.1 绘制散点图

```python
import matplotlib.pyplot as plt

# 数据
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# 绘制散点图
plt.scatter(x, y)

# 添加标题和标签
plt.title("Simple Scatter Plot")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

# 显示图表
plt.show()
```

![](/2.png)
*Fig.2*

### 1.6.2 绘制柱状图

```python
import matplotlib.pyplot as plt

# 数据
categories = ['A', 'B', 'C', 'D', 'E']
values = [10, 7, 9, 5, 12]

# 绘制柱状图
plt.bar(categories, values)

# 添加标题和标签
plt.title("Simple Bar Chart")
plt.xlabel("Categories")
plt.ylabel("Values")

# 显示图表
plt.show()
```

![](/3.png)
*Fig.3*

## 1.7 总结

这只是 Matplotlib 的一个简单介绍。Matplotlib 提供了丰富的功能，可以让你创建各种各样的图表。在后续的学习中，我们将深入探讨 Matplotlib 的更多高级用法，例如自定义图表样式、绘制 3D 图形、创建动画等。希望你能通过本教程，掌握 Matplotlib 的基本用法，并将其应用到你的数据分析和可视化工作中。

