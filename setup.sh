#!/bin/bash
docker exec -it adonisjsdemo_web_1 cp /usr/src/app/.env.example /usr/src/app/.env
docker exec -it adonisjsdemo_web_1 /bin/bash -c "cd /usr/src/app/ && node ./ace db:seed"
docker-compose restart