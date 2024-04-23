const { handler } = require('./index.js');

describe('Testing the lambda code',() => {

  test('Should run code without an error', async () => {

    let response = await handler({
      Records: [{
        s3: {
          bucket: {name: 'test'},
          object: {key: 'test'}
        }
      }]
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual('test');
  });
});