---
title: NumPy 数组属性
---

# 5. NumPy 数组属性

NumPy 数组有很多有用的属性，可以帮助你了解和操作数组。 掌握这些属性对于有效地使用 NumPy 至关重要。


## 5.1 `ndarray.shape`

*   **定义：** `shape` 属性返回一个元组，表示数组的维度。元组的长度就是数组的维度数，元组中的每个元素代表相应维度的长度。
*   **作用：**  了解数组的形状对于数据处理和算法设计至关重要。
*   **示例：**

    ```python
    import numpy as np

    # 一维数组
    arr1 = np.array([1, 2, 3, 4, 5])
    print(arr1.shape)  # 输出: (5,)

    # 二维数组
    arr2 = np.array([[1, 2, 3], [4, 5, 6]])
    print(arr2.shape)  # 输出: (2, 3)  (2行3列)

    # 三维数组
    arr3 = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
    print(arr3.shape)  # 输出: (2, 2, 2) (2个2行2列的矩阵)
    ```

## 5.2 `ndarray.ndim`

*   **定义：** `ndim` 属性返回数组的维度数（轴的数量）。
*   **作用：**  快速了解数组是几维的。
*   **示例：**

    ```python
    import numpy as np

    # 一维数组
    arr1 = np.array([1, 2, 3])
    print(arr1.ndim)  # 输出: 1

    # 二维数组
    arr2 = np.array([[1, 2], [3, 4]])
    print(arr2.ndim)  # 输出: 2

    # 三维数组
    arr3 = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
    print(arr3.ndim)  # 输出: 3
    ```

## 5.3 `ndarray.size`

*   **定义：** `size` 属性返回数组中元素的总个数。
*   **作用：**  知道数组有多少个元素。
*   **示例：**

    ```python
    import numpy as np

    # 一维数组
    arr1 = np.array([1, 2, 3, 4])
    print(arr1.size)  # 输出: 4

    # 二维数组
    arr2 = np.array([[1, 2], [3, 4], [5, 6]])
    print(arr2.size)  # 输出: 6

    # 三维数组
    arr3 = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
    print(arr3.size)  # 输出: 8
    ```

## 5.4 `ndarray.dtype`

*   **定义：** `dtype` 属性返回数组中元素的类型。
*   **作用：**  了解数组存储的数据类型，这对于内存管理和数值计算非常重要。
*   **示例：**

    ```python
    import numpy as np

    # 整数类型
    arr1 = np.array([1, 2, 3])
    print(arr1.dtype)  # 输出: int64 (或 int32，取决于你的系统)

    # 浮点数类型
    arr2 = np.array([1.0, 2.5, 3.7])
    print(arr2.dtype)  # 输出: float64

    # 字符串类型
    arr3 = np.array(['apple', 'banana', 'cherry'])
    print(arr3.dtype)  # 输出: <U6 (Unicode 字符串，长度为 6)

    # 布尔类型
    arr4 = np.array([True, False, True])
    print(arr4.dtype)  # 输出: bool
    ```

## 5.5 `ndarray.itemsize`

*   **定义：** `itemsize` 属性返回数组中每个元素的字节大小。
*   **作用：**  可以用来计算数组占用的总内存大小。
*   **示例：**

    ```python
    import numpy as np

    # 整数类型
    arr1 = np.array([1, 2, 3], dtype=np.int32) # 显式指定数据类型
    print(arr1.itemsize)  # 输出: 4 (因为 int32 是 4 个字节)

    arr2 = np.array([1, 2, 3], dtype=np.int64)
    print(arr2.itemsize)  # 输出: 8 (因为 int64 是 8 个字节)

    # 浮点数类型
    arr3 = np.array([1.0, 2.0, 3.0], dtype=np.float64)
    print(arr3.itemsize)  # 输出: 8 (因为 float64 是 8 个字节)
    ```

## 5.6 `ndarray.data`

*   **定义：** `data` 属性返回包含数组实际元素的缓冲区。  通常不需要直接使用此属性。
*   **作用：**  主要用于底层操作，一般用户很少直接使用。
*   **示例：**

    ```python
    import numpy as np

    arr = np.array([1, 2, 3])
    print(arr.data)  # 输出: <memory at 0x...> (内存地址，每次运行可能不同)
    ```

## 5.7 总结

理解 NumPy 数组的属性是进行有效数据分析和科学计算的基础。 掌握 `shape`、`ndim`、`size`、`dtype` 和 `itemsize` 等属性，可以帮助你更好地了解数组的结构、大小和数据类型，从而编写更高效的代码。
