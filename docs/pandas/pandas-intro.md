---
title: Pandas 简介
---


# 1. Pandas 简介

## 1.2 什么是 Pandas？

Pandas 是 Python Data Analysis Library 的简称，是一个强大的数据分析和处理工具。可以把它想象成一个超级 Excel，但比 Excel 更加灵活和高效。

简单来说，Pandas 能够帮助你：

*   **整理数据**：把各种各样的数据整理成表格（DataFrame）的形式，方便查看和处理。
*   **清洗数据**：处理缺失值、重复值等脏数据，让数据更干净。
*   **分析数据**：进行各种统计分析、数据透视等操作，挖掘数据背后的信息。
*   **处理时间序列数据**：轻松处理日期和时间相关的数据。

## 1.3 为什么要学习 Pandas？

*   **数据分析必备**：如果你想从事数据分析、机器学习等相关工作，Pandas 是必备技能。
*   **提高效率**：Pandas 提供了很多方便的函数，可以大大提高数据处理的效率。
*   **应用广泛**：Pandas 可以应用于各种领域，如金融、电商、医疗等。

## 1.4 Pandas 的核心数据结构

Pandas 有两种核心的数据结构：

*   **Series（序列）**：类似于一维数组，每个元素都有一个标签（索引）。
*   **DataFrame（数据框）**：类似于 Excel 表格，由多个 Series 组成，有行和列的标签（索引）。

### 1.4.1 Series

Series 就像 Excel 表格中的一列。

**示例：创建一个 Series**

```python
import pandas as pd

# 从列表创建 Series
data = [10, 20, 30, 40, 50]
s = pd.Series(data)
print(s)
```

**输出：**

```
0    10
1    20
2    30
3    40
4    50
dtype: int64
```

可以看到，Series 自动为每个元素创建了从 0 开始的索引。

**示例：自定义索引**

```python
import pandas as pd

# 创建 Series 时指定索引
data = [10, 20, 30, 40, 50]
index = ['a', 'b', 'c', 'd', 'e']
s = pd.Series(data, index=index)
print(s)
```

**输出：**

```
a    10
b    20
c    30
d    40
e    50
dtype: int64
```

现在，每个元素都有了我们自定义的索引。

### 1.4.2 DataFrame

DataFrame 就像 Excel 表格，是最常用的数据结构。

**示例：创建一个 DataFrame**

```python
import pandas as pd

# 从字典创建 DataFrame
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

可以看到，DataFrame 自动为每行创建了从 0 开始的索引，列名就是字典的键。

**示例：从列表创建 DataFrame**

```python
import pandas as pd

# 从列表创建 DataFrame
data = [['张三', 20, '北京'], ['李四', 22, '上海'], ['王五', 21, '广州']]
df = pd.DataFrame(data, columns=['姓名', '年龄', '城市'])
print(df)
```

**输出：**

```
   姓名  年龄  城市
0  张三  20  北京
1  李四  22  上海
2  王五  21  广州
```

在这个例子中，我们使用 `columns` 参数指定了列名。

## 1.5 如何安装 Pandas？

如果你还没有安装 Pandas，可以使用 pip 命令安装：

```bash
pip install pandas
```

## 1.6 总结

Pandas 是一个强大的数据分析工具，Series 和 DataFrame 是其核心数据结构。掌握 Pandas 可以让你更高效地处理和分析数据。

在接下来的学习中，我们将深入了解 Pandas 的各种功能和用法。
