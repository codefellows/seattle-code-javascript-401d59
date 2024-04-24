import dynamoose from 'dynamoose';

const Customers = dynamoose.model('customers', {
  name: String,
  age: Number
});

export const handler = async (event) => {
  let customers = null;
  console.log(event);
  if (event.pathParameters && event.pathParameters.id) {
    customers = await Customers.scan('id').eq(event.pathParameters.id).exec();
  } else {
    customers = await Customers.scan().exec();
  }

  customers = await Customers.scan().exec();

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(customers),
  };
  return response;
};