// $ node test_get.js

const request = require('request');

function server_url(route) {
	const SRV_HOST = 'host.docker.internal'; // connecting to localhost over [docker networking](https://docs.docker.com/desktop/networking/)
	const SRV_PORT = 5000; // TODO: Get from environment variable
	return 'http://' + SRV_HOST + ':' + String(SRV_PORT) + route;
}

test('GET /posts returns "works"', () => {

  const request_options = { url: server_url('/posts') };
  const promise = request.get(request_options)
  request(server_url(), function (error, response, body) {
  
  expect(error).toBeNull();
  expect(response).not.toBeNull();
  expect(response).toBeDefined();
  expect(response.statusCode).toBe(200);
  expect(body).toBe("works");
  });
}); 

