---
title: NumPy 统计函数
---

# 15. NumPy 统计函数

NumPy 提供了丰富的统计函数，可以帮助我们快速计算数组中的各种统计指标，例如：最大值、最小值、平均值、中位数、标准差等等。

## 15.1 常用统计函数概览

| 函数                | 描述          |
|-------------------|-------------|
| `np.min()`        | 计算数组中的最小值   |
| `np.max()`        | 计算数组中的最大值   |
| `np.mean()`       | 计算数组的算术平均值  |
| `np.median()`     | 计算数组的中位数    |
| `np.std()`        | 计算数组的标准差    |
| `np.var()`        | 计算数组的方差     |
| `np.sum()`        | 计算数组中所有元素的和 |
| `np.average()`    | 计算数组的加权平均值  |
| `np.percentile()` | 计算数组的百分位数   |

## 15.2 函数详解与示例

### 15.2.1 `np.min()` 和 `np.max()`

`np.min()` 用于查找数组中的最小值，`np.max()` 用于查找数组中的最大值。

```python
import numpy as np

arr = np.array([1, 5, 2, 8, 3, 6])

min_val = np.min(arr)
max_val = np.max(arr)

print("最小值:", min_val)  # 输出: 最小值: 1
print("最大值:", max_val)  # 输出: 最大值: 8
```

**指定轴 (axis)**

可以指定 `axis` 参数来沿着指定的轴计算最小值或最大值。

```python
arr = np.array([[1, 2, 3],
                [4, 5, 6]])

min_cols = np.min(arr, axis=0)  # 沿着列(axis=0)计算最小值
max_rows = np.max(arr, axis=1)  # 沿着行(axis=1)计算最大值

print("每列的最小值:", min_cols)  # 输出: 每列的最小值: [1 2 3]
print("每行的最大值:", max_rows)  # 输出: 每行的最大值: [3 6]
```

### 15.2.2 `np.mean()`

`np.mean()` 用于计算数组的算术平均值（所有元素的和除以元素个数）。

```python
arr = np.array([1, 2, 3, 4, 5])

mean_val = np.mean(arr)

print("平均值:", mean_val)  # 输出: 平均值: 3.0
```

**指定轴 (axis)**

同样可以指定 `axis` 参数沿着指定的轴计算平均值。

```python
arr = np.array([[1, 2, 3],
                [4, 5, 6]])

mean_cols = np.mean(arr, axis=0)  # 沿着列计算平均值
mean_rows = np.mean(arr, axis=1)  # 沿着行计算平均值

print("每列的平均值:", mean_cols)  # 输出: 每列的平均值: [2.5 3.5 4.5]
print("每行的平均值:", mean_rows)  # 输出: 每行的平均值: [2. 5.]
```

### 15.2.3 `np.median()`

`np.median()` 用于计算数组的中位数（将所有元素排序后，位于中间位置的元素的值）。

```python
arr = np.array([1, 3, 2, 4, 5])

median_val = np.median(arr)

print("中位数:", median_val)  # 输出: 中位数: 3.0
```

**指定轴 (axis)**

```python
arr = np.array([[1, 2, 3],
                [4, 5, 6]])

median_cols = np.median(arr, axis=0)  # 沿着列计算中位数
median_rows = np.median(arr, axis=1)  # 沿着行计算中位数

print("每列的中位数:", median_cols)  # 输出: 每列的中位数: [2.5 3.5 4.5]
print("每行的中位数:", median_rows)  # 输出: 每行的中位数: [2. 5.]
```

### 15.2.4 `np.std()` 和 `np.var()`

- `np.std()` 用于计算数组的标准差，标准差是方差的平方根，反映数据的离散程度。
- `np.var()` 用于计算数组的方差，方差是每个元素与平均值之差的平方和的平均值。

```python
arr = np.array([1, 2, 3, 4, 5])

std_val = np.std(arr)
var_val = np.var(arr)

print("标准差:", std_val)  # 输出: 标准差: 1.4142135623730951
print("方差:", var_val)  # 输出: 方差: 2.0
```

**指定轴 (axis)**

```python
arr = np.array([[1, 2, 3],
                [4, 5, 6]])

std_cols = np.std(arr, axis=0)  # 沿着列计算标准差
var_rows = np.var(arr, axis=1)  # 沿着行计算方差

print("每列的标准差:", std_cols)  # 输出: 每列的标准差: [1.5 1.5 1.5]
print("每行的方差:", var_rows)  # 输出: 每行的方差: [0.66666667 0.66666667]
```

### 15.2.5 `np.sum()`

`np.sum()` 用于计算数组中所有元素的和。

```python
arr = np.array([1, 2, 3, 4, 5])

sum_val = np.sum(arr)

print("总和:", sum_val)  # 输出: 总和: 15
```

**指定轴 (axis)**

```python
arr = np.array([[1, 2, 3],
                [4, 5, 6]])

sum_cols = np.sum(arr, axis=0)  # 沿着列计算总和
sum_rows = np.sum(arr, axis=1)  # 沿着行计算总和

print("每列的总和:", sum_cols)  # 输出: 每列的总和: [5 7 9]
print("每行的总和:", sum_rows)  # 输出: 每行的总和: [ 6 15]
```

### 15.2.6 `np.average()`

`np.average()` 用于计算数组的加权平均值。 如果没有指定权重，则与 `np.mean()` 效果相同。

```python
arr = np.array([1, 2, 3, 4])
weights = np.array([0.1, 0.2, 0.3, 0.4]) # 权重

average_val = np.average(arr, weights=weights)

print("加权平均值:", average_val)  # 输出: 加权平均值: 3.0
```

### 15.2.7 `np.percentile()`

`np.percentile()` 用于计算数组的百分位数。

```python
arr = np.array([1, 2, 3, 4, 5])

# 计算 50% 分位数 (中位数)
percentile_50 = np.percentile(arr, 50)
print("50% 分位数 (中位数):", percentile_50)  # 输出: 50% 分位数 (中位数): 3.0

# 计算 25% 和 75% 分位数
percentile_25 = np.percentile(arr, 25)
percentile_75 = np.percentile(arr, 75)
print("25% 分位数:", percentile_25)  # 输出: 25% 分位数: 2.0
print("75% 分位数:", percentile_75)  # 输出: 75% 分位数: 4.0
```

**指定轴 (axis)**

```python
arr = np.array([[1, 2, 3],
                [4, 5, 6]])

percentile_50_cols = np.percentile(arr, 50, axis=0)  # 沿着列计算 50% 分位数
percentile_50_rows = np.percentile(arr, 50, axis=1)  # 沿着行计算 50% 分位数

print("每列的 50% 分位数:", percentile_50_cols)  # 输出: 每列的 50% 分位数: [2.5 3.5 4.5]
print("每行的 50% 分位数:", percentile_50_rows)  # 输出: 每行的 50% 分位数: [2. 5.]
```

## 15.3 总结

NumPy 的统计函数为我们提供了方便快捷的数组统计分析工具。 掌握这些函数，可以大大提高数据处理的效率。  在使用时，注意 `axis` 参数的含义，以便在正确的维度上进行计算。
