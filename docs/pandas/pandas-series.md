---
title: Pandas Series
---

# 2. Pandas Series

Series 是 Pandas 库中最基本的数据结构之一。它类似于一维数组，但功能更强大，可以存储各种数据类型，并且每个元素都有一个与之关联的标签，称为索引（index）。

## 2.1 Series 的创建

### 2.1.1 从列表创建

```python
import pandas as pd

# 创建一个简单的 Series
data = [10, 20, 30, 40, 50]
s = pd.Series(data)
print(s)
```

输出：

```
0    10
1    20
2    30
3    40
4    50
dtype: int64
```

默认情况下，Pandas 会自动为 Series 创建一个从 0 开始的整数索引。

### 2.1.2 指定索引

```python
import pandas as pd

# 创建 Series 时指定索引
data = [10, 20, 30, 40, 50]
index = ['a', 'b', 'c', 'd', 'e']
s = pd.Series(data, index=index)
print(s)
```

输出：

```
a    10
b    20
c    30
d    40
e    50
dtype: int64
```

现在，每个元素都有了自定义的索引。

### 2.1.3 从字典创建

```python
import pandas as pd

# 从字典创建 Series
data = {'a': 10, 'b': 20, 'c': 30, 'd': 40, 'e': 50}
s = pd.Series(data)
print(s)
```

输出：

```
a    10
b    20
c    30
d    40
e    50
dtype: int64
```

字典的键会自动成为 Series 的索引。

### 2.1.4 从 NumPy 数组创建

```python
import pandas as pd
import numpy as np

# 从 NumPy 数组创建 Series
data = np.array([10, 20, 30, 40, 50])
s = pd.Series(data)
print(s)
```

输出：

```
0    10
1    20
2    30
3    40
4    50
dtype: int64
```

## 2.2 Series 的属性

### 2.2.1 index

获取 Series 的索引。

```python
import pandas as pd

data = [10, 20, 30, 40, 50]
index = ['a', 'b', 'c', 'd', 'e']
s = pd.Series(data, index=index)
print(s.index)
```

输出：

```
Index(['a', 'b', 'c', 'd', 'e'], dtype='object')
```

### 2.2.2 values

获取 Series 的值。

```python
import pandas as pd

data = [10, 20, 30, 40, 50]
index = ['a', 'b', 'c', 'd', 'e']
s = pd.Series(data, index=index)
print(s.values)
```

输出：

```
[10 20 30 40 50]
```

### 2.2.3 dtype

获取 Series 的数据类型。

```python
import pandas as pd

data = [10, 20, 30, 40, 50]
s = pd.Series(data)
print(s.dtype)

data2 = ['apple', 'banana', 'cherry']
s2 = pd.Series(data2)
print(s2.dtype)
```

输出：

```
int64
object
```

### 2.2.4 size

获取 Series 的元素个数。

```python
import pandas as pd

data = [10, 20, 30, 40, 50]
s = pd.Series(data)
print(s.size)
```

输出：

```
5
```

### 2.2.5 name

可以给 Series 设置一个名称。

```python
import pandas as pd

data = [10, 20, 30, 40, 50]
s = pd.Series(data, name='numbers')
print(s.name)
print(s)
```

输出：

```
numbers
0    10
1    20
2    30
3    40
4    50
Name: numbers, dtype: int64
```

## 2.3 Series 的访问

### 2.3.1 通过索引访问

```python
import pandas as pd

data = [10, 20, 30, 40, 50]
index = ['a', 'b', 'c', 'd', 'e']
s = pd.Series(data, index=index)

print(s['a'])  # 通过标签索引访问
print(s[0])    # 通过位置索引访问
```

输出：

```
10
10
```

### 2.3.2 切片访问

```python
import pandas as pd

data = [10, 20, 30, 40, 50]
index = ['a', 'b', 'c', 'd', 'e']
s = pd.Series(data, index=index)

print(s['a':'c'])  # 通过标签切片访问（包含结束位置）
print(s[0:3])    # 通过位置切片访问（不包含结束位置）
```

输出：

```
a    10
b    20
c    30
dtype: int64
0    10
1    20
2    30
dtype: int64
```

### 2.3.3 布尔索引

```python
import pandas as pd

data = [10, 20, 30, 40, 50]
s = pd.Series(data)

# 找到所有大于 25 的元素
print(s[s > 25])
```

输出：

```
2    30
3    40
4    50
dtype: int64
```

