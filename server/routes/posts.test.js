const request = require('request');

function server_url(route) {
  const SRV_HOST = 'host.docker.internal'; // connecting to localhost over [docker networking](https://docs.docker.com/desktop/networking/)
  const SRV_PORT = 5000; // TODO: Get from environment variable
  return 'http://' + SRV_HOST + ':' + String(SRV_PORT) + route;
}

describe('API tests of the /post APIs', () => {
  test('GET /posts returns "works"', () => {

    request(server_url('/posts'), (error, response, body) => {

      expect(error).toBeNull();

      expect(response).not.toBeNull();
      expect(response).toBeDefined();
      expect(response.statusCode).toBe(200);
      expect(response.body).toBe("works");

      expect(body).toBeDefined();
      expect(body).toBe("works");
    });
  });

  test('POST /posts returns the newly created post with a status of 201', () => {
    const testPostMessage = {
      title: "Test post title",
      message: "Test post message",
      creator: "Test post creator",
      tags: ["Test post tag 1", "Test post tag 2"],
      selectedFile: "Test_post_selected_file.jpeg"
    };
    const post_payload = JSON.stringify(testPostMessage);
    const post_options = {
      headers: { 'content-type': 'application/json' },
      url: server_url('/posts'),
      body: post_payload
    };
    request.post(post_options, (error, response, body) => {

      expect(error).toBeNull();

      expect(response).not.toBeNull();
      expect(response).toBeDefined();
      expect(response.statusCode).toBe(201);
      expect(response.body).toBe(post_payload);

      expect(body).toBeDefined();
      expect(body).toBe(post_payload);
    });
  });

  test('POST /posts bad content returns an error with a status of 409', () => {
    const post_options = {
      headers: { 'content-type': 'application/json' },
      url: server_url('/posts'),
      body: ""
    };
    request.post(post_options, (error, response, body) => {

      expect(error).not.toBeNull();
      expect(error).toBeDefined();

      expect(response).not.toBeNull();
      expect(response).toBeDefined();
      expect(response.statusCode).toBe(409);
      expect(response.body).not.toBeDefined();

      expect(body).toBeNull();
    });
  });

});
