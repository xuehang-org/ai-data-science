---
title: NumPy 数学函数
---

# 14. NumPy 数学函数

NumPy 提供了大量的数学函数，可以对数组中的元素执行各种数学运算。这些函数通常都是 **element-wise** 的，也就是说，它们会对数组中的每个元素分别进行计算，并返回一个包含计算结果的新数组。

## 14.1 算术运算

NumPy 提供了标准的算术运算符的替代函数，这些函数可以处理数组的 element-wise 运算。

| 运算符  | 等价的 NumPy 函数        | 描述                   |
|------|---------------------|----------------------|
| `+`  | `np.add()`          | 加法 (element-wise)    |
| `-`  | `np.subtract()`     | 减法 (element-wise)    |
| `*`  | `np.multiply()`     | 乘法 (element-wise)    |
| `/`  | `np.divide()`       | 除法 (element-wise)    |
| `//` | `np.floor_divide()` | 整除 (element-wise)    |
| `%`  | `np.mod()`          | 取模/求余 (element-wise) |
| `**` | `np.power()`        | 幂运算 (element-wise)   |

**示例：**

```python
import numpy as np

a = np.array([10, 20, 30])
b = np.array([3, 5, 7])

# 加法
print(np.add(a, b))  # 输出: [13 25 37]
print(a + b)         # 输出: [13 25 37]

# 减法
print(np.subtract(a, b)) # 输出: [ 7 15 23]
print(a - b)            # 输出: [ 7 15 23]

# 乘法
print(np.multiply(a, b)) # 输出: [ 30 100 210]
print(a * b)            # 输出: [ 30 100 210]

# 除法
print(np.divide(a, b))   # 输出: [3.33333333 4.         4.28571429]
print(a / b)              # 输出: [3.33333333 4.         4.28571429]

# 整除
print(np.floor_divide(a, b)) # 输出: [3 4 4]
print(a // b)               # 输出: [3 4 4]

# 取模
print(np.mod(a, b))      # 输出: [1 0 2]
print(a % b)             # 输出: [1 0 2]

# 幂运算
print(np.power(a, b))  # 输出: [ 1000    32000  21870000]
print(a ** b)         # 输出: [ 1000    32000  21870000]
```

## 14.2 三角函数

NumPy 提供了常用的三角函数，例如 `sin`、`cos`、`tan` 等。

*   `np.sin(x)`：计算 x 的正弦值。
*   `np.cos(x)`：计算 x 的余弦值。
*   `np.tan(x)`：计算 x 的正切值。
*   `np.arcsin(x)`：计算 x 的反正弦值。
*   `np.arccos(x)`：计算 x 的反余弦值。
*   `np.arctan(x)`：计算 x 的反正切值。

**示例：**

```python
import numpy as np

angles = np.array([0, np.pi/2, np.pi])  # 角度，用弧度表示

print(np.sin(angles))   # 输出: [0.0000000e+00 1.0000000e+00 1.2246468e-16] (由于浮点数精度问题，π 的正弦值不完全为 0)
print(np.cos(angles))   # 输出: [ 1.000000e+00  6.123234e-17 -1.000000e+00]
print(np.tan(angles))   # 输出: [ 0.00000000e+00  1.63312394e+16 -1.22464680e-16]

values = np.array([-1, 0, 1])

print(np.arcsin(values)) # 输出: [-1.57079633  0.          1.57079633] (反正弦，结果是弧度)
print(np.arccos(values)) # 输出: [3.14159265 1.57079633 0.        ] (反余弦，结果是弧度)
print(np.arctan(values)) # 输出: [-0.78539816  0.          0.78539816] (反正切，结果是弧度)
```

## 14.3 指数和对数函数

NumPy 提供了指数和对数函数。

*   `np.exp(x)`：计算 x 的指数值 (e<sup>x</sup>)。
*   `np.log(x)`：计算 x 的自然对数 (ln(x))。
*   `np.log10(x)`：计算 x 的以 10 为底的对数 (log<sub>10</sub>(x))。
*   `np.log2(x)`：计算 x 的以 2 为底的对数 (log<sub>2</sub>(x))。

**示例：**

```python
import numpy as np

x = np.array([1, 2, 3])

print(np.exp(x))   # 输出: [ 2.71828183  7.3890561  20.08553692]
print(np.log(x))   # 输出: [0.         0.69314718 1.09861229]
print(np.log10(x)) # 输出: [0.         0.30103    0.47712125]
print(np.log2(x))  # 输出: [0.         1.         1.5849625 ]
```

## 14.4 其他常用函数

*   `np.sqrt(x)`：计算 x 的平方根。
*   `np.abs(x)` 或 `np.absolute(x)`：计算 x 的绝对值。
*   `np.power(x, y)`：计算 x 的 y 次方。
*   `np.round(x)`：将 x 四舍五入到最接近的整数。
*   `np.floor(x)`：向下取整，返回不大于 x 的最大整数。
*   `np.ceil(x)`：向上取整，返回不小于 x 的最小整数。
*   `np.sign(x)`: 返回x的符号。

**示例：**

```python
import numpy as np

x = np.array([1, 4, 9])
y = np.array([-1.5, 2.6, -3.4])

print(np.sqrt(x))        # 输出: [1. 2. 3.]
print(np.abs(y))         # 输出: [1.5 2.6 3.4]
print(np.power(x, 2))    # 输出: [ 1 16 81]
print(np.round(y))       # 输出: [-2.  3. -3.]
print(np.floor(y))       # 输出: [-2.  2. -4.]
print(np.ceil(y))        # 输出: [-1.  3. -3.]
print(np.sign(y))        # 输出: [-1.  1. -1.]
```

## 14.5 总结

NumPy 提供的数学函数非常丰富，可以满足各种科学计算的需求。 掌握这些函数，能让你更高效地进行数据处理和分析。  记得多多练习，才能更好地理解和运用它们！

