const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const sns = new AWS.SNS();
const amount = process.argv[2] ? process.argv[2] : 100 // what is this???

const topic = 'arn:aws:sns:us-west-2:275199309843:Withdrawals.fifo';
const messagePayload = JSON.stringify({ amount, bankId: 'family' });

console.log('PAYLOAD BEFORE Publication', messagePayload);

const snsParams = {
  Message: messagePayload,
  TopicArn: topic,
  MessageGroupId: 'withdrawal',
  MessageDeduplicationId: 'bank'
}

sns.publish(snsParams).promise()
  .then(response => {
    console.log(response);
  })
  .catch(e => {
    console.error('SOMETHING WENT WRONG', e);
  });