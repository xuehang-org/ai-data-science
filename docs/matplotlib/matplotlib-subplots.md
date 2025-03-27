---
title: Matplotlib 绘制多图
---


# 7. Matplotlib 绘制多图

在数据可视化中，经常需要将多个图表放在同一个窗口中进行比较或展示。Matplotlib 提供了多种方式来实现多图绘制，包括 `subplot()`、`subplots()` 和 `GridSpec()`。

## 7.1 `subplot()` 函数

`subplot()` 函数可以在一个 figure 对象中创建多个子图。它的基本语法是：

```python
subplot(nrows, ncols, index)
```

- `nrows`: 子图的行数。
- `ncols`: 子图的列数。
- `index`: 子图的索引，从 1 开始，按行优先顺序排列。

**示例 1：创建 2x2 的子图**

```python
import matplotlib.pyplot as plt
import numpy as np

# 创建数据
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)
y3 = x
y4 = x**2

# 创建 Figure 对象
plt.figure(figsize=(10, 8))  # 设置图像大小

# 创建子图
plt.subplot(2, 2, 1)  # 第一行第一列
plt.plot(x, y1)
plt.title('Sin(x)')

plt.subplot(2, 2, 2)  # 第一行第二列
plt.plot(x, y2)
plt.title('Cos(x)')

plt.subplot(2, 2, 3)  # 第二行第一列
plt.plot(x, y3)
plt.title('X')

plt.subplot(2, 2, 4)  # 第二行第二列
plt.plot(x, y4)
plt.title('X^2')

# 调整子图之间的间距，避免重叠
plt.tight_layout()

# 显示图像
plt.show()
```

在这个例子中，我们创建了一个 2 行 2 列的子图布局，并在每个子图中绘制了不同的函数图像。`plt.tight_layout()` 函数可以自动调整子图的间距，避免标题或标签重叠。


![](/36.png)
*Fig.36*

## 7.2 `subplots()` 函数

`subplots()` 函数是创建子图的更简洁的方式。它返回一个包含 figure 对象和 axes 对象的元组。基本语法是：

```python
fig, axes = subplots(nrows, ncols, ...)
```

- `nrows`: 子图的行数。
- `ncols`: 子图的列数。
- `fig`: 返回的 Figure 对象。
- `axes`: 返回的 Axes 对象，是一个 NumPy 数组，可以通过索引访问每个子图。

**示例 2：使用 `subplots()` 创建 2x2 的子图**

```python
import matplotlib.pyplot as plt
import numpy as np

# 创建数据
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)
y3 = x
y4 = x**2

# 创建 Figure 对象和 Axes 对象
fig, axes = plt.subplots(2, 2, figsize=(10, 8))

# 在子图中绘制图像
axes[0, 0].plot(x, y1)
axes[0, 0].set_title('Sin(x)')

axes[0, 1].plot(x, y2)
axes[0, 1].set_title('Cos(x)')

axes[1, 0].plot(x, y3)
axes[1, 0].set_title('X')

axes[1, 1].plot(x, y4)
axes[1, 1].set_title('X^2')

# 调整子图之间的间距
plt.tight_layout()

# 显示图像
plt.show()
```

在这个例子中，`axes` 是一个 2x2 的 NumPy 数组。我们可以通过 `axes[row, col]` 的方式访问每个子图，并在其上进行绘图和设置标题等操作。

![](/37.png)
*Fig.37*

## 7.3 `GridSpec()` 函数

`GridSpec()` 函数提供了更灵活的子图布局方式。它可以创建不规则的子图排列，例如，某个子图占据多行或多列。

**示例 3：使用 `GridSpec()` 创建不规则子图**

```python
import matplotlib.pyplot as plt
import numpy as np
import matplotlib.gridspec as gridspec

# 创建数据
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)
y3 = x
y4 = x**2

# 创建 Figure 对象
fig = plt.figure(figsize=(10, 8))

# 创建 GridSpec 对象
gs = gridspec.GridSpec(2, 2)  # 2 行 2 列的网格

# 创建子图
ax1 = plt.subplot(gs[0, :])  # 第一行，占据所有列
ax1.plot(x, y1)
ax1.set_title('Sin(x)')

ax2 = plt.subplot(gs[1, 0])  # 第二行第一列
ax2.plot(x, y2)
ax2.set_title('Cos(x)')

ax3 = plt.subplot(gs[1, 1])  # 第二行第二列
ax3.plot(x, y3)
ax3.set_title('X')

# 调整子图之间的间距
plt.tight_layout()

# 显示图像
plt.show()
```

在这个例子中，我们创建了一个 2x2 的 `GridSpec` 对象。第一个子图 `ax1` 占据了第一行的所有列，即横跨两个子图的位置。后面的子图则按照正常的 2x1 布局排列。

![](/38.png)
*Fig.38*

## 7.4 总结

- `subplot()` 函数是最基本的创建子图的方式，但使用起来相对繁琐。
- `subplots()` 函数是更简洁的方式，可以一次性创建多个子图，并通过 NumPy 数组访问。
- `GridSpec()` 函数提供了最灵活的子图布局方式，可以创建不规则的子图排列。

选择哪种方式取决于你的具体需求。如果只是简单的规则排列，`subplots()` 函数通常是最好的选择。如果需要更复杂的布局，`GridSpec()` 函数则更加适合。

希望这个教程能够帮助你掌握 Matplotlib 绘制多图的技巧！