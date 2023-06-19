---
icon: edit
date: 2023-05-22 22:12:17
category:
  - mysql
tag:
  - mysql
  - lock
---

# mysql 表锁住了如何处理

查询锁表记录
```
select * from information_schema.innodb_trx
```
取trx_mysql_thead_id值
```
kill 32423525
```

重置索引
```
alter table t_stock engine=InnoDB;
SHOW INDEX FROM t_stock;
CHECK table t_stock

SHOW INDEX FROM PLAYERS;
ANALYZE TABLE PLAYERS;
SHOW INDEX FROM PLAYERS;
https://blog.csdn.net/clsq0913/article/details/106343654
```