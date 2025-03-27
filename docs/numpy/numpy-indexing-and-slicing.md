---
title: NumPy 切片和索引
---


# 9. NumPy 切片和索引

NumPy 提供了强大的切片和索引功能，可以方便地访问和操作数组中的数据。

## 9.1 索引

### 9.1.1 一维数组索引

一维数组的索引与 Python 列表类似，从 0 开始。

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])

print(arr[0])  # 输出：1
print(arr[3])  # 输出：4
print(arr[-1]) # 输出：5  （负索引表示从末尾开始计数）
```

### 9.1.2 多维数组索引

多维数组的索引使用逗号分隔，每个维度对应一个索引值。

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print(arr[0, 0])  # 输出：1  (第一行，第一列)
print(arr[1, 2])  # 输出：6  (第二行，第三列)
```

**注意:**  可以把多维数组看作是嵌套的数组，`arr[0]` 得到的是第一行 `[1, 2, 3]`，然后再用 `[0]` 得到该行的第一个元素。

### 9.1.3 花式索引

花式索引允许使用整数数组或列表作为索引，一次性选择多个元素。

#### 9.1.3.1 一维花式索引

```python
import numpy as np

arr = np.array([10, 20, 30, 40, 50])
indices = [0, 2, 4]  # 要选择的元素的索引
result = arr[indices]
print(result)  # 输出：[10 30 50]
```

#### 9.1.3.2 多维花式索引

对于多维数组，花式索引可以更灵活地选择元素。

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
row_indices = [0, 2]  # 要选择的行的索引
col_indices = [1, 2]  # 要选择的列的索引

result = arr[row_indices, col_indices]
print(result)  # 输出：[2 9]
#  相当于选择了 arr[0, 1] 和 arr[2, 2]
```

**理解多维花式索引的关键：** `arr[[row1, row2], [col1, col2]]`  会选择 `(row1, col1)` 和 `(row2, col2)` 对应的元素。  行索引和列索引的列表/数组的长度必须相同。

### 9.1.4 布尔索引

布尔索引使用布尔数组作为索引，选择数组中所有对应 `True` 的元素。

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
mask = arr > 2  # 创建一个布尔数组，大于 2 的位置为 True
print(mask)  # 输出：[False False  True  True  True]
result = arr[mask]  # 选择所有 True 对应的元素
print(result)  # 输出：[3 4 5]
```

布尔索引常用于根据条件筛选数组中的数据。

```python
import numpy as np

arr = np.array([[1, 2], [3, 4], [5, 6]])
mask = arr[:, 0] > 2  # 选择第一列大于 2 的行
print(mask)  # 输出：[False  True  True]
result = arr[mask]  # 选择满足条件的行
print(result)
# 输出：
# [[3 4]
#  [5 6]]
```

## 9.2 切片

### 9.2.1 一维数组切片

一维数组的切片与 Python 列表的切片类似，使用 `[start:stop:step]` 语法。

```python
import numpy as np

arr = np.array([10, 20, 30, 40, 50])

print(arr[1:4])    # 输出：[20 30 40]  (从索引 1 到 3)
print(arr[:3])     # 输出：[10 20 30]  (从开始到索引 2)
print(arr[3:])     # 输出：[40 50]    (从索引 3 到结束)
print(arr[::2])    # 输出：[10 30 50]  (从开始到结束，步长为 2)
print(arr[::-1])   # 输出：[50 40 30 20 10] (反转数组)
```

### 9.2.2 多维数组切片

多维数组的切片需要为每个维度指定切片范围。

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

print(arr[0:2, 1:3])
# 输出：
# [[2 3]
#  [5 6]]
#  (选择 0 和 1 行，以及 1 和 2 列)

print(arr[:, 0])  # 输出：[1 4 7] (选择所有行的第一列)
print(arr[1, :])  # 输出：[4 5 6] (选择第二行的所有列)
```

**理解多维数组切片：**  可以把多维切片看作是对每个维度分别进行切片操作。 `arr[row_start:row_end, col_start:col_end]` 表示选择行索引从 `row_start` 到 `row_end-1`，列索引从 `col_start` 到 `col_end-1` 的区域。

### 9.2.3 切片是视图

NumPy 的切片操作返回的是数组的**视图 (view)**，而不是拷贝。这意味着修改切片会影响原始数组。

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
slice_arr = arr[1:4]
slice_arr[0] = 100  # 修改切片
print(arr)  # 输出：[  1 100   3   4   5]  (原始数组被修改)
```

如果需要创建切片的拷贝，可以使用 `copy()` 方法。

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
slice_arr = arr[1:4].copy()
slice_arr[0] = 100
print(arr)  # 输出：[1 2 3 4 5] (原始数组没有被修改)
print(slice_arr) # 输出：[100   3   4]
```

## 9.3 组合索引和切片

可以将索引和切片组合使用，以实现更复杂的数据选择。

```python
import numpy as np

arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])

# 选择第一行和第三行的第 2 和第 3 个元素
result = arr[[0, 2], 1:3]
print(result)
# 输出：
# [[ 2  3]
#  [10 11]]
```

## 9.4 总结

*   **索引** 用于访问数组中的单个元素。
*   **切片** 用于选择数组中的一个区域。
*   **花式索引** 允许使用整数数组或列表一次性选择多个元素。
*   **布尔索引** 允许根据条件选择数组中的元素。
*   切片返回的是数组的**视图**，修改切片会影响原始数组。 使用 `copy()` 方法可以创建切片的拷贝。

掌握 NumPy 的切片和索引技巧，可以更加高效地处理数组数据。

