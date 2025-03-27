---
title: Pandas CSV
---


# 4. Pandas CSV

CSV（Comma Separated Values，逗号分隔值）是一种常用的数据存储格式，它以纯文本形式存储表格数据。Pandas 提供了强大的 CSV 文件读写功能，让我们可以轻松地将数据导入 DataFrame 或将 DataFrame 保存为 CSV 文件。

## 4.1  读取 CSV 文件

### 4.1.1 `read_csv()` 函数

Pandas 中使用 `read_csv()` 函数来读取 CSV 文件。

**基本语法：**

```python
pd.read_csv(filepath_or_buffer, sep=',', delimiter=None, header='infer', names=None,  ...)
```

*   `filepath_or_buffer`:  CSV 文件路径或文件型对象。
*   `sep`:  分隔符，默认为逗号 `,`。
*   `delimiter`:  分隔符的别名，与 `sep`  功能相同。
*   `header`:  指定哪一行作为列名。默认为 `'infer'`，自动推断。可以指定行号（例如 `0` 表示第一行）或 `None` 表示没有列名。
*   `names`:  自定义列名。如果 `header=None`，则必须指定 `names`。

**示例：**

假设我们有一个名为 `data.csv` 的文件，内容如下：

```csv
姓名,年龄,城市
张三,25,北京
李四,30,上海
王五,28,深圳
```

**示例 1：默认读取**

```python
import pandas as pd

df = pd.read_csv('data.csv')
print(df)
```

**输出：**

```
  姓名  年龄  城市
0  张三  25  北京
1  李四  30  上海
2  王五  28  深圳
```

**示例 2：指定分隔符**

如果 CSV 文件使用分号 `;` 作为分隔符，我们可以这样指定：

```python
df = pd.read_csv('data.csv', sep=';')
```

**示例 3：没有列名**

如果 CSV 文件没有列名，我们需要设置 `header=None`，并可以可选地指定 `names`：

假设 `data.csv` 内容如下：

```csv
张三,25,北京
李四,30,上海
王五,28,深圳
```

```python
df = pd.read_csv('data.csv', header=None, names=['姓名', '年龄', '城市'])
print(df)
```

**输出：**

```
  姓名  年龄  城市
0  张三  25  北京
1  李四  30  上海
2  王五  28  深圳
```

**示例 4：指定索引列**

可以使用 `index_col` 参数指定哪一列作为索引列：

```python
df = pd.read_csv('data.csv', index_col='姓名')
print(df)
```

**输出：**

```
    年龄  城市
姓名        
张三  25  北京
李四  30  上海
王五  28  深圳
```

**示例 5：读取指定行数**

使用 `nrows` 参数读取前 n 行：

```python
df = pd.read_csv('data.csv', nrows=2)
print(df)
```

**输出：**

```
  姓名  年龄  城市
0  张三  25  北京
1  李四  30  上海
```

### 4.1.2 处理缺失值

CSV 文件中可能存在缺失值，Pandas 提供了处理缺失值的参数。

*   `na_values`: 指定哪些值被识别为缺失值。
*   `keep_default_na`: 是否保留默认的缺失值标识符（如 'NaN', 'NA', '' 等）。
*   `na_filter`: 是否检测缺失值。如果数据中确定不包含缺失值，设置为 `False` 可以提高性能。

**示例：**

假设 `data.csv` 文件内容如下：

```csv
姓名,年龄,城市
张三,25,北京
李四,,上海
王五,28,
```

```python
import numpy as np

df = pd.read_csv('data.csv', na_values=['', 'NA']) # 将空字符串和 'NA' 识别为缺失值
print(df)

print(df.isna()) #显示哪些值是缺失值
```

**输出：**

```
  姓名    年龄    城市
0  张三  25.0    北京
1  李四   NaN    上海
2  王五  28.0   NaN
     姓名     年龄     城市
0  False  False  False
1  False   True  False
2  False  False   True
```

## 4.2 写入 CSV 文件

### 4.2.1 `to_csv()` 函数

Pandas 中使用 `to_csv()` 函数将 DataFrame 写入 CSV 文件。

**基本语法：**

```python
df.to_csv(path_or_buf=None, sep=',', na_rep='', float_format=None, columns=None, header=True, index=True, index_label=None, ...)
```

*   `path_or_buf`:  CSV 文件路径或文件型对象。如果为 `None`，则返回字符串。
*   `sep`:  分隔符，默认为逗号 `,`。
*   `na_rep`:  缺失值表示，默认为空字符串 `''`。
*   `float_format`:  浮点数格式化字符串。
*   `columns`:  指定要写入的列。
*   `header`:  是否写入列名，默认为 `True`。
*   `index`:  是否写入索引，默认为 `True`。
*   `index_label`:  索引列的列名。

**示例：**

```python
import pandas as pd

data = {'姓名': ['张三', '李四', '王五'],
        '年龄': [25, 30, 28],
        '城市': ['北京', '上海', '深圳']}
df = pd.DataFrame(data)

df.to_csv('output.csv', index=False)  # 不写入索引
```

这将在当前目录下创建一个名为 `output.csv` 的文件，内容如下：

```csv
姓名,年龄,城市
张三,25,北京
李四,30,上海
王五,28,深圳
```

**示例 2：指定分隔符和缺失值表示**

```python
import numpy as np

data = {'姓名': ['张三', '李四', '王五'],
        '年龄': [25, np.nan, 28],
        '城市': ['北京', '上海', '深圳']}
df = pd.DataFrame(data)

df.to_csv('output.csv', sep=';', na_rep='NULL', index=False)
```

`output.csv` 内容：

```csv
姓名;年龄;城市
张三;25.0;北京
李四;NULL;上海
王五;28.0;深圳
```

**示例 3：只写入指定列**

```python
df.to_csv('output.csv', columns=['姓名', '城市'], index=False)
```

`output.csv` 内容：

```csv
姓名,城市
张三,北京
李四,上海
王五,深圳
```

## 4.3 编码问题

处理 CSV 文件时，常见的编码问题是中文乱码。通常可以通过指定 `encoding` 参数来解决。

**示例：**

```python
df = pd.read_csv('data.csv', encoding='utf-8')  # 尝试 utf-8 编码
# 或者
df = pd.read_csv('data.csv', encoding='gbk')  # 尝试 gbk 编码

df.to_csv('output.csv', encoding='utf-8')
```

通常 `utf-8` 和 `gbk` 是比较常用的中文编码。

## 4.4 总结

Pandas 提供了灵活且强大的 CSV 文件读写功能。通过 `read_csv()` 和 `to_csv()` 函数，我们可以轻松地处理各种 CSV 文件，并进行数据分析和处理。 掌握这些基本操作，可以极大地提高数据处理效率。
