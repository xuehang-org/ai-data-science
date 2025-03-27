---
title: Pandas 常用函数
---

# 8. Pandas 常用函数

Pandas 提供了大量用于数据处理和分析的函数。本文档将介绍一些常用的 Pandas 函数，并提供示例帮助你理解它们。

## 8.1 数据读取与写入

### 8.1.1 `read_csv()`

从 CSV 文件读取数据到 DataFrame。

```python
import pandas as pd

# 从 CSV 文件读取数据
df = pd.read_csv('data.csv')

# 打印 DataFrame
print(df)
```

常用参数：

-   `filepath_or_buffer`: 文件路径。
-   `sep`: 分隔符，默认为`,`。
-   `header`: 指定哪一行作为列名，默认为`0`，即第一行。
-   `index_col`: 指定哪一列作为索引列。
-   `encoding`: 指定文件编码，常用`utf-8`。

示例：

```python
# 指定分隔符为分号，第一行不作为列名，指定第一列为索引列，编码为 utf-8
df = pd.read_csv('data.csv', sep=';', header=None, index_col=0, encoding='utf-8')
print(df)
```

### 8.1.2 `to_csv()`

将 DataFrame 写入 CSV 文件。

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie'],
        'age': [25, 30, 28]}
df = pd.DataFrame(data)

# 写入 CSV 文件
df.to_csv('output.csv', index=False)  # index=False 表示不写入索引列
```

常用参数：

-   `path_or_buf`: 文件路径。
-   `sep`: 分隔符，默认为`,`。
-   `header`: 是否写入列名，默认为`True`。
-   `index`: 是否写入索引列，默认为`True`。
-   `encoding`: 指定文件编码，常用`utf-8`。

### 8.1.3 `read_excel()`

从 Excel 文件读取数据到 DataFrame。

```python
import pandas as pd

# 从 Excel 文件读取数据
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')  # 可以指定 sheet 名称

# 打印 DataFrame
print(df)
```

### 8.1.4 `to_excel()`

将 DataFrame 写入 Excel 文件。

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie'],
        'age': [25, 30, 28]}
df = pd.DataFrame(data)

# 写入 Excel 文件
df.to_excel('output.xlsx', sheet_name='Sheet1', index=False)
```

## 8.2 数据查看

### 8.2.1 `head()`

查看 DataFrame 的前几行，默认为 5 行。

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
        'age': [25, 30, 28, 22, 24]}
df = pd.DataFrame(data)

# 查看前 3 行
print(df.head(3))
```

### 8.2.2 `tail()`

查看 DataFrame 的后几行，默认为 5 行。

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
        'age': [25, 30, 28, 22, 24]}
df = pd.DataFrame(data)

# 查看后 3 行
print(df.tail(3))
```

### 8.2.3 `info()`

查看 DataFrame 的基本信息，包括列名、数据类型、非空值数量等。

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
        'age': [25, 30, 28, 22, 24],
        'city': ['Beijing', 'Shanghai', 'Guangzhou', None, 'Shenzhen']}
df = pd.DataFrame(data)

# 查看 DataFrame 信息
df.info()
```

### 8.2.4 `describe()`

查看 DataFrame 的数值型列的统计信息，包括均值、标准差、最小值、最大值、分位数等。

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
        'age': [25, 30, 28, 22, 24],
        'city': ['Beijing', 'Shanghai', 'Guangzhou', None, 'Shenzhen']}
df = pd.DataFrame(data)

# 查看数值型列的统计信息
print(df.describe())
```

### 8.2.5 `shape`

查看 DataFrame 的形状，即行数和列数。

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
        'age': [25, 30, 28, 22, 24]}
df = pd.DataFrame(data)

# 查看 DataFrame 的形状
print(df.shape)  # 输出 (5, 2)，表示 5 行 2 列
```

## 8.3 数据选择

### 8.3.1 列选择

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie'],
        'age': [25, 30, 28],
        'city': ['Beijing', 'Shanghai', 'Guangzhou']}
df = pd.DataFrame(data)

# 选择单列
names = df['name']
print(names)

# 选择多列
subset = df[['name', 'age']]
print(subset)
```

### 8.3.2 行选择

#### 8.3.2.1 基于标签 `loc`

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie'],
        'age': [25, 30, 28],
        'city': ['Beijing', 'Shanghai', 'Guangzhou']}
df = pd.DataFrame(data, index=['a', 'b', 'c'])  # 指定索引

# 选择单行
row_a = df.loc['a']
print(row_a)

