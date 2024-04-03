// src/middleware/validator.test.js
const validatorMiddleware = require('./validator'); // Import the validatorMiddleware function

describe('Validator Middleware', () => {
  it('should send 500 error for invalid query strings', () => {
    // Mock request object with missing name property
    const req = { query: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn(), send: jest.fn() };
    const next = jest.fn();

    // Call the middleware
    validatorMiddleware(req, res, next);

    // Expect status 500 to have been called with an error message
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Name is required in the query string' });
  });
});
