// $ node test_get.js

const request = require('request');

function server_url() {
	const SRV_HOST = 'host.docker.internal'; // connecting to localhost over [docker networking](https://docs.docker.com/desktop/networking/)
	const SVR_PORT = 5000;
  const SVR_ROUTE = '/posts'
	return 'http://' + SRV_HOST + ':' + String(SVR_PORT) + SVR_ROUTE;
}

test('GET /posts returns "works"', () => {

  const request_options = { url: server_url() };
  const promise = request.get(request_options)
  request(server_url(), function (error, response, body) {
  
  expect(error).toBeNull();
  expect(response).not.toBeNull();
  expect(response).toBeDefined();
  expect(response.statusCode).toBe(200);
  expect(body).toBe("works");
  });
}); 