# 选择多行
subset = df.loc[['a', 'c']]
print(subset)

# 选择行和列的子集
subset = df.loc[['a', 'c'], ['name', 'age']]
print(subset)
```

#### 8.3.2.2 基于位置 `iloc`

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie'],
        'age': [25, 30, 28],
        'city': ['Beijing', 'Shanghai', 'Guangzhou']}
df = pd.DataFrame(data)

# 选择单行
row_0 = df.iloc[0]
print(row_0)

# 选择多行
subset = df.iloc[[0, 2]]
print(subset)

# 选择行和列的子集
subset = df.iloc[[0, 2], [0, 1]]
print(subset)
```

#### 8.3.2.3 条件选择

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
        'age': [25, 30, 28, 22, 24],
        'city': ['Beijing', 'Shanghai', 'Guangzhou', 'Shanghai', 'Shenzhen']}
df = pd.DataFrame(data)

# 选择年龄大于 25 的行
older = df[df['age'] > 25]
print(older)

# 选择城市为 Shanghai 的行
shanghai = df[df['city'] == 'Shanghai']
print(shanghai)

# 多条件选择
condition = (df['age'] > 25) & (df['city'] == 'Shanghai')
result = df[condition]
print(result)
```

## 8.4 数据处理

### 8.4.1 缺失值处理

#### 8.4.1.1 `isna()` / `isnull()`

检查 DataFrame 中的缺失值，返回布尔型 DataFrame。

```python
import pandas as pd
import numpy as np

# 创建包含缺失值的 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
        'age': [25, 30, np.nan, 22, 24],
        'city': ['Beijing', 'Shanghai', 'Guangzhou', None, 'Shenzhen']}
df = pd.DataFrame(data)

# 检查缺失值
print(df.isna())  # 或 df.isnull()
```

#### 8.4.1.2 `dropna()`

删除包含缺失值的行或列。

```python
import pandas as pd
import numpy as np

# 创建包含缺失值的 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
        'age': [25, 30, np.nan, 22, 24],
        'city': ['Beijing', 'Shanghai', 'Guangzhou', None, 'Shenzhen']}
df = pd.DataFrame(data)

# 删除包含缺失值的行
df_dropna_row = df.dropna()
print(df_dropna_row)

# 删除包含缺失值的列
df_dropna_col = df.dropna(axis=1)
print(df_dropna_col)

# 设置删除缺失值的阈值
df_dropna_thresh = df.dropna(thresh=2)  #  保留至少有两个非缺失值的行
print(df_dropna_thresh)
```

#### 8.4.1.3 `fillna()`

用指定值填充缺失值。

```python
import pandas as pd
import numpy as np

# 创建包含缺失值的 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
        'age': [25, 30, np.nan, 22, 24],
        'city': ['Beijing', 'Shanghai', 'Guangzhou', None, 'Shenzhen']}
df = pd.DataFrame(data)

# 用 0 填充缺失值
df_fillna_0 = df.fillna(0)
print(df_fillna_0)

# 用均值填充缺失值
df_fillna_mean = df['age'].fillna(df['age'].mean())
print(df_fillna_mean)

# 用前一个值填充
df_fillna_ffill = df.fillna(method='ffill')
print(df_fillna_ffill)
```

### 8.4.2 数据转换

#### 8.4.2.1 `astype()`

转换列的数据类型。

```python
import pandas as pd

# 创建 DataFrame
data = {'age': ['25', '30', '28'],
        'score': ['85.5', '92.0', '88.5']}
df = pd.DataFrame(data)

# 转换 age 列为 int 类型
df['age'] = df['age'].astype(int)

# 转换 score 列为 float 类型
df['score'] = df['score'].astype(float)

df.info()
```

#### 8.4.2.2 `apply()`

对 DataFrame 的行或列应用函数。

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie'],
        'age': [25, 30, 28]}
df = pd.DataFrame(data)

# 定义一个函数，将年龄加 1
def add_one(age):
    return age + 1

# 对 age 列应用函数
df['age'] = df['age'].apply(add_one)
print(df)

# 使用 lambda 函数
df['age'] = df['age'].apply(lambda x: x * 2)
print(df)
```

#### 8.4.2.3 `map()`

用于 Series 对象，将 Series 中的每个值替换为另一个值。

```python
import pandas as pd

# 创建 DataFrame
data = {'city': ['Beijing', 'Shanghai', 'Guangzhou']}
df = pd.DataFrame(data)

# 创建一个映射关系
city_map = {'Beijing': 'BJ', 'Shanghai': 'SH', 'Guangzhou': 'GZ'}

# 使用 map 函数进行替换
df['city_code'] = df['city'].map(city_map)
print(df)
```

