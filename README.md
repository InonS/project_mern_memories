# Website

## [Client](client/README.md)

### Development

Run a disposable container in interactive terminal mode, logging in as a specific user in a specific working directory, mounting the present working directory to a path in the container as a volume, and exposing a specific port: 
```shell
$ docker run --rm -it --user node -w /opt/app/ -v $(pwd):/opt/app/ -p 3000:3000 node:lts-bullseye-slim /bin/bash
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

### Development

```shell
npm init -y
npm install body-parser cors express mongoose nodemon
```

* mongodb.com/cloud/atlas

## DevOps
* Hosting?