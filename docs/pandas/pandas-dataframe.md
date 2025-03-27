---
title: Pandas DataFrame
---

# 3. Pandas DataFrame

## 3.1 什么是 DataFrame？

DataFrame 是 Pandas 库中最核心的数据结构之一，它是一个**二维的表格型数据**，可以看作是由多个 Series 组成的字典，这些 Series 共享相同的索引。

简单来说，DataFrame 就像 Excel 表格或者 SQL 数据库中的表一样，拥有行和列，每一列可以是不同的数据类型（数值、字符串、布尔值等）。

**DataFrame 的特点：**

*   **二维结构**：拥有行和列，可以方便地进行数据分析和处理。
*   **表格型数据**：可以存储各种类型的数据，并进行灵活的操作。
*   **大小可变**：可以根据需要增加或删除行和列。
*   **带有标签的轴**：行和列都有标签，方便数据的选取和操作。

## 3.2 如何创建 DataFrame？

Pandas 提供了多种创建 DataFrame 的方式，下面介绍几种常用的方法：

### 3.2.1 从字典创建

这是最常用的创建 DataFrame 的方法之一。字典的键会成为列名，字典的值会成为列的数据。

```python
import pandas as pd

data = {
    '姓名': ['张三', '李四', '王五'],
    '年龄': [20, 22, 21],
    '城市': ['北京', '上海', '广州']
}

df = pd.DataFrame(data)
print(df)
```

**输出：**

```
   姓名  年龄  城市
0  张三  20  北京
1  李四  22  上海
2  王五  21  广州
```

### 3.2.2 从列表创建

可以从嵌套的列表创建 DataFrame，每一行列表代表 DataFrame 的一行数据。

```python
import pandas as pd

data = [
    ['张三', 20, '北京'],
    ['李四', 22, '上海'],
    ['王五', 21, '广州']
]

df = pd.DataFrame(data, columns=['姓名', '年龄', '城市'])  # 指定列名
print(df)
```

**输出：**

```
   姓名  年龄  城市
0  张三  20  北京
1  李四  22  上海
2  王五  21  广州
```

### 3.2.3 从 Series 创建

可以将多个 Series 对象组合成一个 DataFrame。

```python
import pandas as pd

name = pd.Series(['张三', '李四', '王五'])
age = pd.Series([20, 22, 21])
city = pd.Series(['北京', '上海', '广州'])

df = pd.DataFrame({'姓名': name, '年龄': age, '城市': city})
print(df)
```

**输出：**

```
   姓名  年龄  城市
0  张三  20  北京
1  李四  22  上海
2  王五  21  广州
```

### 3.2.4 从 CSV 文件创建

这是在实际应用中最常用的方法。Pandas 提供了 `read_csv()` 函数，可以方便地从 CSV 文件中读取数据并创建 DataFrame。

```python
import pandas as pd

# 假设你有一个名为 data.csv 的文件，内容如下：
# 姓名,年龄,城市
# 张三,20,北京
# 李四,22,上海
# 王五,21,广州

df = pd.read_csv('data.csv')
print(df)
```

**输出：**

```
   姓名  年龄  城市
0  张三  20  北京
1  李四  22  上海
2  王五  21  广州
```

## 3.3 DataFrame 的基本操作

### 3.3.1 选择列

可以使用列名来选择 DataFrame 中的一列或多列。

```python
import pandas as pd

data = {
    '姓名': ['张三', '李四', '王五'],
    '年龄': [20, 22, 21],
    '城市': ['北京', '上海', '广州']
}

df = pd.DataFrame(data)

# 选择单列
names = df['姓名']
print(names)

# 选择多列
subset = df[['姓名', '城市']]
print(subset)
```

**输出：**

```
0    张三
1    李四
2    王五
Name: 姓名, dtype: object

   姓名  城市
0  张三  北京
1  李四  上海
2  王五  广州
```

### 3.3.2 选择行

可以使用 `loc` 和 `iloc` 属性来选择 DataFrame 中的行。

*   `loc`：通过行标签选择行。
*   `iloc`：通过行索引选择行。

```python
import pandas as pd

data = {
    '姓名': ['张三', '李四', '王五'],
    '年龄': [20, 22, 21],
    '城市': ['北京', '上海', '广州']
}

df = pd.DataFrame(data, index=['a', 'b', 'c'])  # 指定行标签

# 使用 loc 选择行
row_a = df.loc['a']
print(row_a)

# 使用 iloc 选择行
row_0 = df.iloc[0]
print(row_0)
```

