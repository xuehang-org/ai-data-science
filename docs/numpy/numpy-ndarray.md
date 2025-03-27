---
title: NumPy Ndarray
---

# 3. NumPy Ndarray

NumPy 的核心是 `ndarray` 对象，它是一个**多维数组**，用于存储**同类型**的数据。可以把它想象成一个表格，或者一个立方体，甚至更高维度的空间。

## 3.1 什么是 Ndarray？

`ndarray` (n-dimensional array) 是 NumPy 提供的多维数组对象。它具有以下关键特征：

*   **同质性**：数组中的所有元素必须是**相同的数据类型**（例如：整数、浮点数、字符串等）。
*   **多维性**：可以是**一维、二维、三维甚至更高维**的数组。
*   **高效性**：NumPy 数组在内存中连续存储，这使得 NumPy 能够高效地执行数值计算。

## 3.2 创建 Ndarray

有多种方法可以创建 NumPy 数组：

### 3.2.1 从 Python 列表或元组创建

这是最常用的方法之一：

```python
import numpy as np

# 从列表创建一维数组
arr1 = np.array([1, 2, 3, 4, 5])
print(arr1)  # 输出: [1 2 3 4 5]

# 从元组创建一维数组
arr2 = np.array((6, 7, 8, 9, 10))
print(arr2)  # 输出: [ 6  7  8  9 10]

# 从列表的列表创建二维数组
arr3 = np.array([[1, 2, 3], [4, 5, 6]])
print(arr3)
# 输出:
# [[1 2 3]
#  [4 5 6]]
```

### 3.2.2 使用 NumPy 内置函数

NumPy 提供了许多方便的函数来创建特定类型的数组：

*   `np.zeros()`：创建全零数组
*   `np.ones()`：创建全一数组
*   `np.empty()`：创建未初始化的数组
*   `np.arange()`：创建等差数组
*   `np.linspace()`：创建指定范围内的等间隔数组

```python
import numpy as np

# 创建一个 3x4 的全零数组
zeros_arr = np.zeros((3, 4))
print(zeros_arr)
# 输出:
# [[0. 0. 0. 0.]
#  [0. 0. 0. 0.]
#  [0. 0. 0. 0.]]

# 创建一个 2x2 的全一数组
ones_arr = np.ones((2, 2))
print(ones_arr)
# 输出:
# [[1. 1.]
#  [1. 1.]]

# 创建一个 1x3 的未初始化数组（值是随机的）
empty_arr = np.empty((1, 3))
print(empty_arr)
# 输出: (类似于)
# [[6.9e-310 6.9e-310 6.9e-310]]

# 创建一个从 0 到 9 的等差数组
arange_arr = np.arange(10)
print(arange_arr)  # 输出: [0 1 2 3 4 5 6 7 8 9]

# 创建一个从 0 到 1，包含 5 个元素的等间隔数组
linspace_arr = np.linspace(0, 1, 5)
print(linspace_arr)  # 输出: [0.   0.25 0.5  0.75 1.  ]
```

### 3.2.3 使用随机数生成

NumPy 的 `random` 模块可以用来生成各种随机数数组：

```python
import numpy as np

# 生成一个 2x3 的 0 到 1 之间的随机数数组
rand_arr = np.random.rand(2, 3)
print(rand_arr)
# 输出: (类似于)
# [[0.123 0.456 0.789]
#  [0.987 0.654 0.321]]

# 生成一个 1 到 10 之间的 3x2 随机整数数组
randint_arr = np.random.randint(1, 10, size=(3, 2))
print(randint_arr)
# 输出: (类似于)
# [[5 2]
#  [9 1]
#  [3 8]]
```

## 3.3 Ndarray 的属性

`ndarray` 对象有很多有用的属性，可以帮助你了解数组的结构和数据类型：

*   `ndim`: 数组的维度（轴的个数）。
*   `shape`: 数组的形状（每个维度的大小）。
*   `size`: 数组中元素的总个数。
*   `dtype`: 数组中元素的数据类型。
*   `itemsize`: 数组中每个元素占用的字节数。

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print("维度:", arr.ndim)       # 输出: 维度: 2
print("形状:", arr.shape)      # 输出: 形状: (2, 3)
print("大小:", arr.size)       # 输出: 大小: 6
print("数据类型:", arr.dtype)    # 输出: 数据类型: int64 (或者 int32，取决于你的系统)
print("元素大小:", arr.itemsize) # 输出: 元素大小: 8 (或者 4，取决于你的系统)
```

## 3.4 Ndarray 的数据类型

`ndarray` 数组中的元素必须是相同的数据类型。NumPy 支持多种数据类型，包括：

*   `int`: 整数
*   `float`: 浮点数
*   `bool`: 布尔值
*   `string_`: 字符串
*   `object`: Python 对象

你可以在创建数组时指定数据类型：

```python
import numpy as np

# 创建一个整数类型的数组
int_arr = np.array([1, 2, 3], dtype=np.int32)
print(int_arr.dtype)  # 输出: int32

# 创建一个浮点数类型的数组
float_arr = np.array([1, 2, 3], dtype=np.float64)
print(float_arr.dtype) # 输出: float64

# 创建一个布尔类型的数组
bool_arr = np.array([0, 1, 0], dtype=np.bool_)
print(bool_arr.dtype)  # 输出: bool
print(bool_arr) # 输出: [False  True False]
```

## 3.5 改变 Ndarray 的形状

你可以使用 `reshape()` 方法改变数组的形状，但要确保新形状的元素总数与原数组相同。

```python
import numpy as np

arr = np.arange(12)  # 创建一个 0 到 11 的数组
print("原数组:", arr) # 输出: 原数组: [ 0  1  2  3  4  5  6  7  8  9 10 11]

# 将数组改变为 3x4 的形状
reshaped_arr = arr.reshape(3, 4)
print("改变形状后的数组:\n", reshaped_arr)
# 输出:
# 改变形状后的数组:
# [[ 0  1  2  3]
#  [ 4  5  6  7]
#  [ 8  9 10 11]]

# 将数组展平为一维数组
flattened_arr = reshaped_arr.flatten()
print("展平后的数组:", flattened_arr) # 输出: 展平后的数组: [ 0  1  2  3  4  5  6  7  8  9 10 11]
```

## 3.6 总结

`ndarray` 是 NumPy 的基石，理解它的概念和用法对于进行高效的数值计算至关重要。 掌握如何创建、检查和操作 NumPy 数组将为你的数据分析和科学计算之旅打下坚实的基础。

希望这篇文档对你有所帮助！ 祝你学习愉快！
