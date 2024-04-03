const request = require('supertest');
const server = require('../src/server');

describe('Server Routes', () => {
  it('should respond with 404 on a bad route', async () => {
    const response = await request(server.app).get('/badroute');
    expect(response.status).toBe(404);
  });

  it('should respond with 404 on a bad method', async () => {
    const response = await request(server.app).post('/person');
    expect(response.status).toBe(404);
  });

  it('should respond with 500 if no name is in the query string', async () => {
    const response = await request(server.app).get('/person');
    expect(response.status).toBe(500);
  });

  it('should respond with 200 if the name is in the query string', async () => {
    const response = await request(server.app).get('/person?name=John');
    expect(response.status).toBe(200);
  });

  it('should return correct output object when name is provided', async () => {
    const name = 'John';
    const response = await request(server.app).get(`/person?name=${name}`);
    expect(response.body).toEqual({ name });
  });
});
