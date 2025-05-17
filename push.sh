#!/bin/bash

read -p "Digite a mensagem do commit: " mensagem

git add .
git commit -am $mensagem

git push

git status