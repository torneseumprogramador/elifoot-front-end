#!/bin/bash

mensagem="$1"

if [ -z "$mensagem" ]; then
    echo "Por favor forneça uma mensagem de commit como parâmetro"
    echo "Uso: ./push.sh \"sua mensagem de commit\""
    exit 1
fi

git add .
git commit -am "$mensagem"

git push

git status