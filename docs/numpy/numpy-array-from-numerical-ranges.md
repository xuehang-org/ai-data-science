---
title: NumPy 从数值范围创建数组
---


# 8. NumPy 从数值范围创建数组

NumPy 提供了多种方法可以从数值范围创建数组，这些方法在生成等间隔的数值序列时非常有用。

## 8.1 `arange()` 函数

`arange()` 函数类似于 Python 内置的 `range()` 函数，但它返回的是一个 NumPy 数组，而不是列表。`arange()` 可以生成指定范围内的数值序列。

**语法：**

```python
numpy.arange(start, stop, step, dtype)
```

*   `start`:  序列的起始值，默认为 0。
*   `stop`:  序列的结束值（不包含）。
*   `step`:  序列中数值之间的步长，默认为 1。
*   `dtype`:  数组的数据类型，如果没有指定，则从输入参数推断数据类型。

**示例：**

```python
import numpy as np

# 创建一个从 0 到 4 的整数数组
arr1 = np.arange(5)
print(arr1)  # 输出: [0 1 2 3 4]

# 创建一个从 1 到 10，步长为 2 的整数数组
arr2 = np.arange(1, 10, 2)
print(arr2)  # 输出: [1 3 5 7 9]

# 创建一个从 0 到 1，步长为 0.1 的浮点数数组
arr3 = np.arange(0, 1, 0.1)
print(arr3)
# 输出: [0.  0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9]
```

**注意：**

*   `arange()` 函数的 `stop` 参数是不包含在结果数组中的。
*   当使用浮点数作为步长时，由于浮点数精度问题，可能会导致结果不完全符合预期。  推荐使用 `linspace()` 在这种情况下。

## 8.2 `linspace()` 函数

`linspace()` 函数用于创建一个在指定范围内均匀分布的数值数组。 与 `arange()` 不同，`linspace()` 允许你指定数组中元素的数量，而不是步长。

**语法：**

```python
numpy.linspace(start, stop, num, endpoint, retstep, dtype)
```

*   `start`:  序列的起始值。
*   `stop`:  序列的结束值。
*   `num`:  数组中元素的数量。
*   `endpoint`:  如果为 `True` (默认值)，则 `stop` 是最后一个样本。 否则，不包含 `stop`。
*   `retstep`:  如果为 `True`，则返回 (`samples`, `step`)，其中 `step` 是样本之间的间距。
*   `dtype`:  数组的数据类型。

**示例：**

```python
import numpy as np

# 创建一个包含 5 个元素的数组，这些元素在 0 到 1 之间均匀分布
arr4 = np.linspace(0, 1, 5)
print(arr4)  # 输出: [0.   0.25 0.5  0.75 1.  ]

# 创建一个包含 10 个元素的数组，不包含结束值 1
arr5 = np.linspace(0, 1, 10, endpoint=False)
print(arr5)
# 输出: [0.  0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9]

# 创建一个包含 5 个元素的数组，并返回步长
arr6, step = np.linspace(0, 1, 5, retstep=True)
print(arr6)  # 输出: [0.   0.25 0.5  0.75 1.  ]
print(step)  # 输出: 0.25
```

**注意：**

*   `linspace()` 函数在需要精确控制数组元素数量时非常有用。
*   `retstep` 参数可以方便地获取数组中相邻元素之间的间距。

## 8.3 `logspace()` 函数

`logspace()` 函数用于创建一个在指定范围内以对数刻度均匀分布的数值数组。

**语法：**

```python
numpy.logspace(start, stop, num, endpoint, base, dtype)
```

*   `start`:  序列的起始值为 `base ** start`。
*   `stop`:  序列的结束值为 `base ** stop`。
*   `num`:  数组中元素的数量。
*   `endpoint`:  如果为 `True` (默认值)，则 `stop` 是最后一个样本。
*   `base`:  对数空间的底数，默认为 10。
*   `dtype`:  数组的数据类型。

**示例：**

```python
import numpy as np

# 创建一个包含 5 个元素的数组，这些元素在 10^0 (1) 到 10^2 (100) 之间以对数刻度均匀分布
arr7 = np.logspace(0, 2, 5)
print(arr7)
# 输出: [  1.           3.16227766  10.          31.6227766  100.        ]

# 创建一个包含 5 个元素的数组，底数为 2
arr8 = np.logspace(0, 4, 5, base=2)
print(arr8)
# 输出: [ 1.  2.  4.  8. 16.]
```

**注意：**

*   `logspace()` 函数在处理需要以对数方式分布的数据时非常有用，例如频率分析、信号处理等。

## 8.4 总结

NumPy 提供了 `arange()`、`linspace()` 和 `logspace()` 等函数，用于从数值范围创建数组。  选择哪个函数取决于你的具体需求：

*   如果需要指定步长，可以使用 `arange()`。
*   如果需要指定数组中元素的数量，可以使用 `linspace()`。
*   如果需要以对数刻度创建数组，可以使用 `logspace()`。

掌握这些函数可以帮助你更有效地生成和处理数值数据。
