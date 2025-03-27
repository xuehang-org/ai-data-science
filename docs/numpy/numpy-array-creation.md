---
title: NumPy 创建数组
---
 
# 6. NumPy 创建数组

NumPy 的核心是 `ndarray` 对象，它是一个 N 维数组，存储着同类型的数据。创建 NumPy 数组是使用 NumPy 的第一步，本文将介绍 NumPy 中创建数组的各种方法。

## 6.1 从 Python 列表或元组创建

这是最常用也是最简单的方法。

### 6.1.1 使用 `np.array()`

`np.array()` 函数可以接受 Python 的列表或元组作为输入，并将其转换为 NumPy 数组。

```python
import numpy as np

# 从列表创建
list1 = [1, 2, 3, 4, 5]
arr1 = np.array(list1)
print(arr1)  # 输出: [1 2 3 4 5]
print(type(arr1))  # 输出: <class 'numpy.ndarray'>

# 从元组创建
tuple1 = (6, 7, 8, 9, 10)
arr2 = np.array(tuple1)
print(arr2)  # 输出: [ 6  7  8  9 10]
```

### 6.1.2 多维数组

`np.array()` 也能创建多维数组，只需要传入嵌套的列表或元组。

```python
# 创建二维数组
list2d = [[1, 2, 3], [4, 5, 6]]
arr2d = np.array(list2d)
print(arr2d)
# 输出:
# [[1 2 3]
#  [4 5 6]]

# 创建三维数组
list3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
arr3d = np.array(list3d)
print(arr3d)
# 输出:
# [[[1 2]
#   [3 4]]
#
#  [[5 6]
#   [7 8]]]
```

## 6.2 使用 NumPy 内置函数创建

NumPy 提供了一系列函数，用于创建特定类型的数组，非常方便。

### 6.2.1 `np.zeros()`

创建全 0 数组。

```python
# 创建一个包含 5 个 0 的一维数组
arr_zeros1d = np.zeros(5)
print(arr_zeros1d)  # 输出: [0. 0. 0. 0. 0.]

# 创建一个 2x3 的二维数组，所有元素为 0
arr_zeros2d = np.zeros((2, 3))
print(arr_zeros2d)
# 输出:
# [[0. 0. 0.]
#  [0. 0. 0.]]
```

### 6.2.2 `np.ones()`

创建全 1 数组。

```python
# 创建一个包含 3 个 1 的一维数组
arr_ones1d = np.ones(3)
print(arr_ones1d)  # 输出: [1. 1. 1.]

# 创建一个 3x2 的二维数组，所有元素为 1
arr_ones2d = np.ones((3, 2))
print(arr_ones2d)
# 输出:
# [[1. 1.]
#  [1. 1.]
#  [1. 1.]]
```

### 6.2.3 `np.full()`

创建指定值的数组。

```python
# 创建一个包含 4 个 7 的一维数组
arr_full1d = np.full(4, 7)
print(arr_full1d)  # 输出: [7 7 7 7]

# 创建一个 2x2 的二维数组，所有元素为 9
arr_full2d = np.full((2, 2), 9)
print(arr_full2d)
# 输出:
# [[9 9]
#  [9 9]]
```

### 6.2.4 `np.empty()`

创建一个未初始化的数组（数组中的值是内存中的现有值，可能是随机的）。

```python
# 创建一个 2x4 的二维数组，元素未初始化
arr_empty = np.empty((2, 4))
print(arr_empty)
# 输出（示例，每次运行可能不同）:
# [[6.9002795e-310 6.9002795e-310 6.9002795e-310 6.9002795e-310]
#  [6.9002795e-310 6.9002795e-310 6.9002795e-310 6.9002795e-310]]
```

### 6.2.5 `np.arange()`

类似于 Python 的 `range()` 函数，用于创建等差数组。

```python
# 创建一个从 0 到 9 的一维数组
arr_arange1 = np.arange(10)
print(arr_arange1)  # 输出: [0 1 2 3 4 5 6 7 8 9]

# 创建一个从 2 到 20，步长为 3 的一维数组
arr_arange2 = np.arange(2, 21, 3)
print(arr_arange2)  # 输出: [ 2  5  8 11 14 17 20]
```

### 6.2.6 `np.linspace()`

创建一个在指定范围内均匀分布的数组。

```python
# 创建一个包含 5 个元素的数组，这些元素在 0 到 1 之间均匀分布
arr_linspace = np.linspace(0, 1, 5)
print(arr_linspace)  # 输出: [0.   0.25 0.5  0.75 1.  ]
```

### 6.2.7 `np.eye()`

创建一个单位矩阵（对角线为 1，其余为 0）。

```python
# 创建一个 4x4 的单位矩阵
arr_eye = np.eye(4)
print(arr_eye)
# 输出:
# [[1. 0. 0. 0.]
#  [0. 1. 0. 0.]
#  [0. 0. 1. 0.]
#  [0. 0. 0. 1.]]
```

## 6.3 指定数据类型

在创建数组时，可以使用 `dtype` 参数指定数组的数据类型。

```python
# 创建一个整数类型的数组
arr_int = np.array([1, 2, 3], dtype='int32')
print(arr_int.dtype)  # 输出: int32

# 创建一个浮点数类型的数组
arr_float = np.array([1, 2, 3], dtype='float64')
print(arr_float.dtype)  # 输出: float64
```

常用的 `dtype` 类型包括：

*   `int8`, `int16`, `int32`, `int64`:  整数
*   `uint8`, `uint16`, `uint32`, `uint64`: 无符号整数
*   `float16`, `float32`, `float64`: 浮点数
*   `complex64`, `complex128`: 复数
*   `bool`: 布尔值
*   `string_`, `unicode_`: 字符串

## 6.4 总结

NumPy 提供了多种创建数组的方法，可以根据不同的需求选择合适的方法。 掌握这些方法是使用 NumPy 进行数据分析和科学计算的基础。

希望这篇文档对你有所帮助！
