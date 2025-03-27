---
title: Pandas 数据排序与聚合
---


# 9. Pandas 数据排序与聚合

在数据分析中，排序和聚合是非常常见的操作。Pandas 提供了强大的功能来帮助我们完成这些任务。

## 9.1 数据排序

### 9.1.1 `sort_values()` 函数

`sort_values()` 函数用于对 DataFrame 或 Series 中的值进行排序。

**基本语法:**

```python
DataFrame.sort_values(by, axis=0, ascending=True, inplace=False, kind='quicksort', na_position='last', ignore_index=False, key=None)
```

**常用参数:**

*   `by`:  指定要排序的列名（可以是单个列名或列名列表）。
*   `axis`:  指定排序的轴，0 表示按行排序（默认），1 表示按列排序。
*   `ascending`:  指定排序顺序，`True` 表示升序（默认），`False` 表示降序。
*   `inplace`:  是否修改原始 DataFrame，`True` 表示修改，`False` 表示返回新的 DataFrame（默认）。
*   `na_position`: 指定缺失值的排序位置，`'first'`表示放在开头，`'last'`表示放在末尾（默认）。

**示例:**

```python
import pandas as pd

# 创建一个 DataFrame
data = {'姓名': ['Alice', 'Bob', 'Charlie', 'David', 'Eva'],
        '年龄': [25, 30, 22, 28, 24],
        '城市': ['北京', '上海', '广州', '深圳', '杭州'],
        '成绩': [85, 92, 78, 88, 95]}
df = pd.DataFrame(data)
print("原始数据：\n", df)

# 按年龄升序排序
df_sorted_age = df.sort_values(by='年龄')
print("\n按年龄升序排序：\n", df_sorted_age)

# 按成绩降序排序
df_sorted_score = df.sort_values(by='成绩', ascending=False)
print("\n按成绩降序排序：\n", df_sorted_score)

# 按城市和年龄排序（先按城市升序，再按年龄升序）
df_sorted_city_age = df.sort_values(by=['城市', '年龄'])
print("\n按城市和年龄排序：\n", df_sorted_city_age)

# 缺失值处理
import numpy as np
df2 = df.copy()
df2.loc[2,'年龄'] = np.nan #设置一个缺失值
print("\n包含缺失值的数据：\n", df2)

df_sorted_age_na = df2.sort_values(by='年龄', na_position='first') # 缺失值在前
print("\n年龄升序排序（缺失值在前）：\n", df_sorted_age_na)
```

**解释:**

*   第一个例子展示了如何按单列进行升序排序。
*   第二个例子展示了如何按单列进行降序排序。
*   第三个例子展示了如何按多列进行排序，注意 `by` 参数传入的是一个列表，排序的优先级按照列表中列名的顺序。
*   第四个例子展示了如何将缺失值放在最前或者最后。

### 9.1.2 `sort_index()` 函数

`sort_index()` 函数用于对 DataFrame 或 Series 的索引进行排序。

**基本语法:**

```python
DataFrame.sort_index(axis=0, ascending=True, inplace=False, na_position='last', sort_remaining=True, ignore_index=False, key=None)
```

**常用参数:**

*   `axis`:  指定排序的轴，0 表示按行索引排序（默认），1 表示按列索引排序。
*   `ascending`:  指定排序顺序，`True` 表示升序（默认），`False` 表示降序。
*   `inplace`:  是否修改原始 DataFrame，`True` 表示修改，`False` 表示返回新的 DataFrame（默认）。

**示例:**

```python
import pandas as pd

# 创建一个 DataFrame，并设置自定义索引
data = {'姓名': ['Alice', 'Bob', 'Charlie', 'David', 'Eva'],
        '年龄': [25, 30, 22, 28, 24],
        '城市': ['北京', '上海', '广州', '深圳', '杭州']}
df = pd.DataFrame(data, index=['b', 'd', 'a', 'e', 'c'])
print("原始数据：\n", df)

# 按索引升序排序
df_sorted_index = df.sort_index()
print("\n按索引升序排序：\n", df_sorted_index)

# 按索引降序排序
df_sorted_index_desc = df.sort_index(ascending=False)
print("\n按索引降序排序：\n", df_sorted_index_desc)
```

**解释:**

这个例子展示了如何按 DataFrame 的索引进行升序和降序排序。  如果axis设置为1，则会按照列索引进行排序。

## 9.2 数据聚合

