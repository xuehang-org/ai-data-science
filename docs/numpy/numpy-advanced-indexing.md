---
title: NumPy 高级索引
---

# 10. NumPy 高级索引

NumPy 提供了比基本切片更强大的索引方式，允许我们使用整数数组和布尔数组来选择数组中的元素，这种方式被称为高级索引。 高级索引返回的是数据的**副本(copy)**，而不是视图(view)。

## 10.1 什么是高级索引

高级索引主要有两种形式：

*   **整数数组索引：** 使用整数数组指定要选择的元素的索引。
*   **布尔索引：** 使用布尔数组选择数组中为 `True` 的元素。

## 10.2 整数数组索引

整数数组索引允许你使用一个或多个整数数组来选择数组中的元素。每个整数数组代表目标数组的一个维度上的索引。

### 10.2.1 一维数组的整数数组索引

对于一维数组，你可以直接使用一个整数数组来选择元素。

**示例：**

```python
import numpy as np

arr = np.array([10, 20, 30, 40, 50])
indices = np.array([0, 2, 4])  # 选择索引 0, 2, 4 对应的元素
result = arr[indices]
print(result)  # 输出: [10 30 50]
```

### 10.2.2 多维数组的整数数组索引

对于多维数组，你需要为每个维度提供一个索引数组。这些索引数组会按照配对的方式来选择元素。

**示例：**

```python
import numpy as np

arr = np.array([[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]])

row_indices = np.array([0, 1, 2])
col_indices = np.array([0, 1, 2])

result = arr[row_indices, col_indices] # 相当于 arr[0,0], arr[1,1], arr[2,2]
print(result)  # 输出: [1 5 9]
```

**理解多维数组索引的关键：**

*   `row_indices` 指定要选择的行的索引。
*   `col_indices` 指定要选择的列的索引。
*   NumPy 将 `row_indices` 和 `col_indices` 中相同位置的元素配对，形成要选择的元素的坐标。

**更复杂的例子：**

```python
import numpy as np

arr = np.array([[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]])

row_indices = np.array([0, 0, 1, 2])
col_indices = np.array([0, 2, 2, 1])

result = arr[row_indices, col_indices] # 相当于 arr[0,0], arr[0,2], arr[1,2], arr[2,1]
print(result)  # 输出: [1 3 6 8]
```

### 10.2.3 使用 `np.ix_` 创建索引网格

当你想要选择所有可能的行和列的组合时，可以使用 `np.ix_` 函数。

**示例：**

```python
import numpy as np

arr = np.array([[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]])

row_indices = np.array([0, 2])
col_indices = np.array([1, 2])

# 使用 np.ix_ 创建索引网格
result = arr[np.ix_(row_indices, col_indices)]
print(result)
# 输出:
# [[2 3]
#  [8 9]]
```

在这个例子中，`np.ix_(row_indices, col_indices)` 创建了一个索引网格，选择了行 `0` 和 `2`，以及列 `1` 和 `2` 的所有组合。

## 10.3 布尔索引

布尔索引允许你使用一个布尔数组来选择数组中对应于 `True` 值的元素。布尔数组的长度必须与要索引的轴的长度相同。

### 10.3.1 一维数组的布尔索引

**示例：**

```python
import numpy as np

arr = np.array([10, 20, 30, 40, 50])
bool_arr = np.array([True, False, True, False, True])

result = arr[bool_arr]  # 选择 bool_arr 中为 True 的位置对应的元素
print(result)  # 输出: [10 30 50]
```

### 10.3.2 多维数组的布尔索引

对于多维数组，你可以使用布尔数组来选择整个行或列。

**示例：**

```python
import numpy as np

arr = np.array([[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]])

bool_arr = np.array([True, False, True])  # 选择第 0 行和第 2 行

result = arr[bool_arr]
print(result)
# 输出:
# [[1 2 3]
#  [7 8 9]]
```

**使用条件表达式创建布尔数组：**

布尔索引通常与条件表达式结合使用，根据数组中的值选择元素。

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6])

# 选择所有大于 3 的元素
result = arr[arr > 3]
print(result)  # 输出: [4 5 6]

# 选择所有偶数
result = arr[arr % 2 == 0]
print(result)  # 输出: [2 4 6]
```

### 10.3.3  使用 `np.where()` 函数进行布尔索引

`np.where()` 函数可以根据条件返回数组中元素的索引。

**示例：**

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6])

# 找到所有大于 3 的元素的索引
indices = np.where(arr > 3)
print(indices)  # 输出: (array([3, 4, 5]),)  注意返回的是一个元组

# 根据条件替换数组中的值
new_arr = np.where(arr > 3, arr * 2, arr) # 大于3的元素乘以2，否则保持原值
print(new_arr) # 输出：[1 2 3 8 10 12]
```

## 10.4 组合索引

你可以将高级索引与其他索引方式（如切片）组合使用，以实现更复杂的选择。

**示例：**

```python
import numpy as np

arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]])

# 使用布尔索引选择行，然后使用切片选择列
bool_arr = np.array([True, False, True])
result = arr[bool_arr, 1:3]  # 选择第 0 行和第 2 行的第 1 列和第 2 列
print(result)
# 输出:
# [[ 2  3]
#  [10 11]]
```

## 10.5 总结

高级索引是 NumPy 中非常强大的功能，它允许你灵活地选择数组中的元素。 掌握整数数组索引和布尔索引，可以更高效地处理和操作数据。
