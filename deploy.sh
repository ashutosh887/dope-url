#!/bin/bash

git pull
echo "Building Server"
docker-compose -f ./server/docker-compose.yml up -d --build