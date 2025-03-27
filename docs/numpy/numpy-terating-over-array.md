---
title: NumPy 迭代数组
---

# 12. NumPy 迭代数组

在 NumPy 中，迭代数组意味着逐个访问数组中的每个元素。NumPy 提供了多种迭代数组的方式，这使得我们可以方便地对数组中的元素进行操作。

## 12.1  `nditer` 对象

NumPy 提供了 `nditer` 对象，这是一个高效的多维迭代器对象，可以用于在数组上进行迭代。

### 12.1.1 一维数组迭代

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])

for x in np.nditer(arr):
  print(x)
```

输出：

```
1
2
3
4
5
```

### 12.1.2 二维数组迭代

默认情况下，`nditer` 将多维数组视为一维数组进行迭代。

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

for x in np.nditer(arr):
  print(x)
```

输出：

```
1
2
3
4
5
6
```

### 12.1.3 指定迭代顺序

可以通过 `order` 参数指定迭代顺序。`order='C'` 表示按行迭代（C 风格），`order='F'` 表示按列迭代（Fortran 风格）。

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

for x in np.nditer(arr, order='C'):
  print(x)
```

输出：

```
1
2
3
4
5
6
```

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

for x in np.nditer(arr, order='F'):
  print(x)
```

输出：

```
1
4
2
5
3
6
```

### 12.1.4 修改数组元素

要通过 `nditer` 修改数组元素，需要传递 `flags=['readwrite']`。

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])

for x in np.nditer(arr, flags=['readwrite']):
  x[...] = x * 2  # 注意这里要用 x[...] 才能修改数组
print(arr)
```

输出：

```
[ 2  4  6  8 10]
```

**注意：**  `x[...] = ...`  是修改迭代器当前元素的正确方法。直接赋值  `x = ...`  只会改变迭代器变量的值，而不会修改原始数组。

### 12.1.5 指定数据类型

可以使用 `op_dtypes` 参数指定迭代时的数据类型，这可以确保元素以特定类型进行处理。

```python
import numpy as np

arr = np.array([1, 2, 3])

for x in np.nditer(arr, op_dtypes=['float']):
  print(x)
```

输出：

```
1.0
2.0
3.0
```

## 12.2 `ndenumerate` 对象

`ndenumerate` 对象用于同时获取数组元素的索引和值。

### 12.2.1 一维数组枚举

```python
import numpy as np

arr = np.array([1, 2, 3])

for idx, x in np.ndenumerate(arr):
  print(idx, x)
```

输出：

```
(0,) 1
(1,) 2
(2,) 3
```

### 12.2.2 二维数组枚举

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

for idx, x in np.ndenumerate(arr):
  print(idx, x)
```

输出：

```
(0, 0) 1
(0, 1) 2
(0, 2) 3
(1, 0) 4
(1, 1) 5
(1, 2) 6
```

## 12.3 总结

NumPy 提供了 `nditer` 和 `ndenumerate` 对象，使得迭代数组变得非常方便。`nditer` 允许我们以不同的顺序和数据类型迭代数组，并且可以修改数组元素。`ndenumerate` 则可以同时获取数组元素的索引和值。掌握这些迭代方法，可以更高效地处理 NumPy 数组。
