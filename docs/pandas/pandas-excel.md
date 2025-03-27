---
title: Pandas Excel
---


# 5. Pandas Excel

Pandas 提供了强大的 Excel 文件读写功能，可以轻松地将 Excel 数据导入到 DataFrame 中，或者将 DataFrame 数据导出到 Excel 文件中。

## 5.1 文件的读取

使用 `pd.read_excel()` 函数可以读取 Excel 文件。

**基本用法：**

```python
import pandas as pd

df = pd.read_excel('your_file.xlsx')  # 读取当前目录下的 Excel 文件
print(df)
```

**参数说明：**

*   `io`: 文件路径或文件对象。
*   `sheet_name`:  指定要读取的 Sheet 页，可以是 Sheet 页的名称（字符串），也可以是索引（整数），默认为 0，即第一个 Sheet 页。 还可以是Sheet页名称的列表或索引的列表，甚至可以是`None`，代表读取所有Sheet页，返回`OrderedDict`。
*   `header`:  指定哪一行作为列名，默认为 0，即第一行。  可以为`None`，表示不使用header。
*   `names`:  自定义列名，如果 Excel 文件中没有列名，或者你想使用自己的列名，可以使用这个参数。
*   `index_col`:  指定哪一列作为索引列，可以是列名（字符串），也可以是列的索引（整数）。
*   `usecols`:  指定要读取的列，可以是列名（字符串）列表，也可以是列的索引（整数）列表。
*   `dtype`:  指定列的数据类型，可以是一个字典，key 为列名，value 为数据类型。
*   `converters`:  指定列的转换函数，可以是一个字典，key 为列名，value 为转换函数。
*   `skiprows`:  跳过指定的行，可以是行索引（整数）列表，也可以是整数，表示跳过前 n 行。
*   `nrows`:  指定读取的行数。
*   `na_values`:  指定哪些值被认为是缺失值（NaN）。

**示例：**

假设我们有一个名为 `data.xlsx` 的 Excel 文件，内容如下：

|   | Name    | Age | City     |
|---|---------|-----|----------|
| 0 | Alice   | 25  | Beijing  |
| 1 | Bob     | 30  | Shanghai |
| 2 | Charlie | 28  | Shenzhen |

```python
import pandas as pd

# 读取 Excel 文件
df = pd.read_excel('data.xlsx')
print(df)
```

输出：

```
      Name  Age      City
0    Alice   25   Beijing
1      Bob   30  Shanghai
2  Charlie   28  Shenzhen
```

## 5.2 文件的写入

使用 `df.to_excel()` 函数可以将 DataFrame 写入到 Excel 文件。

**基本用法：**

```python
import pandas as pd

data = {'Name': ['Alice', 'Bob', 'Charlie'],
        'Age': [25, 30, 28],
        'City': ['Beijing', 'Shanghai', 'Shenzhen']}
df = pd.DataFrame(data)

df.to_excel('output.xlsx', index=False)  # 将 DataFrame 写入到 Excel 文件，不包含索引
```

**参数说明：**

*   `excel_writer`:  文件路径或 ExcelWriter 对象。
*   `sheet_name`:  指定 Sheet 页的名称，默认为 'Sheet1'。
*   `na_rep`:  指定缺失值的表示方式，默认为空字符串。
*   `float_format`:  指定浮点数的格式。
*   `columns`:  指定要写入的列，可以是列名（字符串）列表。
*   `header`:  是否写入列名，默认为 True。  可以为`False`，表示不写入header。
*   `index`:  是否写入索引，默认为 True。 可以为`False`，表示不写入索引。
*   `index_label`:  指定索引列的列名。
*   `startrow`:  指定起始行，从 0 开始计数。
*   `startcol`:  指定起始列，从 0 开始计数。

**示例：**

```python
import pandas as pd

data = {'Name': ['Alice', 'Bob', 'Charlie'],
        'Age': [25, 30, 28],
        'City': ['Beijing', 'Shanghai', 'Shenzhen']}
df = pd.DataFrame(data)

# 写入 Excel 文件
df.to_excel('output.xlsx', sheet_name='People', index=False)
```

## 5.3 指定 Sheet 页读取

当 Excel 文件包含多个 Sheet 页时，可以使用 `sheet_name` 参数指定要读取的 Sheet 页。

**示例：**

假设 `data.xlsx` 文件包含两个 Sheet 页，分别为 `Sheet1` 和 `Sheet2`。

```python
import pandas as pd

# 读取 Sheet1
df1 = pd.read_excel('data.xlsx', sheet_name='Sheet1')
print("Sheet1:\n", df1)

# 读取 Sheet2
df2 = pd.read_excel('data.xlsx', sheet_name='Sheet2')
print("\nSheet2:\n", df2)

# 读取所有Sheet页
all_sheets = pd.read_excel('data.xlsx', sheet_name=None)
print("\nAll Sheets:\n", all_sheets.keys()) # 输出所有sheet页的名称
print("\nSheet1:\n", all_sheets['Sheet1']) # 通过sheet页名称访问
```

## 5.4 常用参数

*   **`header`**:  指定哪一行作为列名。
*   **`names`**:  自定义列名。
*   **`index_col`**:  指定哪一列作为索引列。
*   **`usecols`**:  指定要读取的列。
*   **`dtype`**:  指定列的数据类型。
*   **`skiprows`**:  跳过指定的行。
*   **`nrows`**:  指定读取的行数。
*   **`index`**:  是否写入索引。

**示例：**

```python
import pandas as pd

# 使用 header 参数
df = pd.read_excel('data.xlsx', header=1)  # 将第二行作为列名
print("header=1:\n", df)

# 使用 names 参数
df = pd.read_excel('data.xlsx', names=['A', 'B', 'C'])  # 自定义列名
print("\nnames=['A', 'B', 'C']:\n", df)

# 使用 index_col 参数
df = pd.read_excel('data.xlsx', index_col='Name')  # 将 Name 列作为索引列
print("\nindex_col='Name':\n", df)

# 使用 usecols 参数
df = pd.read_excel('data.xlsx', usecols=['Name', 'Age'])  # 只读取 Name 和 Age 列
print("\nusecols=['Name', 'Age']:\n", df)

# 使用 dtype 参数
df = pd.read_excel('data.xlsx', dtype={'Age': float})  # 将 Age 列的数据类型指定为 float
print("\ndtype={'Age': float}:\n", df.dtypes)

# 使用 skiprows 参数
df = pd.read_excel('data.xlsx', skiprows=[0, 2])  # 跳过第一行和第三行
print("\nskiprows=[0, 2]:\n", df)

# 使用 nrows 参数
df = pd.read_excel('data.xlsx', nrows=2)  # 只读取前两行
print("\nnrows=2:\n", df)

# 使用 index 参数
data = {'Name': ['Alice', 'Bob', 'Charlie'],
        'Age': [25, 30, 28],
        'City': ['Beijing', 'Shanghai', 'Shenzhen']}
df = pd.DataFrame(data)

df.to_excel('output.xlsx', index=False)  # 不写入索引
```
## 5.5 总结

希望这份文档对你有所帮助！ 掌握 Pandas 的 Excel 文件操作，能够方便地进行数据导入导出，提高工作效率。
