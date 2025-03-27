---
title: NumPy 数组操作
---


# 13. NumPy 数组操作

NumPy 提供了强大的数组操作功能，可以帮助你高效地处理数据。 咱们主要学习以下几个方面的操作：

-   **数组形状操作**：改变数组的维度和形状。
-   **数组元素操作**：修改、访问数组中的元素。
-   **数组合并与分割**：将多个数组组合在一起或将一个数组拆分成多个子数组。

## 13.1 数组形状操作

### 13.1.1 修改数组形状

NumPy 提供了 `reshape()` 函数来修改数组的形状，但要注意，新形状的总元素数量必须与原数组一致。

**示例：**

```python
import numpy as np

arr = np.arange(12)  # 创建一个包含 12 个元素的数组
print("原始数组：", arr)

# 修改为 3x4 的二维数组
arr_reshaped = arr.reshape(3, 4)
print("修改后的数组 (3x4)：\n", arr_reshaped)

# 修改为 2x2x3 的三维数组
arr_reshaped_3d = arr.reshape(2, 2, 3)
print("修改后的数组 (2x2x3)：\n", arr_reshaped_3d)
```

**注意：** `reshape()` 创建的是原数组的视图，而不是复制。这意味着修改新数组会影响原数组，反之亦然。如果想创建一个独立的副本，可以使用 `copy()` 方法。

### 13.1.2 展平数组

有时我们需要将多维数组转换为一维数组，可以使用 `flatten()` 或 `ravel()` 函数。

*   `flatten()` 返回一份**拷贝**，修改拷贝不会影响原数组。
*   `ravel()` 返回一个**视图**，修改视图会影响原数组。

**示例：**

```python
import numpy as np

arr = np.array([[1, 2], [3, 4]])
print("原始数组：\n", arr)

# 使用 flatten()
arr_flattened = arr.flatten()
print("flatten() 后的数组：", arr_flattened)

# 使用 ravel()
arr_raveled = arr.ravel()
print("ravel() 后的数组：", arr_raveled)

# 修改 ravel() 后的数组
arr_raveled[0] = 100
print("修改后的 ravel() 数组：", arr_raveled)
print("原始数组（已受影响）：\n", arr)

# 修改 flatten() 后的数组
arr_flattened[1] = 200
print("修改后的 flatten() 数组：", arr_flattened)
print("原始数组（未受影响）：\n", arr)
```

### 13.1.3 数组转置

转置是指将数组的行和列互换，可以使用 `transpose()` 函数或 `.T` 属性。

**示例：**

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
print("原始数组：\n", arr)

# 使用 transpose()
arr_transposed = arr.transpose()
print("转置后的数组 (transpose)：\n", arr_transposed)

# 使用 .T 属性
arr_transposed_t = arr.T
print("转置后的数组 (.T)：\n", arr_transposed_t)
```

## 13.2 数组元素操作

### 13.2.1 访问元素

NumPy 数组使用索引来访问元素，与 Python 列表类似，索引从 0 开始。

**示例：**

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print("数组：", arr)

# 访问第一个元素
print("第一个元素：", arr[0])

# 访问最后一个元素
print("最后一个元素：", arr[-1])

# 对于多维数组
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
print("二维数组：\n", arr_2d)

# 访问第二行第三列的元素
print("第二行第三列的元素：", arr_2d[1, 2])
```

### 13.2.2 切片

切片允许你提取数组的一部分。

**示例：**

```python
import numpy as np

arr = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
print("数组：", arr)

# 提取前 5 个元素
print("前 5 个元素：", arr[:5])

# 提取索引 2 到 7 的元素
print("索引 2 到 7 的元素：", arr[2:8])

# 提取从索引 5 开始到结尾的元素
print("从索引 5 开始到结尾的元素：", arr[5:])

# 提取所有元素，步长为 2
print("所有元素，步长为 2：", arr[::2])

# 对于多维数组
arr_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("二维数组：\n", arr_2d)

# 提取前两行和前两列
print("前两行和前两列：\n", arr_2d[:2, :2])

# 提取第二列的所有元素
print("第二列的所有元素：", arr_2d[:, 1])
```

### 13.2.3 修改元素

可以通过索引或切片来修改数组中的元素。

**示例：**

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print("原始数组：", arr)

# 修改第一个元素
arr[0] = 100
print("修改后的数组：", arr)

# 修改切片
arr[1:4] = [200, 300, 400]
print("修改后的数组：", arr)

# 对于多维数组
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
print("原始二维数组：\n", arr_2d)

# 修改指定元素
arr_2d[0, 1] = 20
print("修改后的二维数组：\n", arr_2d)

# 修改一行
arr_2d[1] = [40, 50, 60]
print("修改后的二维数组：\n", arr_2d)
```

## 13.3 数组合并与分割

### 13.3.1 数组合并

NumPy 提供了 `concatenate()`, `stack()`, `hstack()`, `vstack()` 等函数来合并数组。

*   `concatenate()`: 沿着指定的轴连接数组序列。
*   `stack()`: 沿着新的轴连接数组序列。
*   `hstack()`: 水平堆叠数组（列方向）。
*   `vstack()`: 垂直堆叠数组（行方向）。

**示例：**

```python
import numpy as np

arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

# 使用 concatenate()
arr_concatenated = np.concatenate((arr1, arr2))
print("concatenate() 合并后的数组：", arr_concatenated)

# 对于二维数组
arr1_2d = np.array([[1, 2], [3, 4]])
arr2_2d = np.array([[5, 6], [7, 8]])

# 使用 vstack() 垂直堆叠
arr_vstacked = np.vstack((arr1_2d, arr2_2d))
print("vstack() 垂直堆叠后的数组：\n", arr_vstacked)

# 使用 hstack() 水平堆叠
arr_hstacked = np.hstack((arr1_2d, arr2_2d))
print("hstack() 水平堆叠后的数组：\n", arr_hstacked)

# 使用 stack()
arr_stacked = np.stack((arr1_2d, arr2_2d), axis=0)
print("stack() 合并后的数组 (axis=0):\n", arr_stacked)

arr_stacked = np.stack((arr1_2d, arr2_2d), axis=1)
print("stack() 合并后的数组 (axis=1):\n", arr_stacked)
```

### 13.3.2 数组分割

NumPy 提供了 `split()`, `hsplit()`, `vsplit()` 等函数来分割数组。

*   `split()`: 将一个数组分割成多个子数组。
*   `hsplit()`: 将数组水平分割（列方向）。
*   `vsplit()`: 将数组垂直分割（行方向）。

**示例：**

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6])

# 使用 split()
arr_split = np.split(arr, 3)  # 分割成 3 个子数组
print("split() 分割后的数组：", arr_split)

# 对于二维数组
arr_2d = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])

# 使用 vsplit() 垂直分割
arr_vsplit = np.vsplit(arr_2d, 3)  # 分割成 3 个子数组
print("vsplit() 垂直分割后的数组：\n", arr_vsplit)

# 使用 hsplit() 水平分割
arr_hsplit = np.hsplit(arr_2d, 2)  # 分割成 2 个子数组
print("hsplit() 水平分割后的数组：\n", arr_hsplit)
```

## 13.4 总结

NumPy 数组操作非常灵活，可以满足各种数据处理需求。 掌握这些操作，能让你更高效地使用 NumPy 处理数据。 多练习，多尝试，你一定能熟练掌握！
