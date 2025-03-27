---
title: NumPy 排序和条件筛选
---


# 16. NumPy 排序和条件筛选

NumPy 提供了强大的排序和条件筛选功能，可以帮助我们快速地对数据进行处理和分析。

## 16.1 排序

NumPy 提供了多种排序函数，可以满足不同的排序需求。

### 16.1.1 `numpy.sort()`

`numpy.sort()` 函数用于对数组进行排序。它会返回一个新的排序后的数组，而不会修改原始数组。

```python
import numpy as np

arr = np.array([3, 1, 4, 1, 5, 9, 2, 6])

# 默认升序排序
sorted_arr = np.sort(arr)
print(f"原始数组: {arr}")
print(f"排序后的数组: {sorted_arr}")
```

输出：

```
原始数组: [3 1 4 1 5 9 2 6]
排序后的数组: [1 1 2 3 4 5 6 9]
```

**指定排序轴**

对于多维数组，我们可以指定 `axis` 参数来沿着指定的轴进行排序。

```python
arr_2d = np.array([[3, 1, 4], [1, 5, 2], [6, 3, 9]])

# 沿着每一行进行排序
sorted_arr_row = np.sort(arr_2d, axis=1)
print(f"原始数组:\n{arr_2d}")
print(f"沿着行排序后的数组:\n{sorted_arr_row}")

# 沿着每一列进行排序
sorted_arr_col = np.sort(arr_2d, axis=0)
print(f"沿着列排序后的数组:\n{sorted_arr_col}")
```

输出：

```
原始数组:
[[3 1 4]
 [1 5 2]
 [6 3 9]]
排序后的数组:
[[1 3 4]
 [1 2 5]
 [3 6 9]]
沿着列排序后的数组:
[[1 1 2]
 [3 3 4]
 [6 5 9]]
```

### 16.1.2 `numpy.argsort()`

`numpy.argsort()` 函数返回的是数组排序后的**索引**。这在需要保持原始数组结构的情况下非常有用。

```python
arr = np.array([3, 1, 4, 1, 5, 9, 2, 6])

# 获取排序后的索引
sorted_indices = np.argsort(arr)
print(f"原始数组: {arr}")
print(f"排序后的索引: {sorted_indices}")

# 通过索引获取排序后的数组
sorted_arr = arr[sorted_indices]
print(f"排序后的数组: {sorted_arr}")
```

输出：

```
原始数组: [3 1 4 1 5 9 2 6]
排序后的索引: [1 3 6 0 2 4 7 5]
排序后的数组: [1 1 2 3 4 5 6 9]
```

### 16.1.3 其他排序函数

NumPy 还提供了一些其他的排序函数，例如：

*   `numpy.lexsort()`：用于对多个序列进行间接排序。
*   `numpy.msort()`：沿着第一个轴排序。
*   `numpy.sort_complex()`：对复数进行排序。

## 16.2 条件筛选

NumPy 提供了强大的条件筛选功能，可以根据指定的条件从数组中提取元素。

### 16.2.1 布尔索引

最常用的条件筛选方法是使用布尔索引。我们可以创建一个布尔数组，其中 `True` 表示要保留的元素，`False` 表示要排除的元素。

```python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# 创建一个布尔数组，筛选出大于 5 的元素
mask = arr > 5
print(f"原始数组: {arr}")
print(f"布尔掩码: {mask}")

# 使用布尔索引筛选元素
filtered_arr = arr[mask]
print(f"筛选后的数组: {filtered_arr}")
```

输出：

```
原始数组: [ 1  2  3  4  5  6  7  8  9 10]
布尔掩码: [False False False False False  True  True  True  True  True]
筛选后的数组: [ 6  7  8  9 10]
```

**组合条件**

我们可以使用逻辑运算符（`&`、`|`、`~`）来组合多个条件。

```python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# 筛选出大于 5 且小于 9 的元素
mask = (arr > 5) & (arr < 9)
filtered_arr = arr[mask]
print(f"筛选后的数组: {filtered_arr}")
```

输出：

```
筛选后的数组: [6 7 8]
```

### 16.2.2 `numpy.where()`

`numpy.where()` 函数可以根据条件返回数组中元素的索引。它有两种用法：

1.  **`numpy.where(condition)`**:  返回满足条件的元素的索引。
2.  **`numpy.where(condition, x, y)`**:  如果满足条件，则返回 `x` 中的元素，否则返回 `y` 中的元素。

```python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# 返回大于 5 的元素的索引
indices = np.where(arr > 5)
print(f"大于 5 的元素的索引: {indices}")

# 根据条件替换元素
new_arr = np.where(arr > 5, arr * 2, arr / 2)
print(f"替换后的数组: {new_arr}")
```

输出：

```
大于 5 的元素的索引: (array([ 5,  6,  7,  8,  9]),)
替换后的数组: [0.5 1.  1.5 2.  2.5 12.  14.  16.  18.  20. ]
```

### 16.2.3 `numpy.extract()`

`numpy.extract()` 函数用于根据条件从数组中提取元素。

```python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# 提取大于 5 的元素
extracted_arr = np.extract(arr > 5, arr)
print(f"提取后的数组: {extracted_arr}")
```

输出：

```
提取后的数组: [ 6  7  8  9 10]
```

## 16.3 总结

NumPy 的排序和条件筛选功能非常强大，可以帮助我们高效地处理和分析数据。熟练掌握这些函数，可以大大提高我们的数据处理效率。
