---
title: NumPy 简介
---



# 1. NumPy 简介

NumPy (Numerical Python 的简称) 是 Python 中用于科学计算的基础包。它是一个 Python 库，提供多维数组对象，各种派生对象（例如 masked array 和矩阵），以及用于数组快速操作的各种例程，包括数学、逻辑、形状操作、排序、选择、I/O、离散傅立叶变换、基本线性代数，基本统计运算，随机模拟等等。

## 1.1 为什么要用 NumPy？

在 Python 中，我们通常使用列表（list）来存储数据。但是，当涉及到大规模数值计算时，列表的效率不高。NumPy 的出现就是为了解决这个问题。

NumPy 的主要优点包括：

*   **高性能：** NumPy 的核心是 C 语言编写的，对数组的操作进行了优化，速度非常快。
*   **强大的多维数组对象：** NumPy 的 `ndarray` 对象可以表示 N 维数组，方便进行各种数学运算。
*   **丰富的函数库：** NumPy 提供了大量的函数，涵盖了数学、统计、线性代数等各个领域。
*   **广播机制：** NumPy 可以在不同形状的数组之间进行运算，简化了代码。

简单来说，NumPy 让 Python 在科学计算领域拥有了与 MATLAB 相媲美的能力。

## 1.2 NumPy 的核心：ndarray 对象

NumPy 最重要的一个特点是其 N 维数组对象 `ndarray`，它是一系列**同类型**数据的集合，以 0 为开始的下标进行索引。

`ndarray` 对象具有以下特点：

*   **同质性：** 数组中的所有元素必须是相同类型的。
*   **多维性：** 数组可以是任意维度的。
*   **固定大小：** 数组的大小在创建时就确定了。

### 1.2.1 创建 ndarray 对象

可以使用 NumPy 的 `array()` 函数从列表、元组等对象创建 `ndarray` 对象。

**示例：**

```python
import numpy as np

# 从列表创建
arr1 = np.array([1, 2, 3, 4, 5])
print(arr1)  # 输出: [1 2 3 4 5]
print(type(arr1)) # 输出: <class 'numpy.ndarray'>

# 从元组创建
arr2 = np.array((6, 7, 8, 9, 10))
print(arr2)  # 输出: [ 6  7  8  9 10]

# 创建二维数组
arr3 = np.array([[1, 2, 3], [4, 5, 6]])
print(arr3)
# 输出:
# [[1 2 3]
#  [4 5 6]]
```

### 1.2.2 ndarray 对象的属性

`ndarray` 对象有很多属性，常用的包括：

*   `ndim`: 数组的维度。
*   `shape`: 数组的形状（各维度的长度）。
*   `size`: 数组中元素的总个数。
*   `dtype`: 数组中元素的数据类型。
*   `itemsize`: 数组中每个元素所占的字节数。

**示例：**

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print("维度:", arr.ndim)    # 输出: 维度: 2
print("形状:", arr.shape)   # 输出: 形状: (2, 3)
print("大小:", arr.size)    # 输出: 大小: 6
print("数据类型:", arr.dtype) # 输出: 数据类型: int64 (或者 int32，取决于你的系统)
print("元素大小:", arr.itemsize) # 输出: 元素大小: 8 (或者 4，取决于你的系统)
```

### 1.2.3 其他创建数组的方式

除了 `array()` 函数，NumPy 还提供了很多其他的函数来创建数组：

*   `zeros()`: 创建一个全 0 数组。
*   `ones()`: 创建一个全 1 数组。
*   `empty()`: 创建一个未初始化的数组。
*   `arange()`: 创建一个等差数列数组。
*   `linspace()`: 创建一个指定范围内均匀分布的数组。
*   `random.rand()`: 创建一个指定形状的随机数组（0-1之间的均匀分布）。
*   `random.randn()`: 创建一个指定形状的随机数组（标准正态分布）。
*   `random.randint()`: 创建一个指定范围内指定形状的随机整数数组。

**示例：**

```python
import numpy as np

# 创建一个 3x4 的全 0 数组
zeros_arr = np.zeros((3, 4))
print("zeros_arr:\n", zeros_arr)

# 创建一个 2x2 的全 1 数组
ones_arr = np.ones((2, 2))
print("ones_arr:\n", ones_arr)

# 创建一个 1x5 的未初始化数组
empty_arr = np.empty((1, 5))
print("empty_arr:\n", empty_arr) # 里面的值是随机的，不要依赖它

# 创建一个从 0 到 9 的等差数列数组
arange_arr = np.arange(10)
print("arange_arr:\n", arange_arr)

# 创建一个从 0 到 1，包含 5 个元素的均匀分布数组
linspace_arr = np.linspace(0, 1, 5)
print("linspace_arr:\n", linspace_arr)

# 创建一个2x3的0-1之间均匀分布的随机数组
rand_arr = np.random.rand(2,3)
print("rand_arr:\n", rand_arr)

# 创建一个 2x3 的标准正态分布随机数组
randn_arr = np.random.randn(2, 3)
print("randn_arr:\n", randn_arr)

# 创建一个 2x3 的 0-10 之间的随机整数数组
randint_arr = np.random.randint(0, 10, (2, 3))
print("randint_arr:\n", randint_arr)
```

## 1.3 总结

NumPy 是 Python 科学计算的核心库，`ndarray` 对象是 NumPy 的基石。 掌握 NumPy 的基本概念和使用方法，可以为后续的科学计算和数据分析打下坚实的基础。 通过本节的介绍，你应该对 NumPy 有了一个初步的了解， 接下来我们将学习 NumPy 的更多高级用法。
