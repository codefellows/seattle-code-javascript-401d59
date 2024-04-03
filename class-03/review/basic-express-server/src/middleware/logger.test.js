// src/middleware/logger.test.js
const loggerMiddleware = require('./logger');

describe('Logger Middleware', () => {
  it('should log request method and path', () => {
    // Mock request and response objects
    const req = { method: 'GET', path: '/test' };
    const res = {};
    const next = jest.fn(); // a mock function

    // Mock console.log
    console.log = jest.fn();

    // Call the middleware
    loggerMiddleware(req, res, next);

    // Expect console.log to be called with the expected message
    expect(console.log).toHaveBeenCalledWith('GET /test');
    expect(next).toHaveBeenCalled();
  });
});