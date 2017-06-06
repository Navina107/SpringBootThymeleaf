#!/bin/bash
docker build --no-cache=true -t d2/seed-spring -f Dockerfile .
docker run -d -p 8080:8080 \
       -v $(pwd):/usr/src/app \
       --name seed-spring d2/seed-spring
