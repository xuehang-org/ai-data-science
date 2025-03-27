---
title: Pandas JSON
---


# 6. Pandas JSON

JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式，易于人阅读和编写，同时也易于机器解析和生成。Pandas 提供了方便的工具来读取和写入 JSON 数据，以及处理半结构化的 JSON 数据。

## 6.1 JSON 数据读取

Pandas 可以使用 `read_json()` 函数从 JSON 文件或 JSON 字符串中读取数据，并将其转换为 DataFrame 对象。

### 6.1.1 从 JSON 文件读取数据

假设我们有一个名为 `data.json` 的文件，内容如下：

```json
[
    {"name": "Alice", "age": 25, "city": "New York"},
    {"name": "Bob", "age": 30, "city": "Los Angeles"},
    {"name": "Charlie", "age": 28, "city": "Chicago"}
]
```

可以使用以下代码读取该 JSON 文件：

```python
import pandas as pd

df = pd.read_json('data.json')
print(df)
```

输出结果：

```
      name  age         city
0    Alice   25     New York
1      Bob   30  Los Angeles
2  Charlie   28      Chicago
```

### 6.1.2 从 JSON 字符串读取数据

也可以直接从 JSON 字符串中读取数据：

```python
import pandas as pd

json_string = '[{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}]'
df = pd.read_json(json_string)
print(df)
```

输出结果：

```
    name  age
0  Alice   25
1    Bob   30
```

### 6.1.3 `read_json()` 常用参数

*   `path_or_buf`: JSON 文件路径或 JSON 字符串。
*   `orient`: 指定 JSON 数据的结构，常见的取值有：
    *   `'columns'` (默认): JSON 对象的键作为列名，值作为列的数据。
    *   `'index'`: JSON 对象的键作为索引，值作为行的数据。
    *   `'values'`: JSON 数据是值的数组。
    *   `'split'`: JSON 数据包含 `index`、`columns` 和 `data` 字段。
    *   `'records'`: JSON 数据是记录（行）的数组。
*   `lines`: 如果为 `True`，则将 JSON 文件中的每一行解析为一个 JSON 对象。

## 6.2 JSON 数据写入

Pandas 可以使用 `to_json()` 函数将 DataFrame 对象写入 JSON 文件或转换为 JSON 字符串。

### 6.2.1 将 DataFrame 写入 JSON 文件

```python
import pandas as pd

data = {'name': ['Alice', 'Bob', 'Charlie'],
        'age': [25, 30, 28],
        'city': ['New York', 'Los Angeles', 'Chicago']}
df = pd.DataFrame(data)

df.to_json('output.json')
```

这将在当前目录下创建一个名为 `output.json` 的文件，内容如下：

```json
{"name":{"0":"Alice","1":"Bob","2":"Charlie"},"age":{"0":25,"1":30,"2":28},"city":{"0":"New York","1":"Los Angeles","2":"Chicago"}}
```

### 6.2.2 将 DataFrame 转换为 JSON 字符串

```python
import pandas as pd

data = {'name': ['Alice', 'Bob', 'Charlie'],
        'age': [25, 30, 28],
        'city': ['New York', 'Los Angeles', 'Chicago']}
df = pd.DataFrame(data)

json_string = df.to_json()
print(json_string)
```

输出结果：

```json
{"name":{"0":"Alice","1":"Bob","2":"Charlie"},"age":{"0":25,"1":30,"2":28},"city":{"0":"New York","1":"Los Angeles","2":"Chicago"}}
```

### 6.2.3 `to_json()` 常用参数

*   `path_or_buf`: JSON 文件路径或 `None` (返回字符串)。
*   `orient`: 指定 JSON 数据的结构，与 `read_json()` 相同。
*   `indent`:  设置缩进空格数，使 JSON 文件更易读。

### 6.2.4 使用 `orient='records'` 和 `indent` 参数

```python
import pandas as pd

data = {'name': ['Alice', 'Bob', 'Charlie'],
        'age': [25, 30, 28],
        'city': ['New York', 'Los Angeles', 'Chicago']}
df = pd.DataFrame(data)

json_string = df.to_json(orient='records', indent=4)
print(json_string)
```

输出结果：

```json
[
    {
        "name": "Alice",
        "age": 25,
        "city": "New York"
    },
    {
        "name": "Bob",
        "age": 30,
        "city": "Los Angeles"
    },
    {
        "name": "Charlie",
        "age": 28,
        "city": "Chicago"
    }
]
```

## 6.3 JSON 数据结构处理

JSON 数据可能包含嵌套的结构，例如：

