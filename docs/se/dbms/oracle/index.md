---
sidebar_position: -1
---

# Oracle
[offical doc](https://docs.oracle.com/en/database/oracle/oracle-database/index.html)
## layer
<div style={{border:"1px solid black",padding:"0 5px",backgroundColor:"#999999"}}>
	database
	<div style={{border:"1px solid black",padding:"0 5px",backgroundColor:"#BBBBBB"}}>
		schema
		<div style={{border:"1px solid black",padding:"0 5px",backgroundColor:"#DDDDDD"}}>
			table
		</div>
		<div style={{border:"1px solid black",padding:"0 5px",backgroundColor:"#DDDDDD"}}>
			index
		</div>
		<div style={{border:"1px solid black",padding:"0 5px",backgroundColor:"#DDDDDD"}}>
			view
		</div>
		<div style={{border:"1px solid black",padding:"0 5px",backgroundColor:"#DDDDDD"}}>
			sequence
		</div>
		<div style={{border:"1px solid black",padding:"0 5px",backgroundColor:"#DDDDDD"}}>
			schema-level subprograms (function run by the client to access database)
			<div style={{border:"1px solid black",padding:"0 5px",backgroundColor:"#FFFFFF"}}>
				trigger (automatic run by the database)
			</div>
		</div>
		<div style={{border:"1px solid black",padding:"0 5px",backgroundColor:"#DDDDDD"}}>
			packages (group of subprograms)
		</div>
	</div>
</div>

## data type
[offical doc](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html )
### Numeric
|type				      |store          |range p |range s
|:--              |:--            |:--     |:-- 
|NUMBER(*__p,s__*)|1-22 bytes     |1-38    |-84~127	  
|FLOAT(*__p__*)   |1-22 bytes     |1-126   |x
|BINARY_FLOAT     |4bytes         |x       |x
|BINARY_DOUBLE    |8bytes         |x       |x

### String
|type				       |fixedlength|minimum p |maximum p
|:--               |:--        |:--       |:--      
|CHAR(*__p__*)     |yes        |1byte     |2000bytes
|NCHAR(*__p__*)    |yes        |1character|2000bytes
|VARCHAR2(*__p__*) |no         |1byte     |32767bytes
|NVARCHAR2(*__p__*)|no         |1byte     |32767bytes

### Long & Raw
|type		     |maximum bytes  |maximum s(EXTENDED)|maximum s(STANDARD)|format
|:--         |:--            |:--               |:--                 |:--
|LONG        |2GB            |x                 |x                   |
|RAW(*__s__*)|x              |32767             |2000                |
|LONG RAW    |2GB            |x                 |x                   |

### Date&Time
[Julian Day](https://calendars.wikia.org/wiki/Julian_day)

<div id="scope-number-line">
	<div id="timeline" style={{height:"15px",borderBottom:"1px solid black",display:"flex"}}>
		<div style={{height:"15px",width:"25%",borderLeft:"1px solid black"}}></div>
		<div style={{height:"15px",width:"25%",borderLeft:"1px solid black"}}></div>
		<div style={{height:"15px",width:"25%",borderLeft:"1px solid black"}}></div>
		<div style={{height:"15px",width:"25%",borderLeft:"1px solid black"}}></div>
		<div style={{height:"15px",width:"25%",borderLeft:"1px solid black"}}></div>
		<div style={{height:"15px",width:"25%",borderLeft:"1px solid black",borderRight:"1px solid black"}}></div>
	</div>
	<div id="label" style={{height:"15px",display:"flex",fontSize:"5px"}}>
		<div style={{height:"15px",width:"12.5%"}}>...</div>
		<div style={{height:"15px",width:"25%",textAlign:"center"}}>2BC</div>
		<div style={{height:"15px",width:"25%",textAlign:"center"}}>1BC</div>
		<div style={{height:"15px",width:"25%",textAlign:"center"}}>1AC</div>
		<div style={{height:"15px",width:"25%",textAlign:"center"}}>2AC</div>
		<div style={{height:"15px",width:"25%",textAlign:"center"}}>...</div>
		<div style={{height:"15px",width:"12.5%",textAlign:"right"}}>AD</div>
	</div>
</div>

|type			             |range                     |p
|:--                   |:--                       |:--
|DATE                  |Jan 1 4712BC~Dec 31 9999AD|x
|YEAR                  |-4712~9999                |
|MONTH                 |1~12                      |
|DAY                   |1~31                      |
|HOUR                  |00~23                     |
|MINUTE                |00~59                     |
|SECOND                |00~59.9                   |
|TIMESTAMP(*__p__*)    |                          |(fractional)0~9 default=6
|TIMESTAMP(*__p__*) WITH TIME ZONE |	
|TIMESTAMP(*__p__*) WITH LOCAL ZONE|                          |(fractional)0~9 default=6
|TIMESTAMP(*__p__*)    |                          |(fractional)0~9 default=6
|INTERVAL YEAR(*__p__*)|       |
|INTERVAL DAY(*__p__*) |       |

### LOB(Large Object)
|type |store type|minimum p |maximum p
|:--  |:--       |:--       |:--
|BLOB |both      |x         |x
|CLOB |both      |x         |x
|NCLOB|both      |x         |x
|BFILE|both      |x         |x

### ROWID