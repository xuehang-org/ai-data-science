---
title: Pandas 数据清洗
---


# 7. Pandas 数据清洗

数据清洗是数据分析中至关重要的一步。真实世界的数据往往包含各种各样的问题，例如：

*   **缺失值：** 某些数据项没有值。
*   **重复值：** 存在完全相同或非常相似的记录。
*   **异常值：** 数据明显偏离正常范围。
*   **格式错误：** 数据类型不一致或格式不规范。
*   **不一致性：** 数据集内部存在冲突或矛盾。

Pandas 提供了强大的工具来处理这些问题，让你的数据更加干净、准确，为后续的分析打下坚实的基础。

## 7.1 处理缺失值

### 7.1.1 识别缺失值

Pandas 使用 `NaN`（Not a Number）来表示缺失值。

*   `isna()` / `isnull()`:  检测缺失值，返回布尔型 DataFrame，`True` 表示缺失。
*   `notna()` / `notnull()`:  与 `isna()` 相反，检测非缺失值。

```python
import pandas as pd
import numpy as np

# 创建一个包含缺失值的 DataFrame
data = {'姓名': ['Alice', 'Bob', 'Charlie', 'David', 'Eva'],
        '年龄': [25, 30, np.nan, 28, 32],
        '城市': ['北京', np.nan, '上海', '深圳', '广州'],
        '收入': [60000, 80000, 70000, np.nan, 90000]}
df = pd.DataFrame(data)
print("原始 DataFrame:\n", df)

# 使用 isna() 检测缺失值
print("\n缺失值检测 (isna()):\n", df.isna())

# 使用 notna() 检测非缺失值
print("\n非缺失值检测 (notna()):\n", df.notna())
```

### 7.1.2 处理缺失值的方法

*   **删除缺失值：**
    *   `dropna()`:  删除包含缺失值的行或列。

    ```python
    # 删除包含缺失值的行
    df_dropna_row = df.dropna()
    print("\n删除包含缺失值的行:\n", df_dropna_row)

    # 删除包含缺失值的列
    df_dropna_col = df.dropna(axis=1)
    print("\n删除包含缺失值的列:\n", df_dropna_col)

    # 设置删除缺失值的阈值（至少需要多少个非缺失值）
    df_dropna_thresh = df.dropna(thresh=3) # 每行至少要有3个非缺失值
    print("\n设置阈值删除缺失值:\n", df_dropna_thresh)
    ```

*   **填充缺失值：**
    *   `fillna()`:  用指定的值或方法填充缺失值。

    ```python
    # 用常数填充缺失值
    df_fillna_0 = df.fillna(0)
    print("\n用 0 填充缺失值:\n", df_fillna_0)

    # 用平均值填充缺失值
    age_mean = df['年龄'].mean()
    df_fillna_mean = df['年龄'].fillna(age_mean)
    print("\n用平均值填充年龄缺失值:\n", df_fillna_mean)

    # 用众数填充缺失值
    city_mode = df['城市'].mode()[0]  # mode() 返回一个 Series，取第一个值
    df_fillna_mode = df['城市'].fillna(city_mode)
    print("\n用众数填充城市缺失值:\n", df_fillna_mode)

    # 使用 ffill（前向填充）
    df_fillna_ffill = df.fillna(method='ffill')
    print("\n使用前向填充:\n", df_fillna_ffill)

    # 使用 bfill（后向填充）
    df_fillna_bfill = df.fillna(method='bfill')
    print("\n使用后向填充:\n", df_fillna_bfill)
    ```

## 7.2 处理重复值

### 7.2.1 识别重复值

*   `duplicated()`:  检测重复行，返回布尔型 Series，`True` 表示重复。

```python
# 创建一个包含重复值的 DataFrame
data = {'姓名': ['Alice', 'Bob', 'Charlie', 'Alice', 'Bob'],
        '年龄': [25, 30, 28, 25, 30],
        '城市': ['北京', '上海', '深圳', '北京', '上海']}
df = pd.DataFrame(data)
print("原始 DataFrame:\n", df)

# 检测重复行
print("\n重复行检测 (duplicated()):\n", df.duplicated())

# 检测特定列的重复值
print("\n'姓名'列的重复值检测:\n", df.duplicated(subset=['姓名']))
```

### 7.2.2 删除重复值

*   `drop_duplicates()`:  删除重复行。

```python
# 删除重复行
df_drop_duplicates = df.drop_duplicates()
print("\n删除重复行:\n", df_drop_duplicates)

# 保留第一个出现的重复值
df_drop_duplicates_first = df.drop_duplicates(keep='first')
print("\n保留第一个重复值:\n", df_drop_duplicates_first)

# 保留最后一个出现的重复值
df_drop_duplicates_last = df.drop_duplicates(keep='last')
print("\n保留最后一个重复值:\n", df_drop_duplicates_last)

# 删除所有重复值
df_drop_duplicates_false = df.drop_duplicates(keep=False)
print("\n删除所有重复值:\n", df_drop_duplicates_false)

# 基于特定列删除重复项
df_drop_duplicates_subset = df.drop_duplicates(subset=['姓名'])
print("\n基于'姓名'列删除重复项:\n", df_drop_duplicates_subset)
```

