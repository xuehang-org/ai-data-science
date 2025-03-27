---
title: NumPy 数据类型
---

# 4. NumPy 数据类型

NumPy 是 Python 中用于科学计算的核心库。它提供了一个强大的 N 维数组对象 `ndarray`，该对象可以存储**相同类型**的数据。理解 NumPy 的数据类型对于有效地使用 NumPy 至关重要。

## 4.1 为什么需要了解数据类型？

*   **内存优化**：选择合适的数据类型可以减少内存占用，尤其是在处理大型数据集时。
*   **性能提升**： NumPy 可以针对特定数据类型进行优化，从而提高计算速度。
*   **数据精度**：不同的数据类型提供不同的精度，选择合适的类型可以避免数据溢出或精度损失。

## 4.2 NumPy 中常见的数据类型

NumPy 提供了比 Python 内置类型更丰富的数值类型。以下是一些常用的 NumPy 数据类型：

| 数据类型         | 描述                                                | 别名            |
|:-------------|:--------------------------------------------------|:--------------|
| `int_`       | 默认整数类型 (通常为 `int64` 或 `int32`)                    | `np.int`      |
| `intc`       | 与 C `int` 类型相同 (通常为 `int32` 或 `int64`)            |               |
| `intp`       | 用于索引的整数 (通常为 `int64` 或 `int32`)                   |               |
| `int8`       | 字节大小的整数，范围为 -128 到 127                            |               |
| `int16`      | 整数，范围为 -32768 到 32767                             |               |
| `int32`      | 整数，范围为 -2147483648 到 2147483647                   |               |
| `int64`      | 整数，范围为 -9223372036854775808 到 9223372036854775807 |               |
| `uint8`      | 无符号整数，范围为 0 到 255                                 |               |
| `uint16`     | 无符号整数，范围为 0 到 65535                               |               |
| `uint32`     | 无符号整数，范围为 0 到 4294967295                          |               |
| `uint64`     | 无符号整数，范围为 0 到 18446744073709551615                |               |
| `float_`     | 浮点数 (通常为 `float64`)                               | `np.float`    |
| `float16`    | 半精度浮点数                                            |               |
| `float32`    | 单精度浮点数                                            |               |
| `float64`    | 双精度浮点数                                            |               |
| `complex_`   | 复数 (由两个浮点数表示)                                     | `np.complex`  |
| `complex64`  | 由两个 32 位浮点数表示的复数                                  |               |
| `complex128` | 由两个 64 位浮点数表示的复数                                  |               |
| `bool_`      | 布尔值 (`True` 或 `False`)                            | `np.bool`     |
| `object_`    | Python 对象                                         | `np.object`   |
| `string_`    | 固定长度字符串                                           | `np.string_`  |
| `unicode_`   | Unicode 字符串                                       | `np.unicode_` |

**说明:**

*   `int_` 和 `uint_` 后面的数字表示位数，例如 `int8` 表示 8 位整数。
*   无符号整数 (`uint`) 只能表示非负数。
*   浮点数类型 (`float`) 的数字越大，精度越高，但占用的内存也越多。
*   复数类型 (`complex`) 由实部和虚部组成，都用浮点数表示。
*  `string_`类型在NumPy 1.20版本后，推荐使用`np.char`模块来进行字符串操作。

## 4.3 如何指定数据类型

创建 NumPy 数组时，可以使用 `dtype` 参数来指定数据类型。

**示例 1：创建整数数组**

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5], dtype='int32')
print(arr)
print(arr.dtype)
```

**输出:**

```
[1 2 3 4 5]
int32
```

**示例 2：创建浮点数数组**

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5], dtype='float64')
print(arr)
print(arr.dtype)
```

**输出:**

```
[1. 2. 3. 4. 5.]
float64
```

**示例 3：创建布尔数组**

```python
import numpy as np

arr = np.array([0, 1, 0, 1, 0], dtype='bool')
print(arr)
print(arr.dtype)
```

**输出:**

```
[False  True False  True False]
bool
```

**示例 4：创建复数数组**

```python
import numpy as np

arr = np.array([1 + 2j, 3 + 4j], dtype='complex128')
print(arr)
print(arr.dtype)
```

**输出:**

```
[1.+2.j 3.+4.j]
complex128
```

## 如何更改数据类型

可以使用 `astype()` 方法来更改 NumPy 数组的数据类型。

**示例 1：将整数数组转换为浮点数数组**

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
float_arr = arr.astype('float64')
print(float_arr)
print(float_arr.dtype)
```

**输出:**

```
[1. 2. 3. 4. 5.]
float64
```

**示例 2：将浮点数数组转换为整数数组**

```python
import numpy as np

arr = np.array([1.2, 2.5, 3.7, 4.1, 5.9])
int_arr = arr.astype('int32')  # 注意：会截断小数部分
print(int_arr)
print(int_arr.dtype)
```

**输出:**

```
[1 2 3 4 5]
int32
```

**注意:**

*   将浮点数转换为整数时，小数部分会被直接截断，而不是四舍五入。
*   更改数据类型可能会导致数据丢失或精度降低，请谨慎操作。

## 查看数据类型信息

你可以使用 `dtype` 属性来查看数组的数据类型。

**示例：**

```python
import numpy as np

arr = np.array([1, 2, 3])
print(arr.dtype)  # 输出：int64 (或者 int32，取决于你的系统)
```

## 4.4 总结

NumPy 的数据类型是其强大功能的关键组成部分。通过选择合适的数据类型，可以优化内存使用、提高计算性能，并确保数据的精度。 记住，`dtype` 参数用于指定数据类型，`astype()` 方法用于更改数据类型。

希望这个教程能够帮助你理解 NumPy 的数据类型。多做练习，你就能熟练掌握它们！
