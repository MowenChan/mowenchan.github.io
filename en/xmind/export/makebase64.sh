#!/bin/bash

echo "archives:";
ls -1;
echo "witch folder do you want to convert?"
read folder;

export temp0="export function";
export temp1="(){";
export temp2="return(<img src=\"data:image/jpg;base64,";
export temp3="\"/>)};"

cd $folder;

ls -1;
echo 'witch file do you want to convert?"(filename/* for all files)?"';
read file;

if [ "$file" = "*" ];then
  ls -1 *.png | xargs -n 1 bash -c 'convert "$0" -quality 70  "$0.jpg";';
  ls -1 *.jpg | xargs -n 1 bash -c 'echo -n $temp0 ${0%%.*}Jpg $temp1 $temp2 >> dist.base64;base64 $0 >> dist.base64;echo $temp3 >> dist.base64';
  rm *.png;
  rm *.jpg;
else
  echo "$file=>$file.jpg=>${file%%.*}Jpg"
  convert "$file" -quality 70  "$file.jpg";
  echo -n $temp0 ${file%%.*}Jpg $temp1 $temp2 > dist.base64;base64 "$file.jpg" >> dist.base64;echo $temp3 >> dist.base64;
fi