### 8.4.3 数据排序

#### 8.4.3.1 `sort_values()`

按指定列的值对 DataFrame 进行排序。

```python
import pandas as pd

# 创建 DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
        'age': [25, 30, 28, 22, 24]}
df = pd.DataFrame(data)

# 按年龄升序排序
df_sorted_age = df.sort_values(by='age')
print(df_sorted_age)

# 按年龄降序排序
df_sorted_age_desc = df.sort_values(by='age', ascending=False)
print(df_sorted_age_desc)

# 按多列排序
df_sorted_multi = df.sort_values(by=['age', 'name'])
print(df_sorted_multi)
```

### 8.4.4 数据分组与聚合

#### 8.4.4.1 `groupby()`

按指定列对 DataFrame 进行分组。

```python
import pandas as pd

# 创建 DataFrame
data = {'city': ['Beijing', 'Shanghai', 'Beijing', 'Shanghai', 'Beijing'],
        'age': [25, 30, 28, 22, 24],
        'salary': [8000, 10000, 9000, 7000, 8500]}
df = pd.DataFrame(data)

# 按城市分组
grouped = df.groupby('city')

# 计算每个城市的平均年龄
mean_age = grouped['age'].mean()
print(mean_age)

# 计算每个城市的平均工资
mean_salary = grouped['salary'].mean()
print(mean_salary)

# 一次性计算多个聚合函数
agg_result = grouped.agg({'age': 'mean', 'salary': 'sum'})
print(agg_result)
```

## 8.5 数据合并

### 8.5.1 `concat()`

沿指定轴将多个 DataFrame 连接起来。

```python
import pandas as pd

# 创建两个 DataFrame
data1 = {'name': ['Alice', 'Bob'],
         'age': [25, 30]}
df1 = pd.DataFrame(data1)

data2 = {'name': ['Charlie', 'David'],
         'age': [28, 22]}
df2 = pd.DataFrame(data2)

# 沿行方向连接
df_concat_row = pd.concat([df1, df2])
print(df_concat_row)

# 沿列方向连接
df_concat_col = pd.concat([df1, df2], axis=1)
print(df_concat_col)
```

### 8.5.2 `merge()`

基于指定列将两个 DataFrame 合并起来，类似于 SQL 的 JOIN 操作。

```python
import pandas as pd

# 创建两个 DataFrame
data1 = {'id': [1, 2, 3],
         'name': ['Alice', 'Bob', 'Charlie']}
df1 = pd.DataFrame(data1)

data2 = {'id': [1, 2, 4],
         'city': ['Beijing', 'Shanghai', 'Guangzhou']}
df2 = pd.DataFrame(data2)

# 基于 id 列进行合并
df_merged = pd.merge(df1, df2, on='id', how='inner')  # inner join
print(df_merged)

# 左连接
df_merged_left = pd.merge(df1, df2, on='id', how='left')
print(df_merged_left)

# 右连接
df_merged_right = pd.merge(df1, df2, on='id', how='right')
print(df_merged_right)

# 外连接
df_merged_outer = pd.merge(df1, df2, on='id', how='outer')
print(df_merged_outer)
```

## 8.6 其他常用函数

### 8.6.1 `unique()`

返回 Series 中的唯一值。

```python
import pandas as pd

# 创建 Series
data = pd.Series(['A', 'B', 'A', 'C', 'B'])

# 获取唯一值
unique_values = data.unique()
print(unique_values)
```

### 8.6.2 `value_counts()`

统计 Series 中每个值出现的次数。

```python
import pandas as pd

# 创建 Series
data = pd.Series(['A', 'B', 'A', 'C', 'B'])

# 统计每个值出现的次数
value_counts = data.value_counts()
print(value_counts)
```

### 8.6.3 `isin()`

检查 Series 中的值是否在给定的列表中。

```python
import pandas as pd

# 创建 Series
data = pd.Series(['A', 'B', 'C', 'D'])

# 检查是否在列表中
is_in_list = data.isin(['A', 'B'])
print(is_in_list)

# 选择在列表中的行
subset = data[data.isin(['A', 'B'])]
print(subset)
```

## 8.7 总结

本文档介绍了一些常用的 Pandas 函数，包括数据读取与写入、数据查看、数据选择、数据处理和数据合并等。希望这些示例能够帮助你更好地理解和使用 Pandas。

