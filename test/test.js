var request = require('supertest');
var app = require('../server');
describe('GET /will', () => {
  it('respond with hello world', (done) => {
      request(app).get('./will').expect('{ "response": "Hello world" }', done);
  });
});
