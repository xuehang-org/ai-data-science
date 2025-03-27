---
title: Matplotlib 绘图线
---


# 4. Matplotlib 绘图线

Matplotlib 是一个强大的 Python 可视化库，它能让你创建各种各样的图表。其中，绘制线条是最基本也是最重要的功能之一。本节我们将深入探讨 Matplotlib 中绘制线条的各种方法和技巧。

## 4.1 基本线条绘制

### 4.1.1 `plot()` 函数

`plot()` 函数是 Matplotlib 中最核心的绘图函数。它可以接受各种参数，用于控制线条的样式、颜色、粗细等等。

**示例：**

```python
import matplotlib.pyplot as plt
import numpy as np

# 创建一些数据
x = np.linspace(0, 10, 100)  # 从0到10均匀生成100个点
y = np.sin(x)

# 使用 plot() 函数绘制线条
plt.plot(x, y)

# 添加标题和标签
plt.title("Simple Sine Wave")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

# 显示图像
plt.show()
```

这段代码会生成一个简单的正弦波图像。

![](/20.png)
*Fig.20*

### 4.1.2  自定义线条样式

`plot()` 函数允许你通过一些参数来自定义线条的样式：

*   `color`:  线条颜色
*   `linestyle`:  线条样式（实线、虚线、点划线等）
*   `linewidth`:  线条粗细
*   `marker`:  数据点的标记样式（圆圈、方块、星号等）
*   `markersize`:  标记大小
*   `alpha`:  透明度

**示例：**

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

# 绘制红色虚线，线宽为2，用圆圈标记数据点
plt.plot(x, y, color='red', linestyle='--', linewidth=2, marker='o', markersize=5)

plt.title("Customized Sine Wave")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

plt.show()
```

这段代码会生成一个红色的虚线正弦波，数据点用圆圈标记。

![](/21.png)
*Fig.21*

### 4.1.3  使用简写字符串

`plot()` 函数还支持使用简写字符串来一次性设置颜色、线条样式和标记。

**示例：**

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

# 使用简写字符串 "r--o"：红色虚线，圆圈标记
plt.plot(x, y, "r--o")

plt.title("Sine Wave with Shorthand Notation")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

plt.show()
```

这里的 `"r--o"`  相当于 `color='red', linestyle='--', marker='o'`。

![](/22.png)
*Fig.22*

## 4.2 多条线条

### 4.2.1  在同一个 `plot()` 函数中绘制多条线

`plot()` 函数可以接受多组 x 和 y 数据，从而在同一张图上绘制多条线条。

**示例：**

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# 在同一个 plot() 函数中绘制正弦波和余弦波
plt.plot(x, y1, label="sin(x)")
plt.plot(x, y2, label="cos(x)")

# 添加图例
plt.legend()

plt.title("Sine and Cosine Waves")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

plt.show()
```

这段代码会在同一张图上绘制正弦波和余弦波，并添加图例来区分它们。

![](/23.png)
*Fig.23*

### 4.2.2  多次调用 `plot()` 函数

你也可以多次调用 `plot()` 函数来绘制多条线条。

**示例：**

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# 分别调用 plot() 函数绘制正弦波和余弦波
plt.plot(x, y1, label="sin(x)")
plt.plot(x, y2, label="cos(x)")

plt.legend()
plt.title("Sine and Cosine Waves")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

plt.show()
```

效果和上面的例子是一样的。

## 4.3 其他线条相关函数

### 4.3.1 `axhline()` 和 `axvline()`

这两个函数用于绘制水平线和垂直线。

**示例：**

```python
import matplotlib.pyplot as plt

# 绘制一条水平线 y=0.5
plt.axhline(y=0.5, color='gray', linestyle='--')

# 绘制一条垂直线 x=2
plt.axvline(x=2, color='gray', linestyle='--')

plt.title("Horizontal and Vertical Lines")
plt.xlim(0, 5)  # 设置 x 轴范围
plt.ylim(0, 1)  # 设置 y 轴范围
plt.show()
```

![](/24.png)
*Fig.24*

### 4.3.2  `hlines()` 和 `vlines()`

这两个函数可以绘制多条水平线和垂直线。

**示例：**

```python
import matplotlib.pyplot as plt
import numpy as np

x = [1, 2, 3]
y = [0.2, 0.5, 0.8]

# 绘制垂直线
plt.vlines(x, ymin=0, ymax=y, color='blue')

# 绘制水平线
plt.hlines(y, xmin=0, xmax=x, color='red')

plt.title("Multiple Horizontal and Vertical Lines")
plt.xlim(0, 4)
plt.ylim(0, 1)
plt.show()
```

![](/25.png)
*Fig.25*

## 4.4 总结

本节我们学习了 Matplotlib 中绘制线条的各种方法，包括：

*   使用 `plot()` 函数绘制基本线条，并自定义线条样式
*   在同一张图上绘制多条线条
*   使用 `axhline()`、`axvline()`、`hlines()` 和 `vlines()` 函数绘制水平线和垂直线

掌握这些技巧，你就可以在 Matplotlib 中创建各种各样的线条图了。继续练习，你会发现更多有趣的用法！