数据聚合是指对数据进行分组，并对每个组应用聚合函数（如求和、平均值、计数等）。 Pandas 提供了 `groupby()` 函数来实现数据聚合。

### 9.2.1 `groupby()` 函数

`groupby()` 函数用于对 DataFrame 进行分组。

**基本语法:**

```python
DataFrame.groupby(by=None, axis=0, level=None, as_index=True, sort=True, group_keys=True, observed=False, dropna=True)
```

**常用参数:**

*   `by`:  指定分组的列名（可以是单个列名或列名列表）。
*   `axis`:  指定分组的轴，0 表示按行分组（默认），1 表示按列分组。
*   `as_index`:  是否将分组的列作为索引，`True` 表示是（默认），`False` 表示否。
*   `sort`:  是否对分组键进行排序，`True` 表示是（默认），`False` 表示否。

**示例:**

```python
import pandas as pd

# 创建一个 DataFrame
data = {'姓名': ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Alice', 'Bob'],
        '年龄': [25, 30, 22, 28, 24, 25, 30],
        '城市': ['北京', '上海', '广州', '深圳', '杭州', '北京', '上海'],
        '成绩': [85, 92, 78, 88, 95, 88, 90]}
df = pd.DataFrame(data)
print("原始数据：\n", df)

# 按城市分组，并计算每个城市的平均年龄
grouped_city = df.groupby('城市')['年龄'].mean()
print("\n按城市分组，计算平均年龄：\n", grouped_city)

# 按城市分组，并计算每个城市的最高成绩和最低成绩
grouped_city_score = df.groupby('城市')['成绩'].agg(['max', 'min'])
print("\n按城市分组，计算最高和最低成绩：\n", grouped_city_score)

# 按城市和年龄分组，并计算每个组的平均成绩
grouped_city_age = df.groupby(['城市', '年龄'])['成绩'].mean()
print("\n按城市和年龄分组，计算平均成绩：\n", grouped_city_age)
```

**解释:**

*   第一个例子展示了如何按单列进行分组，并计算每个组的平均值。
*   第二个例子展示了如何按单列进行分组，并计算多个聚合函数的结果。  `agg()` 函数可以传入一个函数列表，用于计算多个聚合结果。
*   第三个例子展示了如何按多列进行分组。

### 9.2.2 常用聚合函数

以下是一些常用的聚合函数：

*   `sum()`:  求和
*   `mean()`:  平均值
*   `median()`:  中位数
*   `min()`:  最小值
*   `max()`:  最大值
*   `count()`:  计数
*   `std()`:  标准差
*   `var()`:  方差

**示例:**

```python
import pandas as pd
import numpy as np

# 创建一个 DataFrame
data = {'城市': ['北京', '上海', '广州', '深圳', '北京', '上海'],
        '销售额': [100, 150, 80, 120, 110, 140],
        '利润': [20, 30, 10, 25, 22, 28]}
df = pd.DataFrame(data)

# 按城市分组，并计算每个城市的销售额总和和平均利润
grouped_city = df.groupby('城市').agg({'销售额': 'sum', '利润': 'mean'})
print(grouped_city)

#自定义聚合函数
grouped_city2 = df.groupby('城市').agg({'销售额': 'sum', '利润': np.mean})
print(grouped_city2)
```

**解释:**

这个例子展示了如何同时对不同的列应用不同的聚合函数。

### 9.2.3 `agg()` 函数的灵活应用

`agg()` 函数除了可以传入内置的聚合函数外，还可以传入自定义函数。

**示例:**

```python
import pandas as pd

# 创建一个 DataFrame
data = {'城市': ['北京', '上海', '广州', '深圳', '北京', '上海'],
        '销售额': [100, 150, 80, 120, 110, 140]}
df = pd.DataFrame(data)

# 定义一个自定义函数，计算销售额的范围（最大值 - 最小值）
def sales_range(x):
    return x.max() - x.min()

# 按城市分组，并计算每个城市的销售额范围
grouped_city = df.groupby('城市')['销售额'].agg(sales_range)
print(grouped_city)

# 使用 lambda 函数
grouped_city2 = df.groupby('城市')['销售额'].agg(lambda x: x.max() - x.min())
print(grouped_city2)
```

**解释:**

这个例子展示了如何使用自定义函数进行聚合计算。 `lambda` 匿名函数可以使代码更加简洁。

## 9.3总结

掌握这些技巧可以帮助你更好地分析和处理数据。 熟练使用这些函数，可以极大地提高数据处理的效率。
