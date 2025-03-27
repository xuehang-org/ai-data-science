---
title: Matplotlib 网格线
---

# 6. Matplotlib 网格线

在数据可视化中，网格线可以帮助我们更清晰地观察图表中的数据点与坐标轴之间的关系。Matplotlib 提供了简单的方法来添加和自定义网格线。

## 6.1 添加网格线

使用 `grid()` 函数可以快速地在图表中添加网格线。

```python
import matplotlib.pyplot as plt
import numpy as np

# 创建一些示例数据
x = np.linspace(0, 10, 100)
y = np.sin(x)

# 创建图表和坐标轴对象
fig, ax = plt.subplots()

# 绘制数据
ax.plot(x, y)

# 添加网格线
ax.grid(True)

# 设置标题和标签
ax.set_title("Grid Example")
ax.set_xlabel("X-axis")
ax.set_ylabel("Y-axis")

# 显示图表
plt.show()
```

这段代码会在图表中添加默认样式的网格线。

![](/32.png)
*Fig.32*

## 6.2 自定义网格线

`grid()` 函数接受多个参数，可以用来自定义网格线的样式，例如颜色、线型和线宽。

```python
import matplotlib.pyplot as plt
import numpy as np

# 创建一些示例数据
x = np.linspace(0, 10, 100)
y = np.sin(x)

# 创建图表和坐标轴对象
fig, ax = plt.subplots()

# 绘制数据
ax.plot(x, y)

# 添加自定义样式的网格线
ax.grid(True, color='r', linestyle='--', linewidth=0.5)

# 设置标题和标签
ax.set_title("Custom Grid Example")
ax.set_xlabel("X-axis")
ax.set_ylabel("Y-axis")

# 显示图表
plt.show()
```

在这个例子中，我们将网格线设置为红色、虚线，线宽为 0.5。

![](/33.png)
*Fig.33*

## 6.3 控制网格线显示在哪个轴上

通过 `axis` 参数，我们可以控制网格线只显示在 x 轴或 y 轴上。

```python
import matplotlib.pyplot as plt
import numpy as np

# 创建一些示例数据
x = np.linspace(0, 10, 100)
y = np.sin(x)

# 创建图表和坐标轴对象
fig, ax = plt.subplots()

# 绘制数据
ax.plot(x, y)

# 只在 y 轴上显示网格线
ax.grid(True, axis='y')

# 设置标题和标签
ax.set_title("Grid on Y-axis Example")
ax.set_xlabel("X-axis")
ax.set_ylabel("Y-axis")

# 显示图表
plt.show()
```

这段代码只会在 y 轴上显示网格线。

![](/34.png)
*Fig.34*

## 6.4 同时控制主次网格线

Matplotlib 还可以显示次要网格线，这在需要更精细的参考时很有用。首先，需要启用次要刻度，然后才能显示次要网格线。

```python
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.ticker import MultipleLocator

# 创建一些示例数据
x = np.linspace(0, 10, 100)
y = np.sin(x)

# 创建图表和坐标轴对象
fig, ax = plt.subplots()

# 绘制数据
ax.plot(x, y)

# 设置主刻度和次刻度
ax.xaxis.set_major_locator(MultipleLocator(2))
ax.xaxis.set_minor_locator(MultipleLocator(0.5))
ax.yaxis.set_major_locator(MultipleLocator(0.5))
ax.yaxis.set_minor_locator(MultipleLocator(0.1))

# 显示主次网格线
ax.grid(True, which='major', color='k', linestyle='-', linewidth=1)
ax.grid(True, which='minor', color='gray', linestyle='--', linewidth=0.5)

# 设置标题和标签
ax.set_title("Major and Minor Grid Example")
ax.set_xlabel("X-axis")
ax.set_ylabel("Y-axis")

# 显示图表
plt.show()
```

在这个例子中，我们使用 `MultipleLocator` 设置了主刻度和次刻度，并分别设置了主网格线和次网格线的样式。

![](/35.png)
*Fig.35*

## 6.5 总结

通过 Matplotlib 的 `grid()` 函数，我们可以轻松地在图表中添加和自定义网格线，从而提高图表的可读性和信息表达能力。你可以根据需要调整网格线的颜色、线型、线宽以及显示在哪个轴上，甚至可以同时控制主次网格线。