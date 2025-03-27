---
title: Matplotlib 轴标签和标题
---


# 5. Matplotlib 轴标签和标题

在使用 Matplotlib 绘制图表时，清晰的轴标签和标题至关重要。它们能够帮助读者快速理解图表所表达的内容。

## 5.1 设置标题

### 5.1.1 `title()` 函数

`title()` 函数用于为图表添加主标题。

**示例：**

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)
plt.title("Sine Wave Plot")  # 添加标题
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.show()
```

![](/26.png)
*Fig.26*


### 5.1.2 调整标题位置和字体

`title()` 函数还可以接受一些参数来调整标题的位置和字体样式。

*   `loc`:  标题的位置，可以设置为 `'left'`, `'right'` 或 `'center'` (默认)。
*   `fontsize`:  字体大小。
*   `fontweight`:  字体粗细，例如 `'bold'`。
*   `color`:  字体颜色。

**示例：**

```python
plt.plot(x, y)
plt.title("Sine Wave Plot", loc='left', fontsize=16, fontweight='bold', color='navy')
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.show()
```

![](/27.png)
*Fig.27*

## 5.2 设置轴标签 (Axis Labels)

### 5.2.1 `xlabel()` 和 `ylabel()` 函数

`xlabel()` 用于设置 X 轴的标签，`ylabel()` 用于设置 Y 轴的标签。

**示例：**

```python
plt.plot(x, y)
plt.title("Sine Wave Plot")
plt.xlabel("X-axis")  # X 轴标签
plt.ylabel("Y-axis")  # Y 轴标签
plt.show()
```

![](/28.png)
*Fig.28*


### 5.2.2 调整轴标签字体

类似于标题，我们也可以调整轴标签的字体样式。

*   `fontsize`: 字体大小。
*   `fontweight`: 字体粗细。
*   `color`: 字体颜色。

**示例：**

```python
plt.plot(x, y)
plt.title("Sine Wave Plot")
plt.xlabel("X-axis", fontsize=12, color='green')
plt.ylabel("Y-axis", fontsize=12, color='red')
plt.show()
```

![](/29.png)
*Fig.29*

## 5.3 多个子图的标题和轴标签

当使用 `subplots()` 创建多个子图时，可以分别设置每个子图的标题和轴标签。

**示例：**

```python
fig, axs = plt.subplots(2, 1, figsize=(8, 6))  # 创建 2x1 的子图

# 第一个子图
axs[0].plot(x, np.sin(x))
axs[0].set_title("Sine Wave")
axs[0].set_xlabel("X")
axs[0].set_ylabel("sin(x)")

# 第二个子图
axs[1].plot(x, np.cos(x))
axs[1].set_title("Cosine Wave")
axs[1].set_xlabel("X")
axs[1].set_ylabel("cos(x)")

plt.tight_layout()  # 调整子图布局，避免重叠
plt.show()
```

![](/30.png)
*Fig.30*


## 5.4  使用 `suptitle()` 添加总标题

如果需要为整个图表添加一个总标题，可以使用 `suptitle()` 函数。

**示例：**

```python
fig, axs = plt.subplots(2, 1, figsize=(8, 6))

axs[0].plot(x, np.sin(x))
axs[0].set_title("Sine Wave")
axs[0].set_xlabel("X")
axs[0].set_ylabel("sin(x)")

axs[1].plot(x, np.cos(x))
axs[1].set_title("Cosine Wave")
axs[1].set_xlabel("X")
axs[1].set_ylabel("cos(x)")

plt.suptitle("Sine and Cosine Waves", fontsize=16)  # 添加总标题
plt.tight_layout()
plt.subplots_adjust(top=0.88) # 调整子图，防止suptitle和子图标题重叠
plt.show()
```

![](/31.png)
*Fig.31*

**注意：**  在使用 `suptitle()` 时，可能需要使用 `plt.tight_layout()` 和 `plt.subplots_adjust()` 调整子图的布局，以避免标题重叠。

## 5.5 总结

通过本节的学习，你应该掌握了如何使用 `title()`、`xlabel()` 和 `ylabel()` 函数来为 Matplotlib 图表添加标题和轴标签，并且能够调整它们的样式。清晰的标题和轴标签能够显著提高图表的可读性，使你的数据可视化更具表现力。