**输出：**

```
姓名    张三
年龄    20
城市    北京
Name: a, dtype: object

姓名    张三
年龄    20
城市    北京
Name: a, dtype: object
```

### 3.3.3 增加列

可以直接通过赋值的方式向 DataFrame 中增加新的列。

```python
import pandas as pd

data = {
    '姓名': ['张三', '李四', '王五'],
    '年龄': [20, 22, 21],
    '城市': ['北京', '上海', '广州']
}

df = pd.DataFrame(data)

# 增加新列
df['性别'] = ['男', '女', '男']
print(df)
```

**输出：**

```
   姓名  年龄  城市 性别
0  张三  20  北京  男
1  李四  22  上海  女
2  王五  21  广州  男
```

### 3.3.4 删除列

可以使用 `drop()` 方法删除 DataFrame 中的列。

```python
import pandas as pd

data = {
    '姓名': ['张三', '李四', '王五'],
    '年龄': [20, 22, 21],
    '城市': ['北京', '上海', '广州']
}

df = pd.DataFrame(data)

# 删除列
df = df.drop('城市', axis=1)  # axis=1 表示删除列
print(df)
```

**输出：**

```
   姓名  年龄
0  张三  20
1  李四  22
2  王五  21
```

### 3.3.5 修改列

可以通过赋值的方式修改 DataFrame 中的列。

```python
import pandas as pd

data = {
    '姓名': ['张三', '李四', '王五'],
    '年龄': [20, 22, 21],
    '城市': ['北京', '上海', '广州']
}

df = pd.DataFrame(data)

# 修改列
df['年龄'] = [21, 23, 22]
print(df)
```

**输出：**

```
   姓名  年龄  城市
0  张三  21  北京
1  李四  23  上海
2  王五  22  广州
```

## 3.4 DataFrame 的常用属性和方法

*   `shape`：返回 DataFrame 的形状（行数, 列数）。
*   `index`：返回 DataFrame 的行标签。
*   `columns`：返回 DataFrame 的列标签。
*   `dtypes`：返回 DataFrame 每列的数据类型。
*   `head(n)`：返回 DataFrame 的前 n 行，默认为 5 行。
*   `tail(n)`：返回 DataFrame 的后 n 行，默认为 5 行。
*   `info()`：返回 DataFrame 的信息，包括列名、数据类型、非空值数量等。
*   `describe()`：返回 DataFrame 的描述性统计信息，包括均值、标准差、最小值、最大值等。

**示例：**

```python
import pandas as pd

data = {
    '姓名': ['张三', '李四', '王五'],
    '年龄': [20, 22, 21],
    '城市': ['北京', '上海', '广州']
}

df = pd.DataFrame(data)

print('Shape:', df.shape)
print('Index:', df.index)
print('Columns:', df.columns)
print('Data Types:', df.dtypes)
print('Head:\n', df.head())
print('Tail:\n', df.tail())
print('Info:\n', df.info())
print('Describe:\n', df.describe())
```

## 3.5 DataFrame 的简单应用示例

假设你有一个包含学生信息的 DataFrame，你可以使用 Pandas 方便地进行数据分析。

```python
import pandas as pd

data = {
    '姓名': ['张三', '李四', '王五', '赵六'],
    '年龄': [20, 22, 21, 23],
    '城市': ['北京', '上海', '广州', '深圳'],
    '成绩': [85, 92, 78, 95]
}

df = pd.DataFrame(data)

# 1. 计算平均年龄
mean_age = df['年龄'].mean()
print('平均年龄:', mean_age)

# 2. 找出成绩最高的学生
best_student = df[df['成绩'] == df['成绩'].max()]
print('成绩最高的学生:\n', best_student)

# 3. 统计各个城市学生的数量
city_counts = df['城市'].value_counts()
print('各个城市学生的数量:\n', city_counts)
```

## 3.6 总结

DataFrame 是 Pandas 中非常重要的数据结构，掌握 DataFrame 的创建、基本操作和常用属性方法，可以帮助你更高效地进行数据分析和处理。

希望这个文档能够帮助你更好地理解 Pandas DataFrame！

