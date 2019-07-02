#!/bin/bash

csv_file=$1

while IFS=',' read -r file_name; do
	echo -e "File Name\t: $file_name"
	sshpass -p "peliCamD0" scp -P 52374 cgolas@datascience.westminstercollege.edu:~/*/$file_name /Users/Calvin/Downloads/yessir
done < $csv_file
IFS=$' \t\n'
