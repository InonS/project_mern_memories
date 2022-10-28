# Website

https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu

## [Client](client/README.md)

### Development

Run a disposable container in interactive terminal mode, logging in as a specific user in a specific working directory, mounting the present working directory to a path in the container as a volume, and exposing a specific port: 
```shell
$ docker run --rm -it --name webclient --user node -w /opt/app/ -v $(pwd):/opt/app/ -p 3000:3000 node:lts-bullseye-slim /bin/bash
```


```shell
npx create-react-app .
npm install axios moment react-file-base64 redux redux-thunk
```
### Local deployement

```shell
npm start
```

## Server

Run a disposable container in interactive terminal mode, logging in as a specific user in a specific working directory, mounting the present working directory to a path in the container as a volume, and exposing a specific port: 
```shell
$ docker run --rm -it --name webserver --user node -w /opt/app/ -v $(pwd):/opt/app/ -p 5000:5000 node:lts-bullseye-slim /bin/bash
```

### Development

```shell
npm init -y
npm install body-parser cors express mongoose nodemon
```

* https://mongodb.com/cloud/atlas

## DevOps
* Hosting?