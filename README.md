# Build sample web application using node and docker

## requirements

- download and install docker [Docker](https://www.docker.com/get-started)

## technologies

- Node js
- Docker
- Javascript

## helpful commands

- to see all running containers => `docker ps`
- to execute command inside the container => `docker exec -it {{containerId}} command/sh`
- to stop all active images => `docker stop $(docker ps -aq)`
- to stop specific container => `docker stop {{containerID}} | docker kill {{containerID}}`
- to build your image => `docker build -t {{name/tag}} .`
- to run the app => `docker run -p {{incoming port/hitting port from client }}:{{app port that inside the container}} {{name/tag}}`
