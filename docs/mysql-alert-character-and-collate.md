---
icon: edit
date: 2023-05-22 22:12:17
category:
  - mysql
tag:
  - mysql
  - character
  - collate
---

# mysql 修改字符集和排序规则

mysql5.7 字符集utf8mb4的默认排序规则为utf8mb4_general_ci
mysql8 字符集utf8mb4的默认排序规则为utf8mb4_0900_ai_ci

## mysql5.7升级为mysql8后更改字符集和排序规则方式有以下几种

1. 只修改库字符集和排序规则
```
ALTER DATABASE database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
```

2. 只更改表字符集和排序规则
```
ALTER TABLE table_name CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
```

3. 只更改字段字符集和排序规则
```
ALTER TABLE table_name CHANGE COLUMN column_name varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '字段备注';

```

4. 同时更改表和改表下所有字段字符集和排序规则

```
ALTER TABLE table_name CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

```