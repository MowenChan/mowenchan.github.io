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
echo 'witch file do you want to convert?"(filename/* for all files;filename .jpg for all jpg)?"';
read file;

if [ "$file" = "*" ];then
  ls -1 *.png | xargs -n 1 bash -c 'convert "$0" -quality 70  "$0.jpg";';
  ls -1 *.jpg | xargs -n 1 bash -c 'echo -n $temp0 ${0%%.*}Jpg $temp1 $temp2 >> dist.base64;base64 $0 >> dist.base64;echo $temp3 >> dist.base64';
  rm *.png;
  rm *.jpg;
elif [ "$file" = ".jpg" ];then
  ls -1 *.jpg | xargs -n 1 bash -c 'echo -n $temp0 ${0%%.*}Jpg $temp1 $temp2 >> dist.base64;base64 $0 >> dist.base64;echo $temp3 >> dist.base64';
elif [ "$file" = ".png" ];then
  ls -1 *.png | xargs -n 1 bash -c 'echo -n $temp0 ${0%%.*}Png $temp1 $temp2 >> dist.base64;base64 $0 >> dist.base64;echo $temp3 >> dist.base64';
else
  echo "$file=>$file.jpg=>${file%%.*}Jpg"
  convert "$file" -quality 70  "$file.jpg";
  echo -n $temp0 ${file%%.*}Jpg $temp1 $temp2 > dist.base64;base64 "$file.jpg" >> dist.base64;echo $temp3 >> dist.base64;
fi


echo "+==================================================+";
echo "|======= React Data URL Component Converter =======|";
echo "+==================================================+";

echo "== Find some directory below:";
ls -l;

echo "** Choose working space:"
read working_space;

echo "== Find some image files below:";
ls -1 *.png;
ls -1 *.jpg;

echo "** Choose file(s) to convert: (<file name> | <*>[.jpg][.png])"
read file_name;

if [ "$file_name" = "*" ];then
  echo "all files";
elif [ "$file_name" = "*.png" ];then
  echo "all png files";
elif [ "$file_name" = "*.jpg" ];then
  echo "all jpg files";
else 
  echo "only $file_name"
fi