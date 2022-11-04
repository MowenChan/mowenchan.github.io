#!/bin/bash

echo a:;
read a;
echo b:;
read b;

if [ "$a" = '*' ];then
  echo eq;
else
  echo neq;
fi