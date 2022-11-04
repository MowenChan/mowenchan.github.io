#!/bin/bash

echo "+==================================================+";
echo "|======= React Data URL Component Converter =======|";
echo "+==================================================+";

export temp0="export function";
export temp1="(){";
export temp2="return(<img src=\"data:image/jpg;base64,";
export temp3="\"/>)};"
export bound="<<<<<<<<bound>>>>>>>>"

echo "== Find some directory below:";
ls -F -1 | grep /;

echo "** Choose working space:"
read working_space;

cd $working_space;

echo "== Find some image files below:";
ls -1 *.png;
ls -1 *.jpg;

echo "** Choose file(s) to convert: (<file name> | <*>[.jpg][.png])"
read file_name;

if [ "$file_name" = "*" ];then
  rm ./dist.base64;
  ls -1 *.png | xargs -n 1 bash -c 'echo -n $temp0 ${0%%.*}Png $temp1 $temp2 >> dist.base64;base64 $0 >> dist.base64;echo $temp3 >> dist.base64;echo $bound >> dist.base64;';
  ls -1 *.jpg | xargs -n 1 bash -c 'echo -n $temp0 ${0%%.*}Jpg $temp1 $temp2 >> dist.base64;base64 $0 >> dist.base64;echo $temp3 >> dist.base64;echo $bound >> dist.base64;';
elif [ "$file_name" = "*.png" ];then
  rm -f ./png.base64;
  ls -1 *.png | xargs -n 1 bash -c 'echo -n $temp0 ${0%%.*}Png $temp1 $temp2 >> png.base64;base64 $0 >> png.base64;echo $temp3 >> png.base64;echo $bound >> png.base64;';
elif [ "$file_name" = "*.jpg" ];then
  rm ./jpg.base64;
  ls -1 *.jpg | xargs -n 1 bash -c 'echo -n $temp0 ${0%%.*}Jpg $temp1 $temp2 >> jpg.base64;base64 $0 >> jpg.base64;echo $temp3 >> jpg.base64;echo $bound >> jpg.base64;';
else 
  ls -1 $file_name | xargs -n 1 bash -c 'echo -n $temp0 ${0%%.*}${0##.*} $temp1 $temp2 >> ${file_name}.base64;base64 $0 >> ${file_name}.base64;echo $temp3 >> ${file_name}.base64';
fi