#!/bin/sh
docker build -t felixseip/felixseip.com:latest .
docker push felixseip/felixseip.com:latest
[ "$(docker ps -a | grep felixseip.com)" ] && docker stop felixseip.com && docker rm felixseip.com
docker run -d -p 80:8080 --name felixseip.com felixseip/felixseip.com:latest