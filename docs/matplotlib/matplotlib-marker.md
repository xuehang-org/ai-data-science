---
title: Matplotlib 绘图标记
---

# 3. Matplotlib 绘图标记

在 Matplotlib 中，绘图标记（Markers）是在数据点上添加的符号，用于突出显示数据点的位置。它们可以帮助我们更清晰地识别和区分不同的数据系列，让图表更具可读性。

## 3.1 常用标记类型

Matplotlib 提供了多种内置的标记类型，下面是一些常用的标记及其对应的符号：

| 标记字符串 | 描述    |
|-------|-------|
| "."   | 点     |
| ","   | 像素    |
| "o"   | 圆     |
| "v"   | 向下三角形 |
| "^"   | 向上三角形 |
| "<"   | 向左三角形 |
| ">"   | 向右三角形 |
| "1"   | 向下三叉  |
| "2"   | 向上三叉  |
| "3"   | 向左三叉  |
| "4"   | 向右三叉  |
| "s"   | 正方形   |
| "p"   | 五边形   |
| "*"   | 星星    |
| "h"   | 六边形1  |
| "H"   | 六边形2  |
| "+"   | 加号    |
| "x"   | 叉号    |
| "D"   | 菱形    |
| "d"   | 小菱形   |
| "     | "     | 垂直线         |
| "_"   | 水平线   |

## 3.2 如何添加标记

在 Matplotlib 中，可以通过 `plot()` 函数的 `marker` 参数来指定标记类型。

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 1, 3, 5])

plt.plot(x, y, marker='o')  # 使用圆圈作为标记
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.title("Scatter Plot with Circle Markers")
plt.show()
```

在这个例子中，`marker='o'` 表示使用圆圈作为数据点的标记。

![](/15.png)
*Fig.15*

## 3.3 更多标记示例

下面是一些使用不同标记的示例：

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 1, 3, 5])

plt.plot(x, y, marker='*')  # 使用星号作为标记
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.title("Scatter Plot with Star Markers")
plt.show()
```

![](/16.png)
*Fig.16*

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 1, 3, 5])

plt.plot(x, y, marker='^')  # 使用向上三角形作为标记
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.title("Scatter Plot with Triangle Markers")
plt.show()
```

![](/17.png)
*Fig.17*

## 3.4 标记大小、颜色和边框

除了选择标记类型外，还可以自定义标记的大小、颜色和边框。

*   `markersize` 或 `ms`：设置标记的大小。
*   `markerfacecolor` 或 `mfc`：设置标记的填充颜色。
*   `markeredgecolor` 或 `mec`：设置标记的边框颜色。
*   `markeredgewidth` 或 `mew`：设置标记的边框宽度。

下面是一个示例：

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 1, 3, 5])

plt.plot(x,
         y,
         marker='o',
         ms=10,           # 设置标记大小为 10
         mfc='red',       # 设置标记填充颜色为红色
         mec='black',     # 设置标记边框颜色为黑色
         mew=2)          # 设置标记边框宽度为 2
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.title("Scatter Plot with Customized Markers")
plt.show()
```

在这个例子中，我们设置了标记的大小、填充颜色、边框颜色和边框宽度。

![](/18.png)
*Fig.18*

## 3.5 简写标记字符串

与线条样式类似，标记也可以使用简写字符串来设置。简写字符串通常由颜色、标记和线条样式组成。

例如，`'r--o'` 表示红色虚线，圆圈标记。

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 1, 3, 5])

plt.plot(x, y, 'r--o')  # 红色虚线，圆圈标记
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.title("Scatter Plot with Shorthand Notation")
plt.show()
```

![](/19.png)
*Fig.19*

## 3.6 总结

通过 Matplotlib 的绘图标记，我们可以更清晰地展示数据点的分布，突出显示关键数据，并使图表更具吸引力。你可以根据需要选择不同的标记类型，并自定义标记的大小、颜色和边框，以满足特定的可视化需求。

希望这个教程对你有所帮助！