// $ node test_get.js

import request from 'request';

function server_url() {
	const SRV_HOST = 'host.docker.internal'; // connecting to localhost over [docker networking](https://docs.docker.com/desktop/networking/)
	const SVR_PORT = 5000;
	return 'http://' + SRV_HOST + ':' + String(SVR_PORT);
}

//make the POST request
const request_options = { url: server_url() };
const promise = request.get(request_options)
request(server_url(), function (error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});