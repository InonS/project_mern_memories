# Website

* Tutorial video is [here](https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu)
* Most recently stopped at [implementing the form](https://youtu.be/ngc9gnGgUdA?t=3480)
* [Next: Strarting from Figma](https://www.youtube.com/watch?v=4oV65GVVits&list=PL6QREj8te1P6CkO_4OIK1-nwG5OxCD5tR&index=5&t=649s)

Before attempting a deployment for development or production, first make sure your docker daemon is running, for example by running

(if you're _not_ using Docker for Windows)
```shell
$ systemctl status docker
```
or else, either
```shell
$ docker info
```
or
```shell
$ docker stats
```

## [Client](client/README.md)

### Local deployement

Run a disposable container in interactive terminal mode, logging in as a specific user in a specific working directory, mounting the present working directory to a path in the container as a volume, and exposing a specific port: 
```shell
$ pushd ~/src/website/client/ && docker run --rm -it --name webclient --user node -w /opt/app/ -v $(pwd):/opt/app/ -p 3000:3000 node:lts-bullseye-slim npm start && popd
```

If you prefer a more lightweight Docker image, consider switching to `node:lts-alpine`.

### Development

Set up the client app uisng a [toolchain for a single-page app](https://reactjs.org/docs/create-a-new-react-app.html#recommended-toolchains).
1. Execute the [Create React App](https://create-react-app.dev/) binary, then 
2. Install some packages usign the [Node Package Manager (NPM)](https://www.npmjs.com/)

```shell
npx create-react-app .
npm install axios moment react-file-base64 redux react-redux redux-thunk @material-ui/core
```

TODO: Use [Redux Toolkit](https://redux-toolkit.js.org/). Install on build server `nmp install @reduxjs/toolkit` and test client, [for example here](https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation).

## Server

### Local deployement

Run a disposable container in interactive terminal mode, logging in as a specific user in a specific working directory, mounting the present working directory to a path in the container as a volume, and exposing a specific port: 
```shell
$ pushd ~/src/website/server/ && docker run --rm -it --name webserver --user node -w /opt/app/ -v $(pwd):/opt/app/ -p 5000:5000 node:lts-bullseye-slim npm start && popd
```
* TODO: Also pass server port in as environment variable.

### Development

Setting up [node.js](https://nodejs.org/)

```shell
npm init -y
npm install body-parser cors express mongoose nodemon
```

* Set up cluster and database credentials on https://mongodb.com/cloud/atlas

## API test

Unit Testing using [Jest](https://jestjs.io/)

```shell
$ pushd ~/src/website/server/ && docker run --rm -it --name test_webserver --user node -w /opt/app/ -v $(pwd):/opt/app/ -p 5000:5000 node:lts-bullseye-slim npm test && popd
```

## DevOps
* Hosting?

## Stupid time suckers

### Wall of shame

1. Mistyped "userDispatch" instead of "useDispatch"
2. Mistyped "asynch" instead of "async"