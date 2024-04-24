import { handler } from './index.mjs';

handler({pathParameters: null})
.then(response => {
  console.log(response);
});

handler({ pathParameters: { id: '2'}})
.then(response => {
  console.log(response);
});