## 2.4. Series 的常用方法

### 2.4.1 head() 和 tail()

*   `head(n)`：返回 Series 的前 n 行，默认为前 5 行。
*   `tail(n)`：返回 Series 的后 n 行，默认为后 5 行。

```python
import pandas as pd

data = [10, 20, 30, 40, 50, 60, 70, 80]
s = pd.Series(data)

print(s.head())  # 默认前 5 行
print(s.tail(3)) # 后 3 行
```

输出：

```
0    10
1    20
2    30
3    40
4    50
dtype: int64
5    60
6    70
7    80
dtype: int64
```

### 2.4.2 value_counts()

统计 Series 中每个值出现的次数。

```python
import pandas as pd

data = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
s = pd.Series(data)

print(s.value_counts())
```

输出：

```
apple     3
banana    2
orange    1
dtype: int64
```

### 2.4.3 sort_values() 和 sort_index()

*   `sort_values()`：按值排序。
*   `sort_index()`：按索引排序。

```python
import pandas as pd

data = [30, 10, 50, 20, 40]
index = ['c', 'a', 'e', 'b', 'd']
s = pd.Series(data, index=index)

print(s.sort_values())   # 按值排序
print(s.sort_index())    # 按索引排序
```

输出：

```
a    10
b    20
c    30
d    40
e    50
dtype: int64
a    10
b    20
c    30
d    40
e    50
dtype: int64
```

### 2.4.4 apply()

将一个函数应用到 Series 的每个值。

```python
import pandas as pd

data = [1, 2, 3, 4, 5]
s = pd.Series(data)

# 定义一个函数，将每个元素平方
def square(x):
    return x * x

# 使用 apply() 函数
squared_s = s.apply(square)
print(squared_s)
```

输出：

```
0     1
1     4
2     9
3    16
4    25
dtype: int64
```

### 2.4.5 map()

使用 `map()` 方法可以将 Series 中的每个值替换为另一个值，通常基于一个字典或函数。

```python
import pandas as pd

data = ['apple', 'banana', 'cherry']
s = pd.Series(data)

# 创建一个映射字典
fruit_map = {'apple': '苹果', 'banana': '香蕉', 'cherry': '樱桃'}

# 使用 map() 函数
chinese_s = s.map(fruit_map)
print(chinese_s)
```

输出：

```
0    苹果
1    香蕉
2    樱桃
dtype: object
```

### 2.4.6 astype()

用于更改 Series 的数据类型。

```python
import pandas as pd

data = [1, 2, 3, 4, 5]
s = pd.Series(data)

# 将 Series 的数据类型更改为 float
float_s = s.astype(float)
print(float_s.dtype)
```

输出：

```
float64
```

## 2.5 缺失值处理

### 2.5.1 检测缺失值

使用 `isnull()` 和 `notnull()` 方法来检测缺失值。

```python
import pandas as pd
import numpy as np

data = [10, 20, np.nan, 40, np.nan]
s = pd.Series(data)

print(s.isnull())
print(s.notnull())
```

输出：

```
0    False
1    False
2     True
3    False
4     True
dtype: bool
0     True
1     True
2    False
3     True
4    False
dtype: bool
```

### 2.5.2 填充缺失值

使用 `fillna()` 方法来填充缺失值。

```python
import pandas as pd
import numpy as np

data = [10, 20, np.nan, 40, np.nan]
s = pd.Series(data)

# 用 0 填充缺失值
filled_s = s.fillna(0)
print(filled_s)

# 用平均值填充缺失值
mean_value = s.mean()
filled_s_mean = s.fillna(mean_value)
print(filled_s_mean)
```

输出：

```
0    10.0
1    20.0
2     0.0
3    40.0
4     0.0
dtype: float64
0    10.0
1    20.0
2    23.3
3    40.0
4    23.3
dtype: float64
```

### 2.5.3 删除缺失值

使用 `dropna()` 方法来删除包含缺失值的行。

```python
import pandas as pd
import numpy as np

data = [10, 20, np.nan, 40, np.nan]
s = pd.Series(data)

# 删除包含缺失值的行
dropped_s = s.dropna()
print(dropped_s)
```

输出：

```
0    10.0
1    20.0
3    40.0
dtype: float64
```

## 2.6 总结

Series 是 Pandas 中非常重要的数据结构，掌握 Series 的创建、访问、属性和常用方法，对于数据分析至关重要。希望本文档能够帮助你更好地理解和使用 Pandas Series。
