const { Consumer } = require('sqs-consumer');
const { SQSClient } = require('@aws-sdk/client-sqs');

const queueUrl = 'https://sqs.us-west-2.amazonaws.com/275199309843/withdrawals.fifo';

const app = Consumer.create({
  queueUrl: queueUrl,
  handleMessage: (message) => {
    let messageBody = JSON.parse(message.Body);
    console.log('NEW Withdrawal RECEIVED!', messageBody);
  },
  sqs: new SQSClient({
    region: 'us-west-2'
  })
})

app.start(); // listening for message added to the queue