```json
[
    {
        "name": "Alice",
        "age": 25,
        "address": {
            "street": "123 Main St",
            "city": "New York"
        }
    },
    {
        "name": "Bob",
        "age": 30,
        "address": {
            "street": "456 Oak Ave",
            "city": "Los Angeles"
        }
    }
]
```

直接使用 `read_json()` 读取嵌套 JSON 数据时，嵌套的字段会以字典的形式存在于 DataFrame 中。

```python
import pandas as pd

json_string = """
[
    {
        "name": "Alice",
        "age": 25,
        "address": {
            "street": "123 Main St",
            "city": "New York"
        }
    },
    {
        "name": "Bob",
        "age": 30,
        "address": {
            "street": "456 Oak Ave",
            "city": "Los Angeles"
        }
    }
]
"""

df = pd.read_json(json_string)
print(df)
```

输出结果：

```
    name  age                                address
0  Alice   25  {'street': '123 Main St', 'city': 'New York'}
1    Bob   30   {'street': '456 Oak Ave', 'city': 'Los Angeles'}
```

若要访问嵌套的字段，可以使用 `apply()` 函数：

```python
import pandas as pd

json_string = """
[
    {
        "name": "Alice",
        "age": 25,
        "address": {
            "street": "123 Main St",
            "city": "New York"
        }
    },
    {
        "name": "Bob",
        "age": 30,
        "address": {
            "street": "456 Oak Ave",
            "city": "Los Angeles"
        }
    }
]
"""

df = pd.read_json(json_string)

df['street'] = df['address'].apply(lambda x: x['street'])
df['city'] = df['address'].apply(lambda x: x['city'])

print(df)
```

输出结果：

```
    name  age                                address        street         city
0  Alice   25  {'street': '123 Main St', 'city': 'New York'}  123 Main St     New York
1    Bob   30   {'street': '456 Oak Ave', 'city': 'Los Angeles'}   456 Oak Ave  Los Angeles
```

## 6.4 `json_normalize` 处理半结构化数据

当 JSON 数据包含嵌套的列表或字典时，`json_normalize()` 函数可以将半结构化的 JSON 数据展平为表格形式。

### 6.4.1 使用 `json_normalize()` 处理嵌套数据

假设我们有以下 JSON 数据：

```json
[
    {
        "id": 1,
        "name": "Alice",
        "orders": [
            {"order_id": "A1", "amount": 100},
            {"order_id": "A2", "amount": 200}
        ]
    },
    {
        "id": 2,
        "name": "Bob",
        "orders": [
            {"order_id": "B1", "amount": 150},
            {"order_id": "B2", "amount": 250}
        ]
    }
]
```

可以使用以下代码使用 `json_normalize()` 函数处理该数据：

```python
import pandas as pd
from pandas import json_normalize

json_data = [
    {
        "id": 1,
        "name": "Alice",
        "orders": [
            {"order_id": "A1", "amount": 100},
            {"order_id": "A2", "amount": 200}
        ]
    },
    {
        "id": 2,
        "name": "Bob",
        "orders": [
            {"order_id": "B1", "amount": 150},
            {"order_id": "B2", "amount": 250}
        ]
    }
]

df = json_normalize(json_data, record_path='orders', meta=['id', 'name'])
print(df)
```

输出结果：

```
  order_id  amount  id   name
0       A1     100   1  Alice
1       A2     200   1  Alice
2       B1     150   2    Bob
3       B2     250   2    Bob
```

### 6.4.2 `json_normalize()` 常用参数

*   `data`: 要解析的 JSON 数据（列表或字典）。
*   `record_path`: 指定包含要展平的记录的路径（列表）。
*   `meta`:  指定要添加到结果中的元数据的字段（列表）。
*   `record_prefix`: 指定添加到记录字段的前缀。
*   `meta_prefix`:  指定添加到元数据字段的前缀。

### 6.4.3 使用 `record_prefix` 和 `meta_prefix` 参数

```python
import pandas as pd
from pandas import json_normalize

json_data = [
    {
        "id": 1,
        "name": "Alice",
        "orders": [
            {"order_id": "A1", "amount": 100},
            {"order_id": "A2", "amount": 200}
        ]
    },
    {
        "id": 2,
        "name": "Bob",
        "orders": [
            {"order_id": "B1", "amount": 150},
            {"order_id": "B2", "amount": 250}
        ]
    }
]

df = json_normalize(json_data, record_path='orders', meta=['id', 'name'], record_prefix='order_', meta_prefix='customer_')
print(df)
```

输出结果：

```
  order_order_id  order_amount  customer_id customer_name
0             A1           100            1         Alice
1             A2           200            1         Alice
2             B1           150            2           Bob
3             B2           250            2           Bob
```
## 6.5 总结

希望这个文档对你有所帮助！
