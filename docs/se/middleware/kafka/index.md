---
sidebar_position: -1
---

# Kafka
## Concepts and Terminology
- **Event** records the fact that "something happened" in the world or in your business. 
- **Producers** are those client applications that publish (write) events to Kafka.
- **Consumers** are those that subscribe to (read and process) these events.
- **Events** are organized and durably stored in topics.
- **Topics** are partitioned, meaning a topic is spread over a number of "buckets" located on different Kafka brokers. 
- Topics are **partitioned**, meaning a topic is spread over a number of "buckets" located on different Kafka brokers. 
  -  Events <u>with the same event key</u> are written to the same **partition**.
- To make your data *fault-tolerant(容错性)* and *highly-available(高可用)*, every topic can be **Replicated**.