## 7.3 处理异常值

异常值是指明显偏离数据集中其他值的观测值。处理异常值的方法取决于具体情况和分析目标。

### 7.3.1 识别异常值

*   **可视化方法：**  箱线图、散点图等可以帮助你直观地发现异常值。
*   **统计方法：**  例如，计算数据的均值、标准差，然后将超出一定范围（如 3 个标准差）的值视为异常值。
*   **四分位距 (IQR)：**  计算 IQR，然后将小于 Q1 - 1.5 * IQR 或大于 Q3 + 1.5 * IQR 的值视为异常值。

```python
import matplotlib.pyplot as plt

# 创建一个包含异常值的 DataFrame
data = {'数值': [10, 12, 15, 11, 13, 100]}
df = pd.DataFrame(data)

# 箱线图
plt.figure(figsize=(6, 4))
plt.boxplot(df['数值'], vert=False)  # vert=False 水平显示
plt.title('箱线图')
plt.show()

# 使用 IQR 方法识别异常值
Q1 = df['数值'].quantile(0.25)
Q3 = df['数值'].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers = df[(df['数值'] < lower_bound) | (df['数值'] > upper_bound)]
print("\n使用 IQR 方法识别的异常值:\n", outliers)
```

### 7.3.2 处理异常值的方法

*   **删除异常值：**  如果异常值是错误数据，可以直接删除。
*   **替换异常值：**  可以用平均值、中位数等替换异常值。
*   **转换数据：**  例如，使用对数转换来减小异常值的影响。
*   **保留异常值：**  在某些情况下，异常值可能包含有价值的信息，需要仔细分析。

```python
# 删除异常值
df_no_outliers = df[~((df['数值'] < lower_bound) | (df['数值'] > upper_bound))]
print("\n删除异常值后的 DataFrame:\n", df_no_outliers)

# 用中位数替换异常值
median = df['数值'].median()
df['数值'] = np.where((df['数值'] < lower_bound) | (df['数值'] > upper_bound), median, df['数值'])
print("\n用中位数替换异常值后的 DataFrame:\n", df)
```

## 7.4 格式化数据

数据格式化是指将数据转换为一致且易于分析的格式。

### 7.4.1 数据类型转换

*   `astype()`:  更改 Series 的数据类型。

```python
# 创建一个 DataFrame
data = {'年龄': ['25', '30', '28'],
        '收入': ['60000', '80000', '70000']}
df = pd.DataFrame(data)
print("原始 DataFrame:\n", df.dtypes)

# 转换数据类型
df['年龄'] = df['年龄'].astype(int)
df['收入'] = df['收入'].astype(float)
print("\n转换数据类型后的 DataFrame:\n", df.dtypes)
```

### 7.4.2 字符串处理

Pandas 提供了许多字符串处理方法，可以用于清洗和转换文本数据。

```python
data = {'姓名': ['Alice', '  Bob  ', 'Charlie']}
df = pd.DataFrame(data)

# 去除字符串两端的空格
df['姓名'] = df['姓名'].str.strip()
print("\n去除空格后的 DataFrame:\n", df)

# 转换为大写
df['姓名'] = df['姓名'].str.upper()
print("\n转换为大写后的 DataFrame:\n", df)

# 替换字符串
df['姓名'] = df['姓名'].str.replace('ALI', 'XXX')
print("\n替换字符串后的 DataFrame:\n", df)
```

## 7.5 数据一致性

数据一致性是指确保数据集内部的数据逻辑上是一致的。

### 7.5.1 检查数据范围

确保数据值在合理的范围内。例如，年龄不应该为负数。

```python
data = {'年龄': [25, -1, 30, 120]}
df = pd.DataFrame(data)

# 检查年龄是否在合理范围内
df = df[(df['年龄'] >= 0) & (df['年龄'] <= 100)]
print("\n检查数据范围后的 DataFrame:\n", df)
```

### 7.5.2 统一数据表示

确保相同含义的数据使用相同的表示方式。例如，将所有性别数据统一为 "男" 和 "女"。

```python
data = {'性别': ['男', '女', 'Male', 'Female']}
df = pd.DataFrame(data)

# 统一数据表示
df['性别'] = df['性别'].replace({'Male': '男', 'Female': '女'})
print("\n统一数据表示后的 DataFrame:\n", df)
```

## 7.6 总结

希望这个教程对你有所帮助！数据清洗是一个迭代的过程，需要根据具体情况选择合适的方法。多练习，你会越来越熟练的！
