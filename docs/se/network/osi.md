# Open System Interconnect(OSI)
## layer
- Application Layer
- Presentation Layer
- Session Layer
- Transport Layer
- Network Layer
- Data Link Layer
  - Logical Link Control
  - medium access control
- Physical Layer
## view
```
+------------------+------------------+
|       OSI        |      TCP/IP      |
+------------------+------------------+
|Application Layer |                  |
+------------------+                  |
|Presentation Layer|Application Layer |
+------------------+                  |
|Session Layer     |                  | ^
+------------------+-------------------Socket (socket is virtual layer/interface)
|Transport Layer   |Transport Layer   | v
+------------------+------------------+
|Network Layer     |Network Layer     |
+------------------+------------------+
|Data Link Layer   |Data Link Layer   |
+------------------+------------------+
|Physical Layer    |Physical Layer    |
+------------------+------------------+
```