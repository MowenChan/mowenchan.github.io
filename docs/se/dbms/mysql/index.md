---
sidebar_position: -1
---

# MySQL
## Data Types
### Numeric
|type				          |store      |M               |D    |p
|:--                  |:--        |:--             |:--  |:-- 
|TINYINT(*__M__*)     |1 byte     |display width   |x    |x
|SMALLINT(*__M__*)    |2 bytes    |display width   |x    |x
|MEDIUMINT(*__M__*)   |3 bytes    |display width   |x    |x
|INT(INTEGER)(*__M__*)|4 bytes    |display width   |x    |x
|BIGINT(*__M__*)      |8 bytes    |display width   |x    |x
|BIT(*__M__*)         |1-64 bit   |number of bits  |x    |x                      
|FLOAT(*__p__*)       |4 bytes    |number of digits|x    |precision in bits\[0,53\]
|DECIMAL(*__M,D__*)   |0-56 digits|number of digits|scale|x
|FLOAT(*__M,D__*)     |4 bytes    |number of digits|scale|x
|DOUBLE(*__M,D__*)    |8 bytes    |number of digits|scale|x
### String
|type				          |M             |storage    |length
|:--                  |:--           |:--  |:-- 
|CHAR(*__M__*)        |0-255 bytes   |
|VARCHAR(*__M__*)     |0-45535 bytes |
|BINARY(*__M__*)      |0-255 bytes   |
|VARBINARY(*__M__*)   |0-45535 bytes |
|TINYBLOB,TINYTEXT    |$2^{8}$ bytes |
|BLOB,TEXT            |$2^{16}$ bytes|
|MEDIUMBLOB,MEDIUMTEXT|$2^{24}$ bytes|
|LONGBLOB,LONGTEXT    |$2^{32}$ bytes|
|ENUM                 |              |
|SET                  |              |
### Date&Time
|type			|syntax                           |range
|:--      |:--                              |:--
|DATE     |YYYY-MM-DD                       |1000-01-01~9999-12-31
|TIME     |hh:mm:ss\[.fraction\]            |00:00:00.000000-23:59:59.999999
|DATETIME |YYYY-MM-DD hh:mm:ss\[.fractiion\]|...
|TIMESTAMP|YYYY-MM-DD hh:mm:ss\[.fractiion\]|...
|YEAR     |YYYY                             |...
:::caution
MySQL converts TIMESTAMP values from the current time zone to UTC for storage, and back from UTC to the current time zone for retrieval.
:::
### Geometry
### Json
## Storage Engine
