# http
## TCP Signiture
|Sig|desc|trans|
|:-:|:-:|:-|
|SYN|synchronous|建立联机|
|ACK|acknowledgement|确认|
|PSH|push|传送|
|FIN|finish|结束|
|RST|reset|重置|
|URG|urgent|紧急|
## shake hands
```
X=${random};Y=${random};Z=${random}

[C]                    [S]
 |                      |
 |-----SYN=1,SEQ=X----->|
 |<-SYN=1,ACK=X+1,SEQ=Y-|
 |----ACK=Y+1,SEQ=Z---->|
 |                      |
```
## wave hands
```
X=${random};Y=${random};Z=${random}

[C]                    [S]
 |<======transfer======>|
 |-----FIN=1,SEQ=X----->|
 |<-ACK=1,SEQ=Y,ack=X+1-|
 |<======transfer=======|
 |<-FIN=1,ACK=1,SEQ=Z,ack=X+1-|
 |----ACK=Y+1,SEQ=Z---->|
 |                      |
```