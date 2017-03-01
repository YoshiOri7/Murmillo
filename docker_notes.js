// =====================================================
// docker hub
// https://docs.docker.com/engine/getstarted/step_six/

// =====================================================
// murmilo codeChecker
docker build -t murmillo:codecheck .
docker tag b4739ef4a965 yoshiori/murmillo:codecheck
docker push yoshiori/murmillo:codecheck

// Pull your new image
docker pull yoshiori/murmillo:codecheck

// run containers
docker run -d --name murmillocodecheck -p 8510:8510 b4739ef4a965
docker run -ti --name murmillocodecheck -p 8510:8510 b4739ef4a965
docker exec -ti e647537f3b90 /bin/bash

// =====================================================
// murmilo codeChecker
docker build -t murmillo:server .
docker tag 41fd8cd1b937 yoshiori/murmillo:server
docker push yoshiori/murmillo:server

// Pull your new image
docker pull yoshiori/murmillo:server

// setup mysql database and link server
// allow mysql database root user
docker run --name mysql -e MYSQL_ROOT_PASSWORD=murmillo -d mysql:5.7
docker exec -ti 8779e675c9c9 /bin/bash
mysql -u root -p
CREATE DATABASE IF NOT EXISTS murmillo;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'murmillo';

// initialize database
docker run -ti --name murmilloserver --link mysql:mysql -p 8000:8000 41fd8cd1b937
docker exec -ti e0d67c542956 /bin/bash
npm run dbinit

