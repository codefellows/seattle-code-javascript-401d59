// import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
const { S3Client, GetObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3');

const s3Client = new S3Client({ region: 'us-west-2' });

function processStream(stream) {
  return new Promise((resolve, reject) => {
    let data = '';
    stream.on('data', (chunk) => {
      data += chunk;
    });
    stream.on('error', (error) => {
      console.error('SOMEHTING BAD HAPPENED WHILE PARSING STREAM', error);
      reject(error);
    });
    stream.on('end', () => {
      console.log('ALL DATA IS HERE', data);
      resolve(data);
    });
  });
}

const handler = async (event) => {
  let { bucket, object } = event.Records[0].s3;
  console.log('HERE IS MY EVENT INFO', bucket, object);
  let getCommand = {
    Bucket: bucket.name,
    Key: object.key
  }

  let fileData = await s3Client.send(new GetObjectCommand(getCommand));
  let stream = fileData.Body;

  let data = await processStream(stream);

  console.log('HERE IS THE FILE DATA', data);

  console.log('HERE ARE MY FOLDER AND FILE :', bucket.name, object.key, object.size);


  // to write
  let putCommand = {
    Bucket: bucket.name,
    ContentType: 'application/json',
    Body: JSON.stringify({ name: 'Jacob' }),
    Key: 'output/name.json'
  }

  try {
    await s3Client.send(new PutObjectCommand(putCommand));
    console.log('WE WRITE SOMETHING!!');
  } catch (e) {
    console.log('SOMETHING WENT WRONG ON WRITE: ', e);
  }

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('test'),
  };
  return response;
};

module.exports = {
  handler
}