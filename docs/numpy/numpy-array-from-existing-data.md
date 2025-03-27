---
title: NumPy 从已有数组创建数组
---


# 7. NumPy 从已有数组创建数组

NumPy 提供了多种方法，可以基于已有的数组创建新的数组。这在数据处理和分析中非常常见，可以帮助我们方便地提取、组合和转换数据。

## 7.1 `numpy.asarray()`

`numpy.asarray()` 函数可以将各种类型的输入转换为 NumPy 数组。如果输入本身就是一个 NumPy 数组，则不会进行复制，否则会创建一个新的数组。

**语法：**

```python
numpy.asarray(a, dtype=None, order=None)
```

*   `a`: 要转换为数组的输入数据，可以是列表、元组、数组等。
*   `dtype`: 可选参数，指定数组的数据类型。如果未指定，则从输入数据推断。
*   `order`: 可选参数，指定数组的存储顺序，可以是 'C' (行优先) 或 'F' (列优先)。

**示例：**

```python
import numpy as np

# 从列表创建数组
list1 = [1, 2, 3, 4, 5]
arr1 = np.asarray(list1)
print("从列表创建的数组：", arr1)  # 输出：[1 2 3 4 5]

# 从元组创建数组
tuple1 = (6, 7, 8, 9, 10)
arr2 = np.asarray(tuple1)
print("从元组创建的数组：", arr2)  # 输出：[ 6  7  8  9 10]

# 从已有的 NumPy 数组创建数组（不复制）
arr3 = np.array([11, 12, 13])
arr4 = np.asarray(arr3)
print("从 NumPy 数组创建的数组：", arr4)  # 输出：[11 12 13]

# 改变数据类型
arr5 = np.asarray(list1, dtype=float)
print("指定数据类型的数组：", arr5)  # 输出：[1. 2. 3. 4. 5.]
```

## 7.2 `numpy.copy()`

`numpy.copy()` 函数用于创建现有数组的副本。 原始数组的任何更改都不会反映在副本中，反之亦然。

**语法：**

```python
numpy.copy(a, order='K')
```

*   `a`: 要复制的数组。
*   `order`: 可选参数，指定复制的顺序，可以是 'C' (行优先), 'F' (列优先), 'A' (保持原样) 或 'K' (尽可能接近原始布局)。

**示例：**

```python
import numpy as np

arr1 = np.array([1, 2, 3])
arr2 = np.copy(arr1)

print("原始数组：", arr1)  # 输出：[1 2 3]
print("复制的数组：", arr2)  # 输出：[1 2 3]

# 修改原始数组
arr1[0] = 100
print("修改后的原始数组：", arr1)  # 输出：[100   2   3]
print("复制的数组（未受影响）：", arr2)  # 输出：[1 2 3]
```

## 7.3 `numpy.fromiter()`

`numpy.fromiter()` 函数从可迭代对象（如列表、元组、生成器等）创建新的 NumPy 数组。

**语法：**

```python
numpy.fromiter(iterable, dtype, count=-1)
```

*   `iterable`: 可迭代对象，提供数据源。
*   `dtype`: 数组的数据类型。
*   `count`: 可选参数，指定要从迭代器中读取的元素数量。如果为 -1，则读取所有元素。

**示例：**

```python
import numpy as np

# 从生成器创建数组
def my_generator(n):
    for i in range(n):
        yield i * 2

arr1 = np.fromiter(my_generator(5), dtype=int)
print("从生成器创建的数组：", arr1)  # 输出：[0 2 4 6 8]

# 从 range 对象创建数组
arr2 = np.fromiter(range(5), dtype=float)
print("从 range 对象创建的数组：", arr2)  # 输出：[0. 1. 2. 3. 4.]
```

## 7.4 `numpy.fromfunction()`

`numpy.fromfunction()` 函数通过在一个网格上执行一个函数来构造一个数组。

**语法：**

```python
numpy.fromfunction(function, shape, *, dtype=<class 'float'>, like=None)
```

*   `function`: 用于生成数组值的函数。该函数应接受与 `shape` 维度数量相同的参数，每个参数表示一个坐标轴。
*   `shape`: 输出数组的形状。
*   `dtype`: 可选参数，数组的数据类型。

**示例：**

```python
import numpy as np

# 创建一个数组，其中每个元素的值是其坐标的和
def my_function(x, y):
    return x + y

arr1 = np.fromfunction(my_function, (3, 3), dtype=int)
print("使用 fromfunction 创建的数组：\n", arr1)
# 输出:
# [[0 1 2]
#  [1 2 3]
#  [2 3 4]]
```

## 7.5 总结

这些函数为我们提供了多种从现有数据创建 NumPy 数组的灵活方法。`asarray()` 用于转换，`copy()` 用于复制，`fromiter()` 用于从可迭代对象创建，`fromfunction()` 用于根据函数生成数组。 掌握这些方法可以更有效地进行 NumPy 数组操